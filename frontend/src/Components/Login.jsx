import React, { useState } from 'react'
import './Login.css'
import { TextField } from '@mui/material'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'
export default function Login() {
	const navigate = useNavigate();
	const [loginDetail,setLoginDetail] = useState({
		email:'', password:'',address:'',mobile:'', category:'User', name:''
	})
	const handleFieldChange = (e, field)=>{
        let newval = e.target.value;
        setLoginDetail({
            ...loginDetail, [field]:newval
        })
    }
	const [showpass, setShowpass] = useState(false);
    const handleClickShowPassword=()=>{
        setShowpass(!showpass);
    }

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("hello");
		if(loginDetail.email.trim()===""){
			toast.error("Please Enter an Email");
			return;
		}
		if(loginDetail.password.trim()===""){
			toast.error("Please Enter a Password");
			return;
		}
		fetch(process.env.REACT_APP_BACKEND_URL+"api/v1/user/login",{
			headers:{"content-type":"application/json"},
			body: JSON.stringify(loginDetail),
			method: "POST"
		}).then((res)=>res.text()).then((data)=>{
			if(data === "No User") {toast.error("User does not exists!");return;}
			if(data === "Invalid Password"){toast.error("Incorrect Password!");return;}
			console.log("data: "+data);
			localStorage.setItem("logindata", data);
			const dataparse = JSON.parse(data);
			if(dataparse.category === "Delivery")  navigate("/delPending");
			else if(dataparse.category === "Admin")	navigate("/admPending");
			else navigate("/");
			window.location.reload();
		})
	}
	return (
	<div className='main-container'>
		<div className="login-in-container">
			<h1 className='login-title'>Log In</h1>
			<div className="ip-container">
				<TextField value={loginDetail.email} label="E-mail ID" variant="filled" fullWidth
				type="text" onChange={(e)=>handleFieldChange(e,'email')}/>
			</div>
			<div className="ip-container">
				<TextField value={loginDetail.password} label="Password" variant="filled" fullWidth
				type={showpass?"text":"password"} onChange={(e)=>handleFieldChange(e,'password')}/>
			</div>
			<div className="show-pass">
                <input type="checkbox" onClick={handleClickShowPassword}/>
                <p>{showpass?"Hide Password":"Show Password"}</p>
            </div>
			<div className="wrapper dologin-btn">
				<button onClick={handleSubmit}>Log In</button>
			</div>
			<div className="wrapper new-user">
				<p>New User?</p>
				<Link className='newuser-link' to='/signup'>Sign up</Link>
			</div>
		</div>
	</div>
	)
}

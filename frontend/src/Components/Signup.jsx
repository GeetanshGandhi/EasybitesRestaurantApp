import React, { useState } from 'react'
import './Signup.css'
import { TextField } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
export default function Signup() {
	const [userdetails, setUserdetails] = useState({
		name:'',email:'', password:'', address:'', mobile:'', category:'User'
	})
	
	const handleFieldChange = (e,field) =>{
		let newval = e.target.value;
        setUserdetails({
            ...userdetails, [field]:newval
        })
	}
	const [showpass, setShowpass] = useState(false);
    const handleClickShowPassword=()=>{
        setShowpass(!showpass);
    }
	const navigate = useNavigate();
	const handleSignup = (e) =>{
		e.preventDefault();
		if(userdetails.name.trim()===''){toast.error("Please Enter Your Name!");return;}
		if(userdetails.email.trim()===''){toast.error("Please Enter Your Email ID!");return;}
		if(userdetails.mobile.trim()===''){toast.error("Please Enter Your Contact Number!");return;}
		if(userdetails.address.trim()===''){toast.error("Please Set a Delivery Address!");return;}
		if(userdetails.password.trim()===''){toast.error("Please Set a Password!");return;}

		fetch(process.env.REACT_APP_BACKEND_URL+'api/v1/user/add',{
			method: "POST", 
			headers:{"Content-type":"application/json"},
			body:JSON.stringify(userdetails)
		  }).then((res)=>res.text()).then((data)=>{
			if(data==='Invalid Mobile'){toast.error("Invalid Mobile Number!");return;}
			if(data==="Invalid Password"){toast.error("Invalid Password!");return;}
			if(data==="User Exists"){toast.error("User already exists with this Email ID. Please Log in to continue!");return;}
			toast.success("Registration Successful! Please log in to continue");
			navigate("/login");
		  })
	}
	return (
		<div className='main-container'>
			<div className="signup-container">
				<h1 className='signup-title'>Register</h1>
				<div className="ip-container">
					<TextField value={userdetails.name} label="Full Name" variant="standard"
					type="text" onChange={(e)=>handleFieldChange(e,'name')} fullWidth/>
				</div>
				<div className="ip-container">
					<TextField value={userdetails.email} label="Email ID" variant="standard"
					type="text" onChange={(e)=>handleFieldChange(e,'email')} style={{"width": "400px"}}/>
					<TextField value={userdetails.mobile} label="Contact Number" variant="standard"
					type="text" onChange={(e)=>handleFieldChange(e,'mobile')} style={{"width": "400px"}}/>
				</div>
				<div className="ip-container">
					<div className="add-msg">
						<p className='add-head'>Address:</p>
					</div>
					<textarea rows="4" value={userdetails.address} placeholder="Address"
					className='add-inp' onChange={(e)=>handleFieldChange(e,'address')} style={{"width": "400px"}}/>
				</div>
				<div className="ip-container">
				<div className="add-msg">
						<p className='add-head'>Create Password:</p>
						<p className='add-warn'>Password must be contain 8 to 16 characters, atleast one lowercase, uppercase, digit and special symbol(@#$%)</p>
					</div>
					<TextField value={userdetails.password} label="Password" variant="standard"
					type={showpass?"text":"password"} onChange={(e)=>handleFieldChange(e,'password')} style={{"width": "400px"}}/>
				</div>
				<div className="wrapper show-pass">
                	<input type="checkbox" onClick={handleClickShowPassword}/>
                	<p>{showpass?"Hide Password":"Show Password"}</p>
            	</div>
				<div className="wrapper dologin-btn">
					<button onClick={handleSignup}>Register</button>
				</div>
				<div className="wrapper new-user">
					<p>Already Registered?</p>
					<Link className='newuser-link' to='/login'>Log In</Link>
				</div>
			</div>
		</div>
	)
}

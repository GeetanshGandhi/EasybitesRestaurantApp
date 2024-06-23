import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import logo from "../images/logo.png";
import profilepic from "../images/profilepic.png"
import locationIcon from "../images/locationIcon.png"
import { Link, useNavigate } from 'react-router-dom';
export default function Navbar() {
	const [logindata, setlogin] = useState(null);
	useEffect(()=>{
		if(localStorage.getItem("logindata")!==null){
			setlogin(JSON.parse(localStorage.getItem("logindata")));
		}
	}, [])

	const doLogOut = () => {
		localStorage.removeItem("logindata");
		nav("/");
		window.location.reload();
	}
	const nav = useNavigate();

	//toggle submenu
    const toggleMenu = () => {
        document.getElementById("subMenuWrap").classList.toggle("submenu-open");
    }

	return (
		<nav>
			<div className="title">
                <div className="headers-wrap">
                    <img src={logo} alt='logo' />
                    <h1>EASY BITES</h1>
                </div>
				<div className="location">
					<img src = {locationIcon} alt = "loc"/>
					<h2>M.G. Road, Indore</h2>
				</div>
			</div>
            {
                logindata===null || logindata.category==="User"?
                <div className="search-bar">
                    <img src={require("../images/searchIcon.png")} alt="si"/>
                    <p>I</p>
                    <input placeholder="Search for an item or more..." id="search-inp" name="search-inp"/>
                </div>
                :<></>
            }
			<div className="navlinks">
				<div className="login-setting">
					{
						logindata===null?
						<>
							<button className="loginbutton" onClick={()=>{nav("/login")}}>LOGIN</button>
							<Link className="signup" to= "/signup">Sign up</Link>
						</>:
						<div className='loggedindata'>
                            {
                                logindata.category==="Delivery"?
                                    <Link className='navlink' to="/delPending">Orders to Deliver</Link>
                                :logindata.category==="Admin"?
                                    <Link className='navlink' to="/admPending">Pending Orders</Link>
                                :<Link className='navlink' to="/">Home</Link>
                            }
                            {
                                logindata.category!=="User"?
                                <>                               
                                    <img className = "profile-img" src={profilepic} alt="profile"/>
                                    <p>{logindata.name}</p>
                                </>:<></>
                            }							
							<button className='logoutbutton' onClick={doLogOut}>LOG OUT</button>
							<img className="hamburger-btn" src={require("../images/hamburger.webp")} alt="alter" onClick={toggleMenu}/>
						</div>
					}
				</div>
			</div>
            {
                logindata!==null?
                
                <div className="submenu-wrap" id="subMenuWrap">
                    <div className="submenu">
                        <div className="user-info">
                            <img className="submenu-img" src={require("../images/profilepic.png")} alt="profile img"></img>
                            <p className="submenu-head">{logindata.name}</p>
                        </div>
                        <hr/>
                        
                        <Link className='submenu-link' to="/">
                            <div className="submenu-link-wrapper">
                                <img src = {require("../images/homeIcon.png")}/>
                                <p>Home</p>
                            </div>
                        </Link>
                        <hr/>
                        {
                            logindata.category==="Admin"?
                            <>
                                <Link className='submenu-link' to="/admPending">
                                    <div className="submenu-link-wrapper">
                                        <img src = {require("../images/orderIcon.png")}/>
                                        <p>View Pending Orders</p>
                                    </div>
                                </Link>
                                <hr/>
								<Link className='submenu-link' to="/completeOrders">
                                    <div className="submenu-link-wrapper">
                                        <img src = {require("../images/completeIcon.png")}/>
                                        <p>Complete Orders</p>
                                    </div>
                                </Link>
                            </>:<>
								<Link className='submenu-link' to="/cart">
                                    <div className="submenu-link-wrapper">
                                        <img src = {require("../images/cartIcon.png")}/>
                                        <p>Cart</p>
                                    </div>
                                </Link>
								<hr/>
								<Link className='submenu-link' to="/myOrders">
                                    <div className="submenu-link-wrapper">
                                        <img src = {require("../images/orderIcon.png")}/>
                                        <p>My Orders</p>
                                    </div>
                                </Link>
							</>
                        }
                    </div>
                    
                </div>  :<></>
            }
		</nav>
	)
}

import React, { useEffect, useState } from 'react'
import './Home.css'
import FoodItem from './FoodItem';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
export default function Home(props) {

	const categorylist = ["North Indian","Bread","South Indian","Chinese","Italian","Indian Starter", "Fast Food","Dessert","Beverage"]
	const [todayspecial, settsp] = useState([]);
	useEffect(()=>{
		fetch(process.env.REACT_APP_BACKEND_URL+"api/v1/menu/getAllById",{
			headers:{"content-type":"application/json"},
			body: JSON.stringify([48,71,8,53]),
			method: "POST"
		}).then((res)=>res.json()).then((data)=>{settsp(data)})
	},[])
	const [customerchoice, setcustomerchoice]=  useState([]);
	useEffect(()=>{
		fetch(process.env.REACT_APP_BACKEND_URL+"api/v1/menu/getAllById",{
			headers:{"content-type":"application/json"},
			body: JSON.stringify([26,46,3,16,57,76]),
			method: "POST"
		}).then((res)=>res.json()).then((data)=>{setcustomerchoice(data)})	
	},[])

	const rightScroll = () => {
		document.querySelector(".cat-scroll").scrollBy({left: 150, behavior: 'smooth'})
	}

	const navigate = useNavigate();
	const handleAddCart = (item) =>{
		if(localStorage.getItem("logindata")===null){
			navigate("/login");
			toast.warning("Please Log in to continue!");
			return;
		}
		props.addToCart(item);
	}

	return (
		<div className='home-container'>
			<div className="wrapper offerwindow">
				<p>Display Offers Here</p>
			</div>
			<div className="wrapper cat-container">
				<div className="cat-scroll">
				<div className="cat-slide">
					{
						categorylist.map((cat)=>{
							return <Link className='view-cat' to="/byCategory" state={{category:cat}}>
								<div className='cat-item'>
									<div className="wrapper">		
										<img src={require("../images/"+cat+".jpg")}/>
									</div>
									<p>{cat}</p>
								</div>
							</Link>
						})
					}
				</div>
				<div className="cat-slide">
					{
						categorylist.map((cat)=>{
							return <Link className='view-cat' to="/byCategory" state={{category:cat}}>
								<div className='cat-item'>
									<div className="wrapper">		
										<img src={require("../images/"+cat+".jpg")}/>
									</div>
									<p>{cat}</p>
								</div>
							</Link>
						})
					}
				</div>
				</div>
				<div	 className="arrow-wrap" onClick={rightScroll}>
					<img className='arrows' src={require("../images/rightArrow.png")} alt="left"/>
				</div>
			</div>
			
			<div className="todaysp">
				<h2>Today's specials:</h2>
				<div className="fooditem-wrapper">
				{
					todayspecial.map((item)=>{
						return <FoodItem item={item} addToCart={handleAddCart} isincart={false}/>
					})
				}
				</div>
			</div>
			<div className="todaysp">
				<h2>Customer's Choice:</h2>
				<div className="fooditem-wrapper">
				{
					customerchoice.map((item)=>{
						return <FoodItem item={item} addToCart={handleAddCart} isincart={false}/>
					})
				}
				</div>
			</div>
		</div>
	)
}

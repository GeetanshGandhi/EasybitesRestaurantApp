import React, { useEffect, useState } from 'react'
import './FoodItem.css'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
export default function FoodItem(props) {
    const [logindata, setlogin] = useState(null);
	useEffect(()=>{
		if(localStorage.getItem("logindata")!==null){
			setlogin(JSON.parse(localStorage.getItem("logindata")));
		}
	}, [])
    const navigate = useNavigate();
    const handleAddCart = () =>{
        if(logindata===null){
            navigate("/login");
            toast.warning("Please Log In to Continue!");
            return;
        }
        props.addToCart(props.item);
    }
    return (
        <div className='fooditem-container'>
            <div className='wrapper'>
                <img src = {require("../images/FoodItem/"+props.item.name+".png")}/>
            </div>
            <p className='item-title'>{props.item.name}</p>
            <p className='price'>&#8377;{props.item.price}</p>
            {
                props.isincart?<></>:
                <>
                    <div className="wrapper">
                        <button className='buynow' onClick={handleAddCart}>Add To Cart</button>
                    </div>
                </>
            }
        </div>
    )
}

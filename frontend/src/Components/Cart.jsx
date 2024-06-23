import React from 'react'
import FoodItem from './FoodItem'
import './Cart.css'
import { useNavigate } from 'react-router-dom'
export default function Cart(props) {

    const navigate = useNavigate();
    return (
        <div className='cart-container'>
            <p className='cart-head'>Your Cart</p>
            <div className="cartitem-container">
            {   
                props.cart.length===0? <p className='noitem-msg'>Add items to cart to view here</p>:
                props.cart.map((item)=>{
                    return <div className="cartitem-wrap">
                        <FoodItem item={item} isincart={true}/>
                        <div className="wrapper">
                            <button className='removecart-btn' onClick={()=>props.removeFromCart(item)}>Remove From Cart</button>
                        </div>
                    </div>
                })
            }
            </div>
            {
                props.cart.length===0?<></>:
                <div className="wrapper">
                    <button className='checkout' onClick={()=>navigate("/bill")}>Confirm Order</button>
                </div>
            }
        </div>
    )
}

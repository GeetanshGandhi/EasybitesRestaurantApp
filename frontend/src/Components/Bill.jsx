import React, { useEffect, useState } from 'react'
import './Bill.css'
import FoodItem from './FoodItem'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
export default function Bill(props) {
    const [loginuser,setloginuser] = useState({
        name:'', category:'User', password:'', address:'',email:'',mobile:''
    });
    useEffect(()=>{
        setloginuser(JSON.parse(localStorage.getItem("logindata")));
    },[])
    const [grandtotal, settotal] = useState(0);
    useEffect(()=>{
        let total = 0;
        for(let i = 0; i<props.cart.length; i++){
            total+=props.cart[i].price;
        }
        settotal(total);
    },[])
    const [pmethod, setpmethod] = useState("Cash On Delivery");
    const [deliverAdd, setAddess] = useState("");
    const navigate = useNavigate();
    const handleConfirm = () =>{
        if(deliverAdd===""){
            toast.error("Enter a Delivery Address!");
            return;
        }
        let content = "";
        for(let i = 0; i<props.cart.length-1; i++){
            content+=props.cart[i].name+", "
        }
        content+=props.cart[props.cart.length-1].name;
        const orders = {
            "content": content,
            "grandTotal":grandtotal,
            "paymentMethod":pmethod,
            "status":"Order Placed",
            "customerEmail":loginuser.email,
            "deliveryAddress": deliverAdd
        }
        fetch(process.env.REACT_APP_BACKEND_URL+"api/v1/order/add",{
            headers:{"content-type":"application/json"},
            body: JSON.stringify(orders),
            method: "POST"
        }).then((res)=>res.text()).then((data)=>{
            toast.success("Order Placed Successfully!");
            localStorage.removeItem("easybitesCart");
            navigate("/myOrders");
        })
    }
    return (
        <div className='bill-container'>
            <div className="items-container">
            {
                props.cart.map((item)=>{
                    return <FoodItem item={item} isincart={true}/>
                })
            }
            </div>
            <p className='total-msg'>Grand Total(inclusive of taxes):<b> &#8377; {grandtotal}</b></p>
            <div className="wrapper">
                <p className='p-add'>Deliver to:</p>
                <textarea rows="4" value={deliverAdd} placeholder="Delivery Address" className='add-inp' 
                onChange={(e)=>setAddess(e.target.value)} style={{"width": "400px"}}/>
            </div>
            <div className="wrapper">
                <p className='pm-msg'>Select a payment method (default: <u>Cash On Delivery)</u></p>
                <select name="pmethod" id = "pmethod" onChange={(e)=>{setpmethod(e.target.value)}}>
                    <option value="Cash On Delivery">Cash On Delivery</option>
                    <option value="UPI">UPI</option>
                    <option value="Debit Card">Debit Card</option>
                    <option value="Credit Card">Credit Card</option>
                </select>
            </div>

            <div className="wrapper">
                <button className='confirmorder-btn' onClick={handleConfirm}>Confirm Order</button>
            </div>
        </div>
    )
}

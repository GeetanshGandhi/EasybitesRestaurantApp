import React, { useState, useEffect } from 'react'
import './DelPendingOrder.css'
import OrderItem from './OrderItem';
export default function DelPendingOrder() {
    const loginuser = JSON.parse(localStorage.getItem("logindata"));
    const [medeliver, setmedeliver] = useState([]);
    const [outfordeliv, setoutfordeliv] = useState([]);
    useEffect(()=>{
        fetch(process.env.REACT_APP_BACKEND_URL+"api/v1/order/getByStatus",{
            method:"POST",headers:{"content-type":"application/json"},
            body: "Out for Delivery"
        }).then((res)=>res.json()).then((data)=>{
            setoutfordeliv(data);          
        })
    },[])
    useEffect(()=>{
        if(loginuser===null){return;}
        const delivperson = {
            "email":loginuser.email,
            "name":loginuser.name,
            "contact":loginuser.mobile
        }
        const input = [JSON.stringify(delivperson),"Delivering"] 
        fetch(process.env.REACT_APP_BACKEND_URL+"api/v1/order/getByDelivAndStat",{
            method:"POST",headers:{"content-type":"application/json"},
            body: JSON.stringify(input)
        }).then((res)=>res.json()).then((data)=>{
            setmedeliver(data);        
        })
    },[])
    return (
        <div className='nonflex-container'>
            <h1 className='delpen-head'>Undelivered Orders</h1>
            
            <p className='delpen-subhead'>You are delivering: </p>
            <div className="delpen-container">
            {
                medeliver.map((item)=>{
                    return <OrderItem orderitem={item}/>
                })
            }
            </div>

            <p className="delpen-subhead">Orders Out for Delivery:</p>
            <div className="delpen-container">
            {
                outfordeliv.map((item)=>{
                    return <OrderItem orderitem={item}/>
                })
            }
            </div>

        </div>
    )
}

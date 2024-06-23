import React, { useEffect, useRef, useState } from 'react'
import './Myorders.css'
import OrderItem from './OrderItem';
export default function Myorders() {
    const [orders, setorders] = useState([]);
    useEffect(()=>{
        fetch(process.env.REACT_APP_BACKEND_URL+"api/v1/order/getByEmail",{
            headers:{"content-type":"application/json"},
            body: JSON.parse(localStorage.getItem("logindata")).email,
            method:"POST"
        }).then((res)=>res.json()).then((data)=>{setorders(data)})
    },[])

    
    // //changing color of status
    // const mount = useRef(true);
    // useEffect(()=>{
    //     if(mount.current){
    //         const stat = document.querySelector(".status");
    //         const inner = stat.innerHTML;
    //         if(inner==="Preparing"){
    //             stat.style.color="orange";
    //         }
    //     }
    //     return ()=>{
    //         mount.current = false;
    //     }
    // },[mount])
    return (
        <div className='mo-container'>
            <h2>My Orders</h2>
            <div className="orderitem-container">
            {
                orders.length===0?<p>You have not placed any order yet.</p>:
                orders.map((orderitem)=>{
                    return <OrderItem orderitem={orderitem}/>
                })
            }
            </div>
            
        </div>
    )
}

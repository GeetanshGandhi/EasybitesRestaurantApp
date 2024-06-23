import React, { useEffect, useState } from 'react'
import './AdmPendingOrder.css'
import OrderItem from './OrderItem';
export default function AdmPendingOrder() {
    const [placed, setplaced] = useState([]);
    const [preparing, setpreparing] = useState([]);
    const [outfordelivery, setoutfordelivery] = useState([]);
    const [delivering, setdelivering] = useState([]);
    useEffect(()=>{
        fetch(process.env.REACT_APP_BACKEND_URL+"api/v1/order/getByStatus",{
            method:"POST",headers:{"content-type":"application/json"},
            body: "Order Placed"
        }).then((res)=>res.json()).then((data)=>{
            setplaced(data);          
        })
    },[])
    useEffect(()=>{
        fetch(process.env.REACT_APP_BACKEND_URL+"api/v1/order/getByStatus",{
            method:"POST",headers:{"content-type":"application/json"},
            body: "Preparing"
        }).then((res)=>res.json()).then((data)=>{
            setpreparing(data);          
        })
    },[])
    useEffect(()=>{
        fetch(process.env.REACT_APP_BACKEND_URL+"api/v1/order/getByStatus",{
            method:"POST",headers:{"content-type":"application/json"},
            body: "Out for Delivery"
        }).then((res)=>res.json()).then((data)=>{
            setoutfordelivery(data);          
        })
    },[])
    useEffect(()=>{
        fetch(process.env.REACT_APP_BACKEND_URL+"api/v1/order/getByStatus",{
            method:"POST",headers:{"content-type":"application/json"},
            body: "Delivering"
        }).then((res)=>res.json()).then((data)=>{
            setdelivering(data);          
        })
    },[])
    return (
        <div className='nonflex-container'>
            <h1 className='admpending-head'>Undelivered Orders</h1>

            <p className='pen-head'>Placed Orders: </p>
            <div className="penorder-container">
            {
                placed.map((item)=>{
                    return <OrderItem orderitem={item}/>
                })
            }
            </div>

            <p className='pen-head'>Preparing: </p>
            <div className="penorder-container">
            {
                preparing.map((item)=>{
                    return <OrderItem orderitem={item}/>
                })
            }
            </div>

            <p className='pen-head'>Out for Delivery: </p>
            <div className="penorder-container">
            {
                outfordelivery.map((item)=>{
                    return <OrderItem orderitem={item}/>
                })
            }
            </div>

            <p className='pen-head'>Delivering: </p>
            <div className="penorder-container">
            {
                delivering.map((item)=>{
                    return <OrderItem orderitem={item}/>
                })
            }
            </div>
        </div>
    )
}

import React, { useEffect, useState } from 'react'
import './CompleteOrders.css'
import OrderItem from './OrderItem.jsx';
export default function CompleteOrders() {
    const [complete, setcomplete] = useState([]);
    useEffect(()=>{
        fetch(process.env.REACT_APP_BACKEND_URL+"api/v1/order/getByStatus",{
            headers:{"content-type":"application/json"}, method: "POST",
            body: "Complete"
        }).then((res)=>res.json()).then((data)=>{setcomplete(data)})
    })
    return (
        <div className='nonflex-container'>
            <h1>Completed Orders</h1>
            <div className="comp-container">
                {
                    complete.map((item)=>{
                        return <OrderItem orderitem={item}/>
                    })
                }
            </div>
        </div>
    )
}

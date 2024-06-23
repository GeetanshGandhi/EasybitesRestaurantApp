import React, { useEffect, useState } from 'react'
import './OrderItem.css'
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
export default function OrderItem({ orderitem }) {
    const logindata = JSON.parse(localStorage.getItem("logindata"));
    const [delivman, setdelivman] = useState({
        email:'',name:'',contact:''
    })
    useEffect(()=>{
        if(orderitem.status==="Delivering"){
            setdelivman(JSON.parse(orderitem.deliveryMan));
        }
    },[])
    const updatestatForAdmin = () =>{
        let curr = orderitem.status;
        if(curr==="Order Placed"){
            orderitem.status = "Preparing"
            fetch(process.env.REACT_APP_BACKEND_URL+"api/v1/order/updateStat",{
                method: "POST", headers:{"content-type":"application/json"},
                body: JSON.stringify(orderitem)
            }).then(()=>{
                window.location.reload();
            })
        }
        else if(curr==="Preparing"){
            orderitem.status = "Out for Delivery"
            fetch(process.env.REACT_APP_BACKEND_URL+"api/v1/order/updateStat",{
                method: "POST", headers:{"content-type":"application/json"},
                body: JSON.stringify(orderitem)
            }).then(()=>{
                window.location.reload();
            })
        }
        else{
            toast.error("Could not update!");
        }
    }

    const acceptToDeliver = () =>{
        let curr = orderitem.status;
        if(curr!=="Out for Delivery"){
            toast.error("Could not Accept!");
            return;
        }
        else{
            const delivDetail = {
                "email":logindata.email,
                "name": logindata.name,
                "contact" : logindata.mobile
            }
            orderitem.status = "Delivering"
            orderitem.deliveryMan = JSON.stringify(delivDetail);
            fetch(process.env.REACT_APP_BACKEND_URL+"api/v1/order/updateStatAndDeliv",{
                method: "POST", headers:{"content-type":"application/json"},
                body: JSON.stringify(orderitem)
            }).then(()=>{
                window.location.reload();
            })
        }
    }

    return (
        <div>
        {
            logindata!==null?
            <div className='order-item'>
                <p className='orderId'>Order ID: {orderitem.orderId}</p>
                {
                    logindata.category!=="Delivery"?
                    <p className='ordercontent'>{orderitem.content}</p>
                    :<></>
                }
                <p className='orderprice'>&#8377;{orderitem.grandTotal}</p>
                <p id='status' className='status'>{orderitem.status}</p>
                <p className="del-address">Deliver to:<br/><b>{orderitem.deliveryAddress}</b></p>
                {
                    orderitem.status!=="Delivered" && logindata.category==="User"?
                        <p className='otp-msg'>Order OTP: <b><u>{orderitem.otp}</u></b></p>
                    :<></>
                }
                {
                    logindata.category==="Admin" && (orderitem.status==="Preparing" || orderitem.status==="Order Placed")?
                    <div className="wrapper">
                        <button onClick = {updatestatForAdmin} className='updateorder'>Update Status</button>
                    </div>
                    :<></>
                }
                <p className='paymeth'>Payment: <b>{orderitem.paymentMethod}</b></p>
                {
                    logindata.category==="Delivery" && orderitem.status==="Out for Delivery"?                    
                    <div className="wrapper">
                        <button className='accept-deliver-btn' onClick={acceptToDeliver}>Accept</button>
                    </div>
                    :<></>
                }
                {
                    logindata.category==="Delivery" && orderitem.status==="Delivering"?                    
                    <div className="wrapper">
                        <Link className='finish-link' to='/finishOrder' state={{
                                orderId:orderitem.orderId, content:orderitem.content,
                                pmethod:orderitem.paymentMethod, grandTotal:orderitem.grandTotal,
                                address:orderitem.deliveryAddress, otp:orderitem.otp
                        }}><p>Finish</p></Link>
                    </div>
                    :<></>
                }
                {
                    (logindata.category==="User" || logindata.category==="Admin") && orderitem.status==="Delivering"?
                    <div>
                        <p className='deliverby-msg'>Delivered by:</p>
                        <p className='del-name'>{delivman.name}</p>
                        <div className="wrapper">
                            <img id="call" src={require("../images/callIcon.png")} alt="alt"/>
                            <p className='del-contact'>{delivman.contact}</p>    
                        </div>
                    </div>
                    :<></>
                }
            </div>
             : <p>UnAuthorised Access!</p>
        }
        </div>
    )
}

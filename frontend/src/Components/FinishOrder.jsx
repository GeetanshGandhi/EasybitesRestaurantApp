import React, { useState } from 'react'
import './FinishOrder.css'
import { useLocation, useNavigate } from 'react-router-dom'
import { TextField } from '@mui/material';
import { toast } from 'react-toastify';
export default function FinishOrder() {
    const { state } = useLocation();
    const [otpin, setotpin] = useState('');
    const navigate = useNavigate();
    const completeOrder = () => {
        if(otpin!==state.otp){
            toast.error("Invalid OTP !");
            return;
        }
        fetch(process.env.REACT_APP_BACKEND_URL+"api/v1/order/complete",{
            method:"POST", headers:{"content-type":"application/json"},
            body: state.orderId
        }).then((res)=>res.text()).then((data)=>{
            toast.success("Order Completed!");
            navigate("/delPending");
        })
    }
    return (
        <div className='main-container'>
        <div className="paper">
            <h1>Order No. {state.orderId}</h1>
            <p className='gtotal'>Grand Total: <b>&#8377;<u>{state.grandTotal}</u></b></p>
            <p className='payment-msg'>Payment Method: <b><u>{state.pmethod}</u></b></p>
            <div className="wrapper">
                <p className="address">Delivered to: </p>
                <div className="add-wrap">
                    <p><b><u>{state.address}</u></b></p>        
                </div>
            </div>
            <p className="prompt-otp">Enter OTP to complete the order:</p>
            <div className="wrapper">
            <div className="otp-wrap">
                <TextField value={otpin} label="OTP" variant="outlined" fullWidth
				type="text" onChange={(e)=>setotpin(e.target.value)}/>
            </div>
            </div>
            <div className="wrapper">
                <button className='finish-btn' onClick={completeOrder}>Finish</button>    
            </div>      
        </div>    
        </div>
    )
}

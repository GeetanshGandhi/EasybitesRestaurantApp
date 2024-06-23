import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import './FoodByCategory.css'
import FoodItem from './FoodItem';
export default function FoodByCategory(props) {
    const { state } = useLocation();
    const [categoryitems, setitems] = useState([]);
    useEffect(()=>{
        fetch(process.env.REACT_APP_BACKEND_URL+"api/v1/menu/getByCategory",{
            headers:{"content-type":"application/json"}, method: "POST",
            body: state.category
        }).then((res)=>res.json()).then((data)=>{setitems(data)})
    },[])
    return (
        <div className='nonflex-container'>
            <h1>{state.category}</h1>
            <div className="catitem-container">
                {
                    categoryitems.map((catItem)=>{
                        return <FoodItem item={catItem} addToCart={props.addToCart}/>
                    })
                }
            </div>
        </div>
    )
}

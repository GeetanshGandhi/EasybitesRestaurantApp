import { RouterProvider, createBrowserRouter, useNavigate } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import { ToastContainer, Bounce, toast } from 'react-toastify';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Home from './Components/Home';
import Footer from './Components/Footer';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import Cart from './Components/Cart';
import Bill from './Components/Bill';
import Myorders from './Components/Myorders';
import AdmPendingOrder from './Components/AdmPendingOrder';
import DelPendingOrder from './Components/DelPendingOrder';
import FinishOrder from './Components/FinishOrder';
import CompleteOrders from './Components/CompleteOrders';
import FoodByCategory from './Components/FoodByCategory';

function App() {
	const [logindata, setlogin] = useState(null);
	useEffect(()=>{
		if(localStorage.getItem("logindata")!==null){
			setlogin(JSON.parse(localStorage.getItem("logindata")));
		}
	}, [])
	let initCart = [];
	if(localStorage.getItem("easybitesCart")===null){
		initCart = [];
	}
	else{
		initCart = JSON.parse(localStorage.getItem("easybitesCart"));
	}
	const [cart, setcart] = useState(initCart);
	useEffect(()=>{
		localStorage.setItem("easybitesCart", JSON.stringify(cart));
	})

	const addToCart = (item) =>{
		setcart([...cart,item]);
		localStorage.setItem("easybitesCart", JSON.stringify(cart));
		toast.success(item.name+" added Successfuly to cart!")
	}

	const removeFromCart = (item) =>{
		setcart(cart.filter((element)=>{
			return element!==item;
		}));
		localStorage.setItem("easybitesCart", JSON.stringify(cart));
	}

	const router = createBrowserRouter([
		{
			path:'/', element:<><Navbar/><Home addToCart={addToCart}/><Footer/></>
		},
		{
			path:'/signup', element:<><Navbar/><Signup/><Footer/></>
		},
		{
			path:'/login', element:<><Navbar/><Login/><Footer/></>
		},
		{
			path:'/cart', element:<><Navbar/><Cart cart={cart} removeFromCart={removeFromCart}/><Footer/></>
		},
		{
			path:'/bill', element:<><Navbar/><Bill cart={cart}/><Footer/></>
		},
		{
			path:'/myOrders', element:<><Navbar/><Myorders/><Footer/></>
		},
		{
			path:'/admPending', element:<><Navbar/><AdmPendingOrder/><Footer/></>
		},
		{
			path:'/delPending',element:<><Navbar/><DelPendingOrder/><Footer/></>
		},
		{
			path:'/finishOrder', element:<><Navbar/><FinishOrder/><Footer/></>
		},
		{
			path: '/completeOrders', element:<><Navbar/><CompleteOrders/><Footer/></>
		},
		{
			path: '/byCategory', element: <><Navbar/><FoodByCategory addToCart={addToCart}/><Footer/></>
		}
	]);
	return (
		<div className="App">
			<RouterProvider router={router}/>
			<ToastContainer position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss={false}
                        draggable
                        pauseOnHover
                        theme="light"
                        transition= {Bounce}/>
		</div>
	);
}

export default App;
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Checkout from './pages/Checkout'
import Item from './pages/Item'
import Cart from './components/Cart';
import { Routes, Router, Route } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { cartActions} from './store/index'
import StatusUI from './components/StatusUI';
function App() {
  const dispatch = useDispatch()
  const cart = useSelector((state) =>{
    return state.cart
  })
  useEffect(() =>{
    const fetchCartData = async () =>{
      const response = await axios.get('https://busy-bean-791c1-default-rtdb.firebaseio.com/cart.json')
      if(response.data){
        dispatch(cartActions.setCartData([...response.data.cart]))
      }
      
    }
    fetchCartData()
  },[])

  useEffect(() =>{
    
    const sendCartData = async () =>{
      if(cart.cartDataChanged){
          const response = await axios.put('https://busy-bean-791c1-default-rtdb.firebaseio.com/cart.json',
        {
          cart: cart.cart,
        })
      }
      
    }

    sendCartData()
  },[cart.cart])


  return (
    <div className="App">
      <Cart />
      <StatusUI />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/product' element={<Item />}/>
        <Route path='/checkout' element={<Checkout />}/>
      </Routes>
    </div>
  );
}

export default App;

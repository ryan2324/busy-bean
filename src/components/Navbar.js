import styles from '../styles/navBar.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../store';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
const Navbar = () =>{
    const cart = useSelector((state) =>{
        return state.cart
    })
    const dispatch = useDispatch()
    const toggleModalHandler = () =>{
        dispatch(cartActions.toggleModal())
    }
    
    return (
        <nav className={styles.nav}>
            <ul>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><a href='#footer'>Contact Us</a></li>
                <li className={`${styles.cartIcon}`} onClick={toggleModalHandler}><i className={` fa-solid fa-cart-shopping`} ><span >{cart.cart.length}</span></i></li>
            </ul>
        </nav>
    )
}

export default Navbar;
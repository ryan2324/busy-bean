import styles from '../styles/cart.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../store';
import CartItem from './CartItem';
import { useNavigate } from 'react-router-dom';
const Cart = () =>{
    const navigate = useNavigate();
    const cart = useSelector((state) =>{
        return state.cart
    })
    const dispatch = useDispatch();
    const closeModalHandler = (e) =>{
        if(e.target.id === 'backdrop'){
            dispatch(cartActions.toggleModal())
        }

    }
    const cartItems = cart.cart;
    let total = 0;
    for (const element of cartItems) {
        total = total + (element.price * element.qty)
    }
    const checkoutHandler = () =>{
        dispatch(cartActions.toggleModal())
        navigate('/checkout')
    }
    return(
        <div id='backdrop' onClick={closeModalHandler} className={`${styles.backdrop} ${cart.cartIsOpen ? styles.modalIsOpen: ''}`}>  
            <div className={styles.parentContainer}>
                <p className={styles.cartHeading}>my Cart</p>
                    <div className={styles.itemsInfoTitle}>
                        <p>price</p>
                        <p>qty</p>
                        <p>total</p>
                    </div>
                    <div className={styles.itemsContainer}>
                        {cartItems.length !== 0 ?
                        
                        cartItems.map((item) =>{
                            return <CartItem id={item.id} key={item.id} img={`${process.env.PUBLIC_URL}/assets/products/product1.png`} title={item.title} variation={item.variation} price={item.price} qty={item.qty} total={item.price * item.qty} />
                        }) : <h3 className={styles.noItems}>You have no products in your cart yet.</h3>}
                    </div>
                    <div className={styles.subtotalContainer}>
                        <p>subtotal</p>
                        <p>${ parseFloat(total).toFixed(2)} </p>
                    </div>
                    <button disabled={cartItems.length === 0 ? true : false} onClick={checkoutHandler} className={styles.checkoutBtn}>Checkout</button>
            </div>
        </div>  
    )
}

export default Cart;
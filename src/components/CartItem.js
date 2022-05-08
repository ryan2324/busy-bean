import styles from '../styles/cartItem.module.css'
import { useDispatch } from 'react-redux';
import { cartActions } from '../store';
const CartItem = (props) =>{
    const dispatch = useDispatch();
    const removeBtnHandler = () =>{
        dispatch(cartActions.removeFromCart({id: props.id}))
        dispatch(cartActions.toggleCartDataChanged())
    }
    return (
        <div className={`${styles.parentContainer} ${props.className}`}>
            <div className={styles.itemImgContainer}>
                <img src={props.img} alt='item-img'></img>
            </div>
            <div className={styles.titleVariationContainer}>
                <p className={styles.title}>{props.title}</p>
                <p>varation: {props.variation}</p>
            </div>
            <div className={styles.itemInfoContainer }>
                <p>{props.price}</p>
                <p>{props.qty}</p>
                <p>{props.total}</p>
            </div>
            <button onClick={removeBtnHandler} className={`${styles.removeBtn}`}>✕</button>
        </div>
    )
}
export default CartItem;
import styles from '../styles/product.module.css'
import { useNavigate } from 'react-router-dom'
const Product = (props) =>{
    const navigate = useNavigate()
    const gotoProductHandler = () =>{
        navigate(`/product?productId=${props.id}`)
    }
    return (
            <div className={styles.productContainer}>
                <div onClick={gotoProductHandler} className={styles.backdrop}></div>
                <div className={styles.productImgContainer}>
                    <img src={props.img} alt='product'></img>
                </div>
                <div className={styles.textContainer}>
                    <p className={styles.title}>{props.title}</p>
                    <p className={styles.price}>${props.price}</p>
                </div>
            </div>
    )
}

export default Product;
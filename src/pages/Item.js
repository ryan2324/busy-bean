import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { cartActions, statusUIActions } from "../store";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LoadingSpinner from "../components/LoadingSpinner";
import styles from '../styles/itemPage.module.css'
const Item = () =>{
    const [products, setProducts] = useState([]);
    const [variation, setVariation] = useState('')
    const location = useLocation()
    const query = new URLSearchParams(location.search)
    const productId = query.get('productId')
    const dispatch = useDispatch();
    
    useEffect(()=>{

        const fetchProducts = async () =>{
            const products = await axios.get('https://busy-bean-791c1-default-rtdb.firebaseio.com/.json')
            setProducts([...products.data.products])
        }
        fetchProducts()
    },[])
   

    const product = products.find((item) => {
        return parseInt(item.id) === parseInt(productId)
    })
    const addToCartHandler = () =>{
        if(variation.trim() === ''){
            dispatch(statusUIActions.toggleStatusModal(true))
            dispatch(statusUIActions.setStatusData({message: 'Please select variation', type: 'invalid input'}))
            return


        }
        dispatch(cartActions.addToCart({
            ...product,
            qty: 1,
            variation: variation,
        }))
        dispatch(statusUIActions.toggleStatusModal(true))
        dispatch(statusUIActions.setStatusData({message: 'Added to cart', type: 'cart'}))
        dispatch(cartActions.toggleCartDataChanged())
    }
    const variationHandler = (e) =>{
        setVariation(e.target.value)
    }
    return (
        <>
        
            <Navbar />
            {product ? 
            <div className={styles.layout}>
            <div className={styles.parentContainer}>
                <div className={styles.productImgContainer}>
                    <img src={`${process.env.PUBLIC_URL}/assets/products/product1.png`} alt='productImg'></img>
                </div>
                <div className={styles.productInfo}>
                    <div className={styles.titlePriceContainer}>
                        <p className={styles.title}>{product.title}</p>
                        <p className={styles.price}>{product.price}</p>
                    </div>
                    <div className={styles.variationsBtn}>
                        <label htmlFor='small'>
                            <input onClick={variationHandler} value='small' id="small" type='radio' name="variations"></input>
                            <span>small</span>
                        </label>
                        <label htmlFor='big'>
                            <input onClick={variationHandler} id="big" value='big' type='radio' name="variations"></input>
                            <span>big</span>
                        </label>
                    </div>
                    <p className={styles.selectVariationTxt}>Select Variation</p>
                    <div className={styles.buttons}>
                        <button onClick={addToCartHandler} className={styles.addToCartBtn}>Add To Cart</button>
                        <div className={styles.share}>
                            <p>Share</p>
                            <a href="https://www.facebook.com" target='_blank' rel="noreferrer"><i className="fa-brands fa-facebook"></i></a>
                            <a href="https://www.facebook.com" target='_blank' rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
                            <a href="https://www.facebook.com" target='_blank' rel="noreferrer"><i className="fa-brands fa-youtube"></i></a>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className={styles.productDescriptionContainer}>
                <p>Coffee is produced from the seeds of a small red (sometimes yellow) fruit that grows on plants halfway in size between shrub and tree. The process that turns these seeds into beverage is a long and complex process, perhaps the most complex process associated with any major beverage.
                It is also a very labor intensive process involving a vast intercontinental collaboration that starts with the coffee grower, moves from there to the picker, then to the mill workers who meticulously remove the fruit and dry the beans, then to those who clean and grade the beans, to those who roast them, to those consumers and baristas who finally grind the beans and prepare the beverage. Every act along the way can be performed either with passion and precision or with careless shoddiness. It is the cumulative quality of all of these creative contributions that together make the difference between a lackluster cup and a fine and distinctive one.</p>
            </div>
            </div>
            : <LoadingSpinner />  }
            
            <Footer />
        </>
    )
}
export default Item;
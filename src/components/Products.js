import styles from '../styles/products.module.css';
import Product from './Product';
import { useEffect, useState } from 'react';
import axios from 'axios';
import LoadingSpinner from './LoadingSpinner';
const Products = () =>{
    const [products, setProducts] = useState([])
    useEffect(()=>{

        const fetchProducts = async () =>{
            const products = await axios.get('https://busy-bean-791c1-default-rtdb.firebaseio.com/.json')
            setProducts([...products.data.products])
        }
        fetchProducts()
    },[])
    return (
    <>
        <p className={styles.productsIntro}><span>We assure to deliver the best quality coffee so that it goes to your cup with the best taste you’ll love❤️</span></p>
        <div className={styles.productsContainer}>
        
            {products.length !== 0 ?
            products.map((product) =>{
                return(
                    <Product key={product.id} id={product.id} title={product.title} price={product.price} img={`${process.env.PUBLIC_URL}/assets/products/product1.png`} />
                )
            }) : <LoadingSpinner className={styles.loadingSpinnerContainer}/>}
        </div>
    </>
        
    )
}

export default Products;
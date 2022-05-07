import Navbar from "../components/Navbar";
import styles from '../styles/home.module.css';
import ImageSlider from "../components/ImageSlider";
import Products from "../components/Products";
import Footer from "../components/Footer";
const Home = () =>{
    return (
        <>
        <header className={styles.header}>
            <Navbar />
            <div className={styles.hero}>
                <p className={styles.heroTxt}><span>☕Coffee is more than a beverage, however. It is a memory, an anticipation, a lifetime of consoling moments of modest pleasure woven into our lives.</span></p>
                <div className={styles.heroImageContainer}>
                    <img className={styles.heroImage} src={`${process.env.PUBLIC_URL}/assets/hero-image.jpg`} alt="hero-img"></img>
                </div>
            </div>
        </header>
        <main className={styles.main}>
            <ImageSlider />
            <Products />
        </main>
        
        <Footer />
        </>
    )
}

export default Home;
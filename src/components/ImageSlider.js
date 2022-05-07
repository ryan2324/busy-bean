import styles from '../styles/imageSlider.module.css'
import { useRef, useEffect, useState } from 'react'
const ImageSlider = () =>{
    const [width, setWidth] = useState()

    const sliderRef = useRef();
    const nextBtnRef = useRef();
    const prevBtnRef = useRef();
    let counter = 1;

    const nextBtnHandler = () =>{
        
        if(counter < 5){
            counter++;
        }
        sliderRef.current.style.transition = 'all 400ms linear'
        nextBtnRef.current.disabled = true;
        sliderRef.current.style.transform = `translateX(${-width * counter}px)`
        
    }

    const prevBtnHandler = () =>{
        if(counter <= 0){
            return
        }
        counter--;
        prevBtnRef.current.disabled = true;
        sliderRef.current.style.transition = 'all 400ms linear'
        sliderRef.current.style.transform = `translateX(${-width * counter}px)`
    }
    const resetPositionHandler = () =>{
        
        const children = sliderRef.current.children;
        nextBtnRef.current.disabled = false;
        prevBtnRef.current.disabled = false;
        switch(children[counter].alt){
            case 'imgFirst':
                counter = 1;
                sliderRef.current.style.transition = 'all 0ms linear'
                sliderRef.current.style.transform = `translateX(${-width* counter}px)`
                break;
            case 'imgLast':
                counter = 4;
                sliderRef.current.style.transition = 'all 0ms linear'
                sliderRef.current.style.transform = `translateX(${-width * counter}px)`
                break;
            default:
                break;
        }
    }

    useEffect(() =>{
        setWidth(sliderRef.current.clientWidth)
    },[])
    
    return (
        <div className={styles.container}>
            <div  onTransitionEnd={resetPositionHandler} ref={sliderRef} className={styles.slider}>
                <img  src={`${process.env.PUBLIC_URL}/assets/image-slider/imgSlider4.jpg`} alt="imgLast"></img>
                <img  src={`${process.env.PUBLIC_URL}/assets/image-slider/imgSlider1.jpg`} alt="img1"></img>
                <img src={`${process.env.PUBLIC_URL}/assets/image-slider/imgSlider2.jpg`} alt="img2"></img>
                <img src={`${process.env.PUBLIC_URL}/assets/image-slider/imgSlider3.jpg`} alt="img3"></img>
                <img src={`${process.env.PUBLIC_URL}/assets/image-slider/imgSlider4.jpg`} alt="img4"></img>
                <img src={`${process.env.PUBLIC_URL}/assets/image-slider/imgSlider1.jpg`} alt="imgFirst"></img>
            </div>
            <button ref={prevBtnRef} onClick={prevBtnHandler} className={styles.btnPrev}><i className="fa-solid fa-angle-left"></i></button>
            <button ref={nextBtnRef} onClick={nextBtnHandler} className={styles.btnNext}><i className="fa-solid fa-angle-right"></i></button>
        </div>
    )
}

export default ImageSlider;
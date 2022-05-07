import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from '../styles/checkout.module.css'
import CartItem from "../components/CartItem";
import { useSelector, useDispatch } from "react-redux";
import { cartActions, statusUIActions } from "../store";
import { useState, useEffect } from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import { useNavigate } from "react-router-dom";
const Checkout = () =>{
    const navigate = useNavigate()
    const [showSpinner, setShowSpinner] = useState(false);
    const [fnameInputVal, setFnameInputVal] = useState('');
    const [lNameInputVal, setLnameInputVal] = useState('');
    const [addressInputVal, setAddressInputVal] = useState('');
    const [cityInputVal, setCityInputVal] = useState('');
    const [countryInputVal, setCountryInputVal] = useState('');
    const [provinceInputVal, setProvinceInputVal] = useState('');
    const [zipcodeInputVal, setZipcodeInputVal] = useState('');
    
    const [fnameInputIsValid, setFnameInputIsValid] = useState();
    const [lNameInputIsValid, setLnameInputIsValid] = useState();
    const [addressInputIsValid, setAddressInputIsValid] = useState();
    const [cityInputIsValid, setCityInputIsValid] = useState();
    const [countryInputIsValid, setCountryInputIsValid] = useState();
    const [provinceInputIsValid, setProvinceInputIsValid] = useState();
    const [zipcodeInputIsValid, setZipcodeInputIsValid] = useState();
    
    const [fNameInputIsTouched, setFNameInputIsTouched] = useState(false)
    const [lNameInputIsTouched, setLNameInputIsTouched] = useState(false)
    const [addressInputIsTouched, setAddressInputIsTouched] = useState(false)
    const [cityInputIsTouched, setCityInputIsTouched] = useState(false)
    const [countryInputIsTouched, setCountryInputIsTouched] = useState(false)
    const [provinceInputIsTouched, setProvinceInputIsTouched] = useState(false)
    const [zipcodeInputIsTouched, setZipcodeInputIsTouched] = useState(false);
    useEffect(() =>{
        if(fnameInputVal.trim() !== ''){
            setFnameInputIsValid(true)
        }else (
            setFnameInputIsValid(false)
        )
        if(lNameInputVal !== ''){
            setLnameInputIsValid(true)
        }else(
            setLnameInputIsValid(false)
        )
        if(addressInputVal !== ''){
            setAddressInputIsValid(true)
        }else(
            setAddressInputIsValid(false)
        )
        if(cityInputVal !== ''){
            setCityInputIsValid(true)
        }else(
            setCityInputIsValid(false)
        )
        if(countryInputVal !== ''){
            setCountryInputIsValid(true)
        }else(
            setCountryInputIsValid(false)
        )
        if(provinceInputVal !== ''){
            setProvinceInputIsValid(true)
        }else(
            setProvinceInputIsValid(false)
        )
        if(zipcodeInputVal !== ''){
            setZipcodeInputIsValid(true)
        }else(
            setZipcodeInputIsValid(false)
        )
        

    },[fnameInputVal,
        lNameInputVal,
        addressInputVal,
        cityInputVal,
        countryInputVal,
        provinceInputVal,
        zipcodeInputVal])
        

    const dispatch = useDispatch();
    const cart = useSelector((state) =>{
        return state.cart
    })

    const cartItems = cart.cart;
    let total = 0;
    for (const element of cartItems) {
        total = total + (element.price * element.qty)
    }
    const proceedBtnHandler = (e) =>{
        e.preventDefault();
        if(fnameInputVal.trim() === ""
           || lNameInputVal.trim() === ""
           || addressInputVal.trim() === ""
           || cityInputVal.trim() === ""
           || countryInputVal.trim() === ""
           || provinceInputVal.trim() === ""
           || zipcodeInputVal.trim() === "" 
        ){
            dispatch(statusUIActions.setStatusData({message: 'Required Fields cannot be empty.', type: 'invalid input'}))
            dispatch(statusUIActions.toggleStatusModal(true))
                setFNameInputIsTouched(true)
                setLNameInputIsTouched(true)
                setAddressInputIsTouched(true)
                setCityInputIsTouched(true)
                setCountryInputIsTouched(true)
                setProvinceInputIsTouched(true)
                setZipcodeInputIsTouched(true)
            return
        }
        dispatch(statusUIActions.setStatusData({message: 'Your order is being processed', type: 'checkout'}))
        dispatch(statusUIActions.toggleStatusModal(true))
        setShowSpinner(true);
        setTimeout(() =>{
            dispatch(cartActions.setCartData([]))
            navigate('/')
        },2000)

    }
    const inputFNameChangedHandler = (e) =>{
        setFnameInputVal(e.target.value)
    }
    const inputFNameTouchedHandler = () =>{
        setFNameInputIsTouched(true)
    }
    const inputLNameChangedHandler = (e) =>{
        setLnameInputVal(e.target.value)
    }
    const inputLNameTouchedHandler = () =>{
        setLNameInputIsTouched(true)
    }
    const inputAddressChangedHandler = (e) =>{
        setAddressInputVal(e.target.value)
    }
    const inputAddressTouchedHandler = () =>{
        setAddressInputIsTouched(true)
    }
    const inputCityChangedHandler = (e) =>{
        setCityInputVal(e.target.value)
    }
    const inputCityTouchedHandler = () =>{
        setCityInputIsTouched(true)
        console.log(cityInputIsTouched, cityInputIsValid)
    }
    const inputCountryChangedHandler = (e) =>{
        setCountryInputVal(e.target.value)
    }
    const inputCountryTouchedHandler = () =>{
        setCountryInputIsTouched(true)
    }
    const inputProvinceChangedHandler = (e) =>{
        setProvinceInputVal(e.target.value)
    }
    const inputProvinceTouchedHandler = () =>{
        setProvinceInputIsTouched(true)
    }
    const inputZipcodeChangedHandler = (e) =>{
        setZipcodeInputVal(e.target.value)
    }
    const inputZipcodeTouchedHandler = () =>{
        setZipcodeInputIsTouched(true)
    }
    return(
        <>
        <Navbar />
        <div className={styles.parentContainer}>
         
            {showSpinner? <LoadingSpinner className={styles.spinner}/> : ''}
            <form className={styles.formContainer}>
                <p>Shipping Information</p>
                <label>First Name</label>
                <input onBlur={inputFNameTouchedHandler} onChange={inputFNameChangedHandler} className={`${!fnameInputIsValid && fNameInputIsTouched ? styles.invalidForm: ''}`} placeholder="FirstName" type='text'></input>
                <label>Last Name</label>
                <input onBlur={inputLNameTouchedHandler} onChange={inputLNameChangedHandler} className={`${!lNameInputIsValid && lNameInputIsTouched ? styles.invalidForm: ''}`} placeholder="LastName" type='text'></input>
                <label>Address</label>
                <input onBlur={inputAddressTouchedHandler} onChange={inputAddressChangedHandler} className={`${!addressInputIsValid && addressInputIsTouched ? styles.invalidForm: ''}`} placeholder="Address" type='text'></input>
                <label>City</label>
                <input onBlur={inputCityTouchedHandler} onChange={inputCityChangedHandler} className={`${!cityInputIsValid && cityInputIsTouched ? styles.invalidForm: ''}`} placeholder="City" type='text'></input>
                <label>Landmark</label>
                <input  placeholder="Landmark" type='text'></input>
                <label>Country</label>
                <input onBlur={inputCountryTouchedHandler} onChange={inputCountryChangedHandler} className={`${!countryInputIsValid && countryInputIsTouched ? styles.invalidForm: ''}`} placeholder="Country" type='text'></input>
                <label>Province</label>
                <input onBlur={inputProvinceTouchedHandler} onChange={inputProvinceChangedHandler} className={`${!provinceInputIsValid && provinceInputIsTouched ? styles.invalidForm: ''}`} placeholder="Province" type='text'></input>
                <label>Zipcode</label>
                <input onBlur={inputZipcodeTouchedHandler} onChange={inputZipcodeChangedHandler} className={`${!zipcodeInputIsValid && zipcodeInputIsTouched ? styles.invalidForm: ''}`} placeholder="Zipcode" type='text'></input>
                <button onClick={proceedBtnHandler}>Proceed</button>
            </form>
            <div className={styles.cartItemsContainer}>
                <div className={styles.infosTitle}>
                    <p>price</p>
                    <p>qty</p>
                    <p>total</p>
                </div>
                <div className={styles.items}>
                    {cartItems.map((item) =>{
                                return <CartItem key={item.id} img={`${process.env.PUBLIC_URL}/assets/products/product1.png`} title={item.title} variation={item.variation} price={item.price} qty={item.qty} total={item.price * item.qty} className={styles.cartItem}/>
                            })}
                </div>
                <div className={styles.totalContainer}>
                    <p>Total</p>
                    <p>${parseFloat(total).toFixed(2)}</p>
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default Checkout;
import { useSelector, useDispatch } from "react-redux"
import styles from '../styles/statusUI.module.css';
import { useEffect } from "react";
import { statusUIActions } from "../store";
const StatusUI = () =>{
    const statusUI = useSelector((state) =>{
        return state.status
    })
    const dispatch = useDispatch()
    useEffect(() =>{

        const closeStatusUI = setTimeout(()=>{
            if(statusUI.statusData.type !== ''){
                dispatch(statusUIActions.toggleStatusModal(false))
            }
        },2000)

        return () =>{
            clearTimeout(closeStatusUI)
        }
    },[statusUI.statusData])
    const cartIcon = <i className="fa-solid fa-cart-arrow-down"></i>;
    let icon =  <i className="fa-solid fa-circle-check"></i>;
    if(statusUI.statusData.type === 'cart'){
        icon = cartIcon;
    }else if(statusUI.statusData.type === 'invalid input'){
        icon = <i className="fa-solid fa-xmark"></i>
    }
    return (
        <div className={`${styles.parentContainer} ${statusUI.statusUiIsOpen ? styles.modalIsOpen: '' }`}>
            {icon}
            <p className={styles.message}>{statusUI.statusData.message}</p>
        </div>
    )
}
export default StatusUI;
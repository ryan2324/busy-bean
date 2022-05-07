import styles from '../styles/loadingSpinner.module.css'
const LoadingSpinner = (props) =>{
    return(
        // 
        <div  className={`${styles.loadingSpinnerContainer} ${props.className}`}>
            <i className="fa-solid fa-spinner"></i>
        </div>
    )
}
export default LoadingSpinner
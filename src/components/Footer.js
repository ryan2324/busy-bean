import styles from '../styles/footer.module.css'
import { NavLink } from 'react-router-dom'
const Footer = () =>{
    const sendEmailHandler = (e) =>{
        e.preventDefault()
    }
    return (
        <>
            <div id='footer' className={styles.footer}>
                <ul>
                    <li><NavLink to='/'> Home </NavLink></li>
                    <li><NavLink to='/'> About Us </NavLink></li>
                    <li><NavLink to='/'> Customer Support</NavLink></li>
                    <ul>
                        <li><a href='https://www.facebook.com' target='_blank'> <i className="fa-brands fa-facebook"></i> </a></li>
                        <li><a href='https://www.instagram.com' target='_blank'> <i className="fa-brands fa-instagram"></i> </a></li>
                        <li><a href='https://www.youtube.com' target='_blank'> <i className="fa-brands fa-youtube"></i> </a></li>
                    </ul>
                </ul>
                <form>
                    <p>Get notified with future updates!</p>
                    <div>
                        <input type='email' placeholder='Email'></input>
                        <button onClick={sendEmailHandler}>Send</button>
                    </div>
                </form>
            </div>
            <span className={styles.bottomBar}>
                <p>Developed and Design by Ryan Clariño</p>
            </span>
        </>
    )
}
export default Footer;
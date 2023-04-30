import Input from '../../components/common/Input'
import { useNavigate } from 'react-router-dom'
import logo from '../../images/logo-1.png'
import React, { useState } from 'react'
import styles from "./style.module.css"
const REACT_APP_IP = process.env.REACT_APP_IP

function Login() {
    const [userLogin, setUserLogin] = useState("")
    const navigate = useNavigate()

    const login = async (e) => {
        e.preventDefault();
        // על מנת להוסיף עובד חדש צריך לעבור לניתוב הזאת
        // fetch('http://' + REACT_APP_IP + '/worker/register', {
        fetch('http://' + REACT_APP_IP + '/worker/login', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(userLogin)
        })
            .then((response) => response.json())
            .then((result) => { gotResult(result) })
            .catch((error) => { console.error('Error:', error); });
    }

    function gotResult(result) {
        if (result[0] !== null && result[1] !== null) {
            localStorage.setItem('worker', JSON.stringify(result[0]))
            localStorage.setItem('token', JSON.stringify(result[1]))
            navigate('/table')
        }
    }

    return <form onSubmit={login}>
        <div className={styles.login}>
            <img src={logo} alt={"logo"} className={styles.logo} />
            <Input placeholder={"שם משתמש"} required={true} name={"userName"} onChange={(e) => setUserLogin({ ...userLogin, [e.target.name]: e.target.value })} />
            <Input placeholder={"מזהה"} required={true} name={"identifaier"} onChange={(e) => setUserLogin({ ...userLogin, [e.target.name]: e.target.value })} />
            <Input placeholder={"סיסמה"} required={true} name={"password"} type={"password"} onChange={(e) => setUserLogin({ ...userLogin, [e.target.name]: e.target.value })} />
            <button className={styles.btnEnter}>כניסה</button>
        </div>
    </form>
}

export default Login
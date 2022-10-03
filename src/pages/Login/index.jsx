import React, { useContext, useState } from 'react'
import Input from '../../components/common/Input'
import styles from "./style.module.css"
import logo from '../../images/logo-1.png'
import { useNavigate } from 'react-router-dom'
import UserContext from '../../context/UserContext'

function Login() {

    const [userLogin, setUserLogin] = useState("")
    const { user, setUser } = useContext(UserContext);

    const navigate = useNavigate()

    const login = async (e) => {
        e.preventDefault();
        setUser(userLogin)
        console.log(userLogin);
        //קריאה לשרת לבדיקת משתמש
        navigate('/michal')

    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setUserLogin(values => ({ ...values, [name]: value }));
    }

    return (
        <form onSubmit={login}>
            <div className={styles.login}>
                <img src={logo} alt={"logo"} className={styles.logo} />
                <Input placeholder={"שם משתמש"} required={true} name={"userName"} onChange={handleChange} />
                <Input placeholder={"תעודת זהות"} required={true} name={"password"} type={"password"} onChange={handleChange} />
                <button className={styles.btnEnter}>כניסה</button>

            </div>
        </form>
    )
}

export default Login
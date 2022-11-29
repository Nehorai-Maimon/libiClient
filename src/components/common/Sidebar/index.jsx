import React, { useContext } from "react";
import styles from "./style.module.css"
import logo from '../../../images/logo-1.png'
import userImg from '../../../images/user.jpg'
import UserContext from "../../../context/UserContext";
import { useNavigate } from "react-router-dom";


const Sidebar = () => {
    const navigate = useNavigate();


    return (
        <div className={styles.headerContainer}>
            <div className={styles.headerInnerWidth}>
                <div className={styles.buttons}>
                    <button onClick={() => navigate('/table')}>חניכים</button>
                    <button onClick={() => navigate('/projects')}>אירועים</button>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;

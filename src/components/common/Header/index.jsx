import React, { useContext } from "react";
import styles from "./style.module.css"
import logo from '../../../images/logo-1.png'
import userImg from '../../../images/user.jpg'


const Header = () => {
    const user = "שלומית, מנהלת ראשית"
    return (
        <div className={styles.headerContainer}>
            <div className={styles.headerInnerWidth}>
                <div className={styles.workshopHeader}>
                    <img
                        //   onClick={() => loguot}
                        src={userImg}
                        alt="user"
                        className={styles.headerUser}
                    />
                    <div
                        className={styles.titleHeader}>{user}</div>
                </div>
                <img
                    src={logo}
                    alt="logo"
                    className={styles.logo}
                />
            </div>
        </div>
    );
};

export default Header;

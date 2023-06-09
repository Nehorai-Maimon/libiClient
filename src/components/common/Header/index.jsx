import React, { useContext } from "react";
import styles from "./style.module.css"
import logo from '../../../images/logo-1.png'
import userImg from '../../../images/user.jpg'
import UserContext from "../../../context/UserContext";

const Header = () => {
    const { user, setUser } = useContext(UserContext);
    return <div className={styles.headerContainer}>
        <div className={styles.headerInnerWidth}>
            <div className={styles.workshopHeader}>
                {user &&
                    <>
                        <img
                            onClick={() => {
                                setUser("");
                                localStorage.clear()
                            }}
                            src={userImg}
                            alt="user"
                            className={styles.headerUser}
                        />
                        <div
                            className={styles.titleHeader}>{user.userName}</div>
                    </>}
            </div>

            <img
                src={logo}
                alt="logo"
                className={styles.logo}
            />
        </div>
    </div>
};

export default Header;

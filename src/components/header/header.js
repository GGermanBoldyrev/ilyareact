import React from 'react';
import {Link} from "react-router-dom";
import styles from './header.module.scss'
import logo from '../../images/asd.png'

const Header = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navLeft}>
                <img src={logo} alt=""/>
            </div>
            <div className={styles.navRight}>
                <ul className={styles.list}>
                    <li>Home</li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;
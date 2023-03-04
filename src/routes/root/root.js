import React from 'react';
import { Outlet } from "react-router-dom";
import Header from "../../components/header/header";
import styles from  './root.module.scss'

const Root = () => {
    return (
        <div className="container">
            <Header />
            <div id="detail">
                <Outlet />
            </div>
        </div>
    );
};

export default Root;
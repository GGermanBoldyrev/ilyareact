import React, {useState} from 'react';
import s from './burgerMenu.module.scss';
import {Link} from "react-router-dom";

const BurgerMenu = () => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(!open)
    }
    const handleClose = () => {
        setOpen(false)
    }
    return (
        <div>
            <div style={{display: "flex"}}>
                <div style={{width: 93}}></div>
                <div className={s.menu} onClick={() => handleOpen()}>
                    <div className={s.line}></div>
                    <div className={s.line}></div>
                    <div className={s.line}></div>
                </div>
            </div>
            {
                open &&
                <div className={s.dropdown}>
                    <Link to={`/`}
                          onClick={() => handleClose()}>
                        Главная
                    </Link>
                    <Link to={`/about`}
                          onClick={() => handleClose()}>
                        Обо мне
                    </Link>
                    <Link to={`/works`}
                          onClick={() => handleClose()}>
                        Мои работы
                    </Link>
                    <Link to={`/contacts`}
                          onClick={() => handleClose()}>
                        Контакты
                    </Link>
                </div>
            }
        </div>
    );
};

export default BurgerMenu;
import React from 'react';
import {Link} from "react-router-dom";
import s from './header.module.scss'

const Header = () => {

    const [active, setActive] = React.useState(0);

    const onClick = (id) => {
        setActive(id);
    }

    return (
        <nav className={s.header}>
            <ul className={s.list}>
                <div className={s.links}>
                    <li className={active === 0 ? s.active : ''}
                        onClick={() => onClick(0)}
                    >
                        <Link to={`/`}>
                            Главная
                        </Link>
                    </li>
                    <li className={active === 1 ? s.active : ''}
                        onClick={() => onClick(1)}
                    >
                        <Link to={`/about`}>
                            Обо мне
                        </Link>
                    </li>
                </div>
                <Link to={`/`}>
                    <img src="/images/logo.svg" alt="Logo" className={s.not}/>
                </Link>
                <div className={s.links}>
                    <li className={active === 2 ? s.active : ''}
                        onClick={() => onClick(2)}
                    >
                        <Link to={`/works`}>
                            Мои работы
                        </Link>
                    </li>
                    <li className={active === 3 ? s.active : ''}
                        onClick={() => onClick(3)}
                    >
                        <Link to={`/contacts`}>
                            Контакты
                        </Link>
                    </li>
                </div>
            </ul>
        </nav>
    );
};

export default Header;
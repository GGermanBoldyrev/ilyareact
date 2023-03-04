import React from 'react';
import {Link} from "react-router-dom";
import s from './home.module.scss';

const Home = () => {
    return (
        <div className={s.page}>
            <div className={s.pageLeft}>
                <div className={s.text}>
                    <div className={s.textTitle}>
                        Илья Тарасов
                    </div>
                    <div className={s.textSubtitle}>
                        Графический дизайнер
                    </div>
                    <div className={s.textContent}>
                        "Мне всегда было интереснее привлекать внимание к моим работам, чем к себе"
                        <br />
                        Автор - Рут Энсел
                    </div>
                    <Link to={`contacts`}>
                        <button className={s.button}>
                            Связаться со мной
                        </button>
                    </Link>
                </div>
            </div>
            <div className={s.pageRight}>
                <img src="/images/ilya.png" alt="Ilya Tarasov Photo"/>
            </div>
        </div>
);
};

export default Home;
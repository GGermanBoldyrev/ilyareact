import React from 'react';
import s from './home.module.scss';
import useWindowDimensions from "../../hooks/windowSize";

const Home = () => {
    const {width} = useWindowDimensions();

    if (width >= 600) {
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
                            "Дизайн это не только про красоту, но и про отражение интересов потребителя"
                        </div>
                    </div>
                    <div>
                        <div className={s.conTitle}>
                            Контакты
                        </div>
                        <div className={s.icons}>
                            <a href="https://www.behance.net/tarasovilya" target="_blank"><img src="/images/bh-img.png"
                                                                                               alt="Bh icon"
                                                                                               className={s.icon}/></a>
                            <a href="https://vk.com/tarasovilya" target="_blank"><img src="/images/vk-img.png"
                                                                                      alt="Vk icon"
                                                                                      className={s.icon}/></a>
                            <a href="https://t.me/vlardingen" target="_blank"><img src="/images/tg-img.png"
                                                                                   alt="Tg icon"
                                                                                   className={s.icon}/></a>
                        </div>
                    </div>
                </div>
                <div className={s.pageRight}>
                    <img src="/images/ilya.png" alt="Ilya Tarasov Photo"/>
                </div>
            </div>)
    } else {
        return (
            <div>
                <div className={s.phonePage}>
                    <div className={s.phonePageBlock}>
                        <div className={s.phoneTitle}>
                            <div className={s.textTitle}>
                                Илья Тарасов
                            </div>
                            <div className={s.textSubtitle}>
                                Графический дизайнер
                            </div>
                        </div>
                        <div className={s.phoneImg}>
                            <img src="/images/ilya.png" alt="Ilya Tarasov Photo"/>
                        </div>
                        <div className={s.icons}>
                            <a href="https://www.behance.net/tarasovilya" target="_blank"><img src="/images/bh-img.png"
                                                                                               alt="Bh icon"
                                                                                               className={s.icon}/></a>
                            <a href="https://vk.com/tarasovilya" target="_blank"><img src="/images/vk-img.png"
                                                                                      alt="Vk icon"
                                                                                      className={s.icon}/></a>
                            <a href="https://t.me/vlardingen" target="_blank"><img src="/images/tg-img.png"
                                                                                   alt="Tg icon"
                                                                                   className={s.icon}/></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    ;
};

export default Home;
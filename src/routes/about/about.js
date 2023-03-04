import React from 'react';
import s from './about.module.scss';
import {workplaceArray} from "../../consts/workplaceArray";
import WorkCard from "../../components/workCard/workCard";


const About = () => {
    return (
        <>
            <div className={s.page}>
                <div className={s.pageLeft}>
                    <img src="/images/about.jpg" alt="me" className={s.image}/>
                </div>
                <div className={s.pageRight}>
                    <div className={s.title}>Привет!</div>
                    <div className={s.text}>Меня зовут Илья, мне 20 лет. Родной город Санкт-Петербург, Петрегоф. С
                        саммого раннего детства меня привлекало творчество, и теперь я стал графическим дизайнером.
                        Имею
                        3 года комерческого опыта.
                    </div>
                    <div className={s.media}>
                        <div className={s.titleTwo}>
                            Социальные сети
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
            <div className={s.titleWork}>Опыт работы</div>
            <div className={s.works}>
                {workplaceArray.map((obj, title) => (
                    <WorkCard
                        key={title}
                        title={obj.title}
                        subtitle={obj.subtitle}
                        text={obj.text}
                    />
                ))
                }
            </div>
        </>


    );
};

export default About;
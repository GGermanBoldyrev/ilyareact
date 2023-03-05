import React from 'react';
import s from './about.module.scss';
import {workplaceArray} from "../../consts/workplaceArray";
import WorkCard from "../../components/workCard/workCard";


const About = () => {
    return (
        <>
            <div className={s.page}>
                <div>
                    <img src="/images/aboutt.png" alt="me" className={s.image}/>
                </div>
                <div className={s.pageRight}>
                    <div>
                        <div className={s.title}>Обо мне</div>
                        <div className={s.text}>
                            <div className={s.textPart}>Я графический дизайнер, мне 20 лет, город Санкт-Петербург.</div>
                            <div className={s.textPart}>За период всей деятельности занимался созданием постеров, полиграфической и печатной
                                продукции, дизайн упаковки и создавал фирменные стили для проектов.
                            </div>
                            <div className={s.textPart}>
                                Есть опыт в motion-дизайне, но на среднем уровне. В любом случае, есть желание двигаться дальше и развиваться.
                                реальный опыт в дизайне — 3 года, общий опыт почти 5 лет.
                            </div>
                            <div className={s.textPart}>
                                Было бы очень интересно поработать в компании единомышленников. Формат работы рассматриваю как удаленный, так и работа в офисе.
                            </div>
                        </div>
                    </div>
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
                </div>
            </div>
        </>
    );
};

export default About;
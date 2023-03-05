import React from 'react';
import s from './workView.module.scss';

const WorkView = (props) => {
    if (props.pos === 'left') {
        return (
            <div className={s.block}>
                <div className={s.image}>
                    <img src={props.imgLink} alt="My work"/>
                </div>
                <div className={s.content}>
                    <div className={s.title}>
                        {props.title}
                    </div>
                    <div className={s.text}>
                        {props.subtitle}
                    </div>
                    <div className={s.btnBlock}>
                        {props.button &&
                            <a href={props.bhLink} target="_blank" className={s.asd}>
                                <div className={s.button}>
                                    Узнать больше
                                </div>
                            </a>
                        }
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className={s.block}>
            <div className={s.content}>
                <div className={s.title}>
                    {props.title}
                </div>
                <div className={s.text}>
                    {props.subtitle}
                </div>
                <div className={s.btnBlock}>
                    {props.button &&
                        <a href={props.bhLink} target="_blank" className={s.asd}>
                            <div className={s.button}>
                                Узнать больше
                            </div>
                        </a>
                    }
                </div>
            </div>
            <div className={s.image}>
                <img src={props.imgLink} alt="My work"/>
            </div>
        </div>
    )
};

export default WorkView;
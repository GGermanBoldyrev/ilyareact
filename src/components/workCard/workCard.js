import React from 'react';
import s from './workCard.module.scss';

const WorkCard = ({title, subtitle, text}) => {
    return (
        <div className={s.card}>
            <div className={s.title}>{title}</div>
            <div className={s.subtitle}>{subtitle}</div>
            <div className={s.text}>{text}</div>
        </div>
    );
};

export default WorkCard;
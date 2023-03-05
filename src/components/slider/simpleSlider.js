import React from 'react';
import Carousel from "nuka-carousel";
import s from './slider.module.scss';

const SimpleSlider = () => {
    return (
        <Carousel
            wrapAround={true}
            slidesToShow={1}
            autoplay={true}
        >
            <img src="/images/works/1.png" alt="img"/>
            <img src="/images/works/2.png" alt="img"/>
            <img src="/images/works/3.png" alt="img"/>
            <img src="/images/works/4.png" alt="img"/>
            <img src="/images/works/5.png" alt="img"/>
            <img src="/images/works/6.png" alt="img"/>
        </Carousel>
    );
};

export default SimpleSlider;
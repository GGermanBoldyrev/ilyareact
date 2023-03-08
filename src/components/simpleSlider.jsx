import React from 'react';
import Carousel from "nuka-carousel";

const SimpleSlider = () => {
    return (
        <Carousel
            wrapAround={true}
            slidesToShow={1}
            autoplay={true}
            pauseOnHover={true}
            style={{borderRadius: "30px"}}
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
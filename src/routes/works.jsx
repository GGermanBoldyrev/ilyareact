import React from 'react';
import SimpleSlider from "../components/simpleSlider";
import WorkView from "../components/workView";
import {workGallery} from "../consts/workgallery";
import styled from "styled-components";

const Footer = styled.div`
  height: 100px;

  @media only screen and (max-width: 600px) {
    height: 60px;
  }
`;

const SliderBlock = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;

  @media only screen and (max-width: 600px) {
    margin-top: 40px;
  }
`;

const Slider = styled.div`
  width: 600px;

  @media only screen and (max-width: 600px) {
    padding: 20px;
    width: 100%;
    height: auto;
  }
`;


const Works = () => {
    return (
        <>
            <SliderBlock>
                <Slider>
                    <SimpleSlider/>
                </Slider>
            </SliderBlock>
            <div>
                {
                    workGallery.map((obj, title) => (
                        <WorkView
                            key={title}
                            title={obj.title}
                            subtitle={obj.subtitle}
                            imgLink={obj.imgLink}
                            bhLink={obj.bhLink}
                            pos={obj.pos}
                            button={obj.button}
                        />
                    ))
                }
            </div>
            <Footer></Footer>
        </>
    );
};

export default Works;
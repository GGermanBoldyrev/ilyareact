import React from 'react';
import SimpleSlider from "../../components/slider/simpleSlider";
import WorkView from "../../components/workView/workView";
import {workGallery} from "../../consts/workgallery";
import s from './works.module.scss';

const Works = () => {
    return (
        <div className={s.page}>
            <div className={s.sliderBlock}>
                <div className={s.slider}>
                    <SimpleSlider/>
                </div>
            </div>
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
            <div className={s.footer}></div>
        </div>
    );
};

export default Works;
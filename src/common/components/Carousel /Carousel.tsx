import React from 'react';
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";
import Skill from "../Skills/Skill/Skill";
import TS from '../../assets/images/icons/ts.svg';
import Redux from '../../assets/images/icons/redux.svg';
import ReactSVG from '../../assets/images/icons/react.svg';
import {Slide} from "react-awesome-reveal";


const Carousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 10000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        /*<Slide cascade={true} triggerOnce={true} direction={"left"}>*/
            <Slider {...settings}>
                <Skill title={'TypeScript'} description={'test description1'} src={TS} alt={"TS"}/>
                <Skill title={'Redux'}
                       description={'Experience with the Redux library, I understand its fundamental concepts: including state, actions, reducers and storage.'}
                       src={Redux} alt={"Redux"}/>
                <Skill title={'React'}
                       description={'Modern and mobile-ready website that will help you reach all of your marketing.'}
                       src={ReactSVG} alt={"React"}/>
                <Skill title={'TypeScript'} description={'test description1'} src={TS} alt={"TS"}/>
                <Skill title={'Redux'}
                       description={'Experience with the Redux library, I understand its fundamental concepts: including state, actions, reducers and storage.'}
                       src={Redux} alt={"Redux"}/>
                <Skill title={'React'}
                       description={'Modern and mobile-ready website that will help you reach all of your marketing.'}
                       src={ReactSVG} alt={"React"}/>
                <Skill title={'TypeScript'} description={'test description1'} src={TS} alt={"TS"}/>
                <Skill title={'Redux'}
                       description={'Experience with the Redux library, I understand its fundamental concepts: including state, actions, reducers and storage.'}
                       src={Redux} alt={"Redux"}/>
                <Skill title={'React'}
                       description={'Modern and mobile-ready website that will help you reach all of your marketing.'}
                       src={ReactSVG} alt={"React"}/>
            </Slider>
        /*</Slide>*/
    );
};

export default Carousel;
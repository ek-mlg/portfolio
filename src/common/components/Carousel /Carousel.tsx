import React from 'react';
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";
import Skill from "../Skills/Skill/Skill";
import {skillsData} from "../../../data";


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
            <Slider {...settings}>
                {skillsData.map((sk, index)=> <Skill key={index} title={sk.title} description={sk.description} src={sk.src} alt={sk.alt}/>)}
            </Slider>
    );
};

export default Carousel;
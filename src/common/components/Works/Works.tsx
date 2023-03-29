import React from 'react';
import s from './Works.module.scss';
import Work from "./Work/Work";
import Title from "../Title/Title";
import TodoImage from "../../assets/images/photos/todolist.jpg"
import SocialImage from "../../assets/images/photos/socialnetwork.jpg"
import CounterImage from "../../assets/images/photos/counter.jpg"
import {Fade, Zoom} from "react-awesome-reveal";

const Works = () => {

    const todoListImg = {
        backgroundImage: `url(${TodoImage})`,
    };
    const socialNetworkImg = {
        backgroundImage: `url(${SocialImage})`,
    };
    const counterImg = {
        backgroundImage: `url(${CounterImage})`,
    };

    const works = [
        {
            workTitle: "TodoList",
            workDescription: "Work description 1 Work description 1 Work description 1 Work description 1 Work description 1 Work description 1 Work description 1 Work description 1.",
            style: todoListImg,
            href: "https://github.com/ek-mlg/Todolist"
        },
        {
            workTitle: "Social network",
            workDescription: "Work description 2 Work description 2 Work description 2 Work description 2.",
            style: socialNetworkImg,
            href: "https://github.com/ek-mlg/Samurai-way"
        },
        {
            workTitle: "Counter",
            workDescription: "My first project on React, here used controlled components to create an intuitive user interface, also the property of storing data in localStorage, conditional rendering.",
            style: counterImg,
            href: "https://github.com/ek-mlg/counter"
        }
    ]

    return (
        <div className={s.WorksBlock} id="works">
            <div className={s.WorksContainer}>
                <Fade direction={"down"} triggerOnce={true}>
                    <Title title={"Featured Works"} second={"Portfolio"}/>
                </Fade>
                <div className={s.Works}>
                    <Zoom cascade={true} triggerOnce={true} duration={800}>
                        {works.map((el, index) =>
                            <Work
                                key={index}
                                workTitle={el.workTitle}
                                workDescription={el.workDescription}
                                style={el.style}
                                href={el.href}
                            />)}
                    </Zoom>
                </div>
            </div>
        </div>
    );
};

export default Works;
import React from 'react';
import s from './Works.module.scss';
import sContainer from "../../styles/Container.module.scss";
import Work from "./Work/Work";
import Title from "../Title/Title";
import TodoImage from "../../assets/image/photos/todolist.jpg"
import SocialImage from "../../assets/image/photos/socialnetwork.jpg"
import CounterImage from "../../assets/image/photos/counter.jpg"
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
        {workTitle: "TodoList", workDescription: "Work description 1 Work description 1 Work description 1 Work description 1 Work description 1 Work description 1 Work description 1 Work description 1.", style: todoListImg},
        {workTitle: "Social network", workDescription: "Work description 2 Work description 2 Work description 2 Work description 2.", style: socialNetworkImg},
        {workTitle: "Counter", workDescription: "My first project on React, here used controlled components to create an intuitive user interface, also the property of storing data in localStorage, conditional rendering.", style: counterImg}
    ]

    return (
        <div className={s.WorksBlock}>
            <div className={`${sContainer.Container} ${s.WorksContainer}`}>
                <Title title={"Featured Works"} second={"Portfolio"}/>
                <div className={s.Works}>

                    {works.map((el, index) =>
                        <Work
                            key={index}
                            workTitle={el.workTitle}
                            workDescription={el.workDescription}
                            style={el.style}
                        />)}
                </div>
            </div>
        </div>
    );
};

export default Works;
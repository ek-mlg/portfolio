import React from 'react';
import s from "./Work.module.scss";
import Button from "../../Button/Button";
import { Tilt } from 'react-tilt'
import {options} from "../../../../data";

type WorkPropsType = {
    workTitle: string
    workDescription: string
    style: backgroundImageType
    href: string
}
type backgroundImageType = {
    backgroundImage: string;
}

const Work:React.FC<WorkPropsType> = ({workTitle, workDescription, style, href}) => {
    return (
        <Tilt options={options} className={s.Work}>
            <div className={s.ImgContainer} style={style}>
                <Button text={"Look"} href={href}/>
            </div>
            <h3 className={s.WorkTitle}>{workTitle}</h3>
            <span className={s.WorkDescription}>{workDescription}</span>
        </Tilt>
    );
};

export default Work;
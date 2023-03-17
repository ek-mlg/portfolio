import React from 'react';
import s from "./Work.module.scss";
import Button from "../../Button/Button";

type WorkPropsType = {
    workTitle: string
    workDescription: string
}

const Work:React.FC<WorkPropsType> = ({workTitle, workDescription}) => {
    return (
        <div className={s.Work}>
            <div className={s.ImgContainer}>
                <Button/>
            </div>
            <h3 className={s.WorkTitle}>{workTitle}</h3>
            <span className={s.WorkDescription}>{workDescription}</span>
        </div>
    );
};

export default Work;
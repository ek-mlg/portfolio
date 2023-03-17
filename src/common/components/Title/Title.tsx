import React from 'react';
import s from "./Title.module.scss";

type TitlePropsType = {
    title: string,
    second: string
}

const Title:React.FC<TitlePropsType> = ({title, second}) => {
    return (
        <h2 className={s.Title}>
            {title}
            <span className={s.SecondTitle}>{second}</span>
        </h2>
    );
};

export default Title;
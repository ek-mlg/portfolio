import React from 'react';
import s from './Button.module.scss';


type ButtonPropsType = {
    text: string
    href: string
}

const Button:React.FC<ButtonPropsType> = ({text, href}) => {
    return <a className={s.Btn} href={href} target="_blank" rel="noreferrer">{text}</a>

};

export default Button;
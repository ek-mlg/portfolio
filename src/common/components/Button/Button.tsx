import React from 'react';
import s from './Button.module.scss';


type ButtonPropsType = {
    text: string
    href: string
    download?: string
}

const Button:React.FC<ButtonPropsType> = ({text, href, download}) => {
    return <a className={s.Btn} href={href} target="_blank" rel="noreferrer" download={download}>{text}</a>

};

export default Button;
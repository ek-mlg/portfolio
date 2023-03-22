import React from 'react';
import s from './Button.module.scss';

type ButtonPropsType = {
    text: string
}

const Button:React.FC<ButtonPropsType> = ({text}) => {
    return <button className={s.Button}>{text}</button>
};

export default Button;
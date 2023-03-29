import React from 'react';
import s from "./Input.module.scss";

type InputPropsType = {
    type: string
    placeholder: string
}

const Input:React.FC<InputPropsType> = ({type, placeholder}) => {
    return <input type={type} placeholder={placeholder} className={s.Input} />
};

export default Input;
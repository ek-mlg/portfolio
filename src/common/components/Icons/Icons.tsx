import React from 'react';
import s from "./Icons.module.scss"

const Icons:React.FC<{ src: string, alt: string}> = ({src, alt}) => {

    return <img alt={'icon'} src={src} className={s.Icons}/>

};

export default Icons;
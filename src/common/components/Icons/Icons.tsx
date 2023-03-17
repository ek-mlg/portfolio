import React from 'react';
import s from "./Icons.module.scss"

const Icons:React.FC<{ src: string, alt: string}> = ({src, alt}) => {

    return <img className={s.Icon} alt={alt} src={src}/>

};

export default Icons;
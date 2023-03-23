import React from 'react';

const Icons:React.FC<{ src: string, alt: string}> = ({src, alt}) => {

    return <img alt={'icon'} src={src} style={{
        height: "40px",
    }}
    />

};

export default Icons;
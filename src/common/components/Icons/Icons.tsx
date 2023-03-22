import React from 'react';

const Icons:React.FC<{ src: string, alt: string}> = ({src, alt}) => {

    return <img alt={alt} src={src} style={{
        height: "30px",
    }}
    />

};

export default Icons;
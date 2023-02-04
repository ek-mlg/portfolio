import React from 'react';
import s from './Nav.module.css';

const Nav = () => {
    return (
        <div className={s.Nav}>
            <a href="">Home</a>
            <a href="">Skills</a>
            <a href="">Works</a>
            <a href="">Contacts</a>
        </div>
    );
};

export default Nav;
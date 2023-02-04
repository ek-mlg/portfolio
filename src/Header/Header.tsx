import React from 'react';
import s from './Header.module.css';
import Nav from "../Nav/Nav";

const Header = () => {
    return (
        <div className={s.Header}>
            <Nav />
        </div>
    );
};

export default Header;
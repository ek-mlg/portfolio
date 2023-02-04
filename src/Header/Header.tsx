import React from 'react';
import s from './Header.module.css';
import Nav from "../Nav/Nav";

const Header = () => {
    return (
        <header className={s.Header}>
            <Nav />
        </header>
    );
};

export default Header;
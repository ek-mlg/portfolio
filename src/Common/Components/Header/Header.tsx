import React from 'react';
import s from './Header.module.css';
import Nav from "../Nav/Nav";

const Header = () => {
    return (
        <header className={s.Header}>
            <div className={s.HeaderContainer}>
                <h3 className={s.Logo}>eK</h3>
                <Nav/>
            </div>
        </header>
    );
};

export default Header;
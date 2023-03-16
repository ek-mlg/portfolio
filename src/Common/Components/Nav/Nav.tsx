import React from 'react';
import s from './Nav.module.css';

const Nav = () => {
    return (
        <div className={s.Nav}>
            <a href="src/Common/Components/Nav" className={s.Current}>Home</a>
            <a href="src/Common/Components/Nav" className={s.Current}>Skills</a>
            <a href="src/Common/Components/Nav" className={s.Current}>Works</a>
            <a href="src/Common/Components/Nav" className={s.Current}>Contacts</a>
        </div>
    );
};

export default Nav;
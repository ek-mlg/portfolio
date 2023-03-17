import React from 'react';
import s from './Nav.module.scss';

const Nav = () => {
    return (
        <div className={s.Nav}>
            <a href="src/common/components/Nav" className={s.Current}>Home</a>
            <a href="src/common/components/Nav" className={s.Current}>Skills</a>
            <a href="src/common/components/Nav" className={s.Current}>Works</a>
            <a href="src/common/components/Nav" className={s.Current}>Contacts</a>
        </div>
    );
};

export default Nav;
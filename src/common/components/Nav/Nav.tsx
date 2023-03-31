import React from 'react';
import s from './Nav.module.scss';
import {Link} from "react-scroll";


const Nav = () => {

    return (
        <>
                <div className={s.Nav}>
                    <Link
                        className={s.Current}
                        activeClass={s.Active}
                        to="main"
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                        offset={-100}
                        duration={500}
                    >
                        Home
                    </Link>
                    <Link
                        className={s.Current}
                        activeClass={s.Active}
                        to="about"
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                        offset={-100}
                        duration={500}
                    >
                        About
                    </Link>
                    <Link
                        className={s.Current}
                        activeClass={s.Active}
                        to="skills"
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                        offset={-100}
                        duration={500}
                    >
                        Skills
                    </Link>
                    <Link
                        className={s.Current}
                        activeClass={s.Active}
                        to="works"
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                        offset={-100}
                        duration={500}
                    >
                        Works
                    </Link>
                    <Link
                        className={s.Current}
                        activeClass={s.Active}
                        to="contacts"
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                        offset={-100}
                        duration={500}
                    >
                        Contacts
                    </Link>
                </div>
        </>

    );
};

export default Nav;
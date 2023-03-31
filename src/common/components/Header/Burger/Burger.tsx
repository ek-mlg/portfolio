import React, {useEffect, useState} from 'react';
import {Link} from "react-scroll";
import s from "./Burger.module.scss";

const Burger = () => {

    const [open, setOpen] = useState(false)
    const onClickHandler = () => {
        setOpen(!open)
    }

    useEffect(() => {
        open && (document.body.style.overflow = 'hidden')
        !open && (document.body.style.overflow = 'unset')

    }, [open])

    console.log(open)

    return (
        <>
            <div className={s.menuWrapper} onClick={onClickHandler}>
                <div className={open ? `${s.hamburgerMenu} ${s.animate}` : s.hamburgerMenu}></div>
            </div>

            <div className={open ? `${s.BurgerNavItems} ${s.Show}` : s.BurgerNavItems}>
                <Link
                    className={s.Current}
                    activeClass={s.Active}
                    to="main"
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={-100}
                    duration={500}
                    onClick={onClickHandler}
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
                    onClick={onClickHandler}
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
                    onClick={onClickHandler}
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
                    onClick={onClickHandler}
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
                    onClick={onClickHandler}
                >
                    Contacts
                </Link>
            </div>
            <div className={open ? `${s.Background} ${s.BackgroundShow}` : s.Background}>
            </div>
        </>
    );
};

export default Burger;
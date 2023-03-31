import React, {useEffect, useState} from 'react';
import {Link} from "react-scroll";
import s from "./Burger.module.css";

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
            <h4
                style={{color: "white", zIndex: 1}}
                onClick={onClickHandler}
            >
                МЕНЮ
            </h4>

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
        </>
    );
};

export default Burger;
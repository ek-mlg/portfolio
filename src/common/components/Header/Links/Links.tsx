import React from 'react';
import {Link} from "react-scroll";
import s from "./Links.module.scss"

type LinksPropsType = {
    offset: number
    onClick?: ()=> void
}
const Links:React.FC<LinksPropsType> = ({offset, onClick}) => {
    return (
        <>
            <Link
                className={s.Current}
                activeClass={s.Active}
                to="main"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={offset}
                duration={500}
                onClick={onClick}
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
                offset={offset}
                duration={500}
                onClick={onClick}
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
                offset={offset}
                duration={500}
                onClick={onClick}
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
                offset={offset}
                duration={500}
                onClick={onClick}
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
                offset={offset}
                duration={500}
                onClick={onClick}
            >
                Contacts
            </Link>
        </>
    );
};

export default Links;
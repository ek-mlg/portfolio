import React, {useEffect, useState} from 'react';
import s from './Nav.module.scss';
import {Link} from "react-scroll";


const Nav = () => {

    function useWindowSize() {
        const [windowSize, setWindowSize] = useState(0);
        useEffect(() => {
            function handleResize() {
                setWindowSize(window.innerWidth)
            }

            window.addEventListener("resize", handleResize);
            handleResize();
            return () => window.removeEventListener("resize", handleResize);
        }, []);
        return windowSize;
    }

    const size = useWindowSize()

    console.log(size)

    return (
        <>
            {size > 1040
                ?
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
                :
                <h4 style={{
                    color: "white",
                }}>МЕНЮ</h4>
            }
        </>

    );
};

export default Nav;
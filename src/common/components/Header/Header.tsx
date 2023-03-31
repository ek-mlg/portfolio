import React, {useEffect, useState} from 'react';
import s from './Header.module.scss';
import Nav from "../Nav/Nav";
import Burger from "./Burger/Burger";


const Header = () => {

    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            window.scrollY > 25 ? setScroll(true) : setScroll(false)
        }
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])


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
        <header className={`${s.Header} ${scroll ? s.Scroll : ''}`}>
            <div className={s.HeaderContainer}>
                <h3 className={s.Logo}>eK</h3>
                {size > 1040
                    ?
                    <Nav/>
                    :
                    <Burger/>
                }
            </div>
        </header>
    );
};

export default Header;
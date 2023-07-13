import React, {useEffect, useState} from 'react';
import s from './Header.module.scss';
import Burger from "./Burger/Burger";
import Links from "../Header/Links/Links"
import logo from '../../assets/images/icons/logoPortfolio.png'


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

    return (
        <header className={`${s.Header} ${scroll ? s.Scroll : ''}`}>
            <div className={s.HeaderContainer}>
                <img alt={'My logo'} src={logo} className={s.Logo}/>
                {size > 1040
                    ?
                    <div className={s.Nav}>
                        <Links offset={-90}/>
                    </div>
                    :
                    <Burger/>
                }
            </div>
        </header>
    );
};

export default Header;
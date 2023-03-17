import React, {useEffect, useState} from 'react';
import s from './Header.module.scss';
import Nav from "../Nav/Nav";


const Header = () => {

    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            window.scrollY > 25 ? setScroll(true) : setScroll(false)
        }
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    console.log(scroll)

    return (
        <header className={`${s.Header} ${scroll ? s.Scroll : ''}`}>
            <div className={s.HeaderContainer}>
                <h3 className={s.Logo}>eK</h3>
                <Nav/>
            </div>
        </header>
    );
};

export default Header;
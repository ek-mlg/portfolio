import React, {useEffect, useState} from 'react';
import s from "./Burger.module.scss";
import Links from "../Links/Links";

const Burger = () => {

    const [open, setOpen] = useState(false)
    const onClickHandler = () => {
        setOpen(!open)
    }

    useEffect(() => {
        open && (document.body.style.overflow = 'hidden')
        !open && (document.body.style.overflow = 'unset')

    }, [open])


    return (
        <>
            <div className={s.menuWrapper} onClick={onClickHandler}>
                <div className={open ? `${s.hamburgerMenu} ${s.animate}` : s.hamburgerMenu}></div>
            </div>

            <div className={open ? `${s.BurgerNavItems} ${s.Show}` : s.BurgerNavItems}>
                <Links offset={0} onClick={onClickHandler}/>
            </div>
            <div className={open ? `${s.Background} ${s.BackgroundShow}` : s.Background}>
            </div>
        </>
    );
};

export default Burger;
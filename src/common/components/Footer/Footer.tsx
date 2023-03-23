import React from 'react';
import s from './Footer.module.scss';
import Icons from "../Icons/Icons";
import WhatsApp from "../../assets/image/icons/whatsapp.svg";
import In from "../../assets/image/icons/in.svg";
import Facebook from "../../assets/image/icons/facebook.svg";
import Telegram from "../../assets/image/icons/telegram.svg";
import GitHub from "../../assets/image/icons/github.svg";

const Footer = () => {

    const date = new Date()
    const yearDate = date.getFullYear()

    const iconsState = [
        {href: "https://t.me/break_the_rules_eat_grasses", target: "_blank", rel: "noreferrer", src: Telegram, alt: "Telegram"},
        {href: "https://wa.me/89190161763", target: "_blank", rel: "noreferrer", src: WhatsApp, alt: "WhatsApp"},
        {href: "https://www.facebook.com/profile.php?id=100011402307623", target: "_blank", rel: "noreferrer", src: Facebook, alt: "Facebook"},
        {href: "https://www.linkedin.com/in/ek-mlg", target: "_blank", rel: "noreferrer", src: In, alt: "Linkedin"},
        {href: "https://github.com/ek-mlg", target: "_blank", rel: "noreferrer", src: GitHub, alt: "GitHub"}
    ]

    return (
        <div className={s.Footer}>
            <address className={s.FooterWrapper}>
                <div className={s.IconsContainer}>
                    {iconsState.map((el, index) => <a key={index} href={el.href} target={el.target} rel={el.rel}>
                        <Icons src={el.src} alt={el.alt}/>
                        </a>)}
                </div>
                <div className={s.TextContainer}>
                    <span className={s.Title}>Egor Kirillov</span>
                    <span className={s.Title}>Frontend-developer</span>
                </div>
                <div className={s.TextContainer}>
                    <a className={s.Info} href={"mailto:ek.mlg@icloud.com"}>ek.mlg@icloud.com</a>
                    <a className={s.Info} href={"tel:+7 (919) 016-17-63"}>+7 (919) 016-17-63</a>
                </div>
                <div className={s.TextContainer}>
                    <span className={s.Copyright}>© {yearDate} All rights reserved</span>
                </div>
            </address>
        </div>
    );
};

export default Footer;
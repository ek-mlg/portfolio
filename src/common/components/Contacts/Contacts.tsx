import React from 'react';
import s from './Contacts.module.scss';
import sContainer from '../../styles/Container.module.scss';
import Icons from "../Icons/Icons";
import WhatsApp from "../../assets/image/icons/whatsapp.svg";
import In from "../../assets/image/icons/in.svg";
import Facebook from "../../assets/image/icons/facebook.svg";
import Telegram from "../../assets/image/icons/telegram.svg";
import Title from "../Title/Title";
import Button from "../Button/Button";


const Contacts = () => {
    return (
        <div className={s.ContactsBlock}>
            <div className={`${sContainer.Container} ${s.ContactsContainer}`}>
                <Title title={"Contacts"} second={"second"}/>
                <div className={s.Contacts}>
                    <form className={s.Form}>
                        <p className={s.Text}>
                            Please fill out the form on this section to contact with me. Or call between 9:00 a.m. and
                            8:00
                            p.m. ET, Monday through Friday
                        </p>
                        <input className={s.Input}/>
                        <input className={s.Input}/>
                        <textarea className={s.Textarea}/>
                        <Button/>
                    </form>
                    <address className={s.AddressBlock}>
                        <h3 className={s.Info}>Contact me:</h3>
                        <h3 className={s.AddressTitle}>e-mail: <a
                            href={"mailto:ek.mlg@yandex.ru"}
                            className={s.AddressSpan}
                        >
                            ek.mlg@yandex.ru
                        </a>
                        </h3>
                        <h3 className={s.AddressTitle}>telephone: <a
                            href={"tel:+7 (919) 016-17-63"}
                            className={s.AddressSpan}
                        >
                            +7 (919) 016-17-63
                        </a>
                        </h3>
                        <div className={s.Icons}>
                            <a href={"https://wa.me/89190161763"} target={"_blank"} rel={"noreferrer"}>
                                <Icons src={WhatsApp} alt={"WhatsApp"}/>
                            </a>
                            <a href={"https://www.linkedin.com/in/ek-mlg"} target={"_blank"} rel={"noreferrer"}>
                                <Icons src={In} alt={"Linkedin"}/>
                            </a>
                            <a href={"https://www.facebook.com/profile.php?id=100011402307623"} target={"_blank"} rel={"noreferrer"}>
                                <Icons src={Facebook} alt={"Facebook"}/>
                            </a>
                            <a href={"https://t.me/break_the_rules_eat_grasses"} target={"_blank"} rel={"noreferrer"}>
                                <Icons src={Telegram} alt={"Telegram"}/>
                            </a>
                        </div>
                    </address>
                </div>
            </div>
        </div>
    );
};

export default Contacts;
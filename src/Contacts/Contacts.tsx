import React from 'react';
import s from './Contacts.module.css';
import sContainer from '../Common/Styles/Container.module.css';
import Title from "../Title/Title";
import Icons from "../Icons/Icons";
import WhatsApp from "../Common/Assets/image/icons/whatsapp.svg";
import In from "../Common/Assets/image/icons/in.svg";
import Git from "../Common/Assets/image/icons/github.svg";
import Telega from "../Common/Assets/image/icons/telegram.svg";


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
                        <button className={s.Button}>Send</button>
                    </form>
                    <address className={s.AddressBlock}>
                        <h3 className={s.AddressTitle}>Info:</h3>
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
                            <a href={"https://github.com/ek-mlg"} target={"_blank"} rel={"noreferrer"}>
                                <Icons src={Git} alt={"GitHub"}/>
                            </a>
                            <a href={"https://t.me/break_the_rules_eat_grasses"} target={"_blank"} rel={"noreferrer"}>
                                <Icons src={Telega} alt={"Telegram"}/>
                            </a>
                        </div>
                    </address>
                </div>
            </div>
        </div>
    );
};

export default Contacts;
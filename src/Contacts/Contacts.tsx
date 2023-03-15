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
                        <h3 className={s.AddressTitle}>
                            e-mail:
                            <span className={s.AddressSpan}> ek.mlg@yandex.ru</span>
                        </h3>
                        <h3 className={s.AddressTitle}>
                            telephone:
                            <span className={s.AddressSpan}> +7 (919) 016-17-63</span>
                        </h3>
                        <div className={s.Icons}>
                            <Icons src={WhatsApp} alt={"WhatsApp"}/>
                            <Icons src={In} alt={"Linkedin"}/>
                            <Icons src={Git} alt={"GitHub"}/>
                            <Icons src={Telega} alt={"Telegram"}/>
                        </div>
                    </address>
                </div>
            </div>
        </div>
    );
};

export default Contacts;
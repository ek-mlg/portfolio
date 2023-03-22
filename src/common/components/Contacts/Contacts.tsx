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
                <Title title={"Get un touch"} second={"Contact"}/>
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
                        <Button text={"Send"}/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contacts;
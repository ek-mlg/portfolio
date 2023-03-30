import React from 'react';
import s from './Contacts.module.scss';
import Title from "../Title/Title";
import Input from "../Input/Input";
import {AttentionSeeker, Slide} from "react-awesome-reveal";


const Contacts = () => {
    return (
        <div className={s.ContactsBlock} id="contacts">
            <div className={s.ContactsContainer}>
                <AttentionSeeker effect={"pulse"} triggerOnce={true}>
                    <Title title={"Get un touch"} second={"Contact"}/>
                </AttentionSeeker>
                <div className={s.Contacts}>
                    <form className={s.Form}>
                        <Slide direction={"left"} cascade={true} damping={0.1} triggerOnce={true} duration={400}>
                            <p className={s.Text}>
                                Please fill out the form on this section to contact with me. Or call between 9:00 a.m.
                                and
                                8:00
                                p.m. ET, Monday through Friday
                            </p>
                        </Slide>
                        <AttentionSeeker effect={"pulse"} cascade={true} triggerOnce={true} duration={400}>
                            <Input type={"text"} placeholder={"Name"}/>
                            <Input type={"email"} placeholder={"Email"}/>
                            <textarea className={s.Textarea} placeholder={"Message"}/>
                            <button type={"submit"}>Send</button>
                        </AttentionSeeker>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contacts;
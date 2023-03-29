import React from 'react';
import s from './Contacts.module.scss';
import Title from "../Title/Title";
import Input from "../Input/Input";
import {Slide, Zoom} from "react-awesome-reveal";


const Contacts = () => {
    return (
        <div className={s.ContactsBlock}>
            <div className={s.ContactsContainer}>
                <Slide direction={"left"} triggerOnce={true}>
                    <Title title={"Get un touch"} second={"Contact"}/>
                </Slide>
                <div className={s.Contacts}>
                    <form className={s.Form}>
                        <Slide direction={"left"} cascade damping={0.1} triggerOnce={true}>
                            <p className={s.Text}>
                                Please fill out the form on this section to contact with me. Or call between 9:00 a.m.
                                and
                                8:00
                                p.m. ET, Monday through Friday
                            </p>
                        </Slide>
                        <Zoom cascade={true} triggerOnce={true} duration={500}>
                            <Input type={"text"} placeholder={"Name"}/>
                            <Input type={"email"} placeholder={"Email"}/>
                            <textarea className={s.Textarea} placeholder={"Message"}/>
                            <button type={"submit"}>Send</button>
                        </Zoom>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contacts;
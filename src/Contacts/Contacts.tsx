import React from 'react';
import s from './Contacts.module.css';
import sContainer from '../Common/Styles/Container.module.css';
import Title from "../Title/Title";

const Contacts = () => {
    return (
        <div className={s.ContactsBlock}>
            <div className={`${sContainer.Container} ${s.ContactsContainer}`}>
                <Title title={"Contacts"} second={"second"}/>
                <form className={s.Form}>
                    <input className={s.Input}/>
                    <input className={s.Input}/>
                    <textarea className={s.Textarea}/>
                </form>
                    <button className={s.Button}>Send</button>
            </div>
        </div>
    );
};

export default Contacts;
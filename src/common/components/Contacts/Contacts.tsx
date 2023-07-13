import React from 'react';
import s from './Contacts.module.scss';
import Title from "../Title/Title";
import axios from "axios";
import {Field, Form, Formik} from "formik";

interface Values {
    name: string;
    email: string;
    message: string;
}

const Contacts = () => {

    const instance = axios.create({
        baseURL: 'https://gmail-smtp-pearl.vercel.app/',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const api = {
        sendForm(values: Values) {
            return instance.post('sendMessage', values)
        }
    }

    return (
        <div className={s.ContactsBlock} id="contacts">
            <div className={s.ContactsContainer}>
                <Title title={"Get un touch"} second={"Contact"}/>
                <div className={s.Contacts}>
                    <Formik
                        initialValues={{
                            name: '',
                            email: '',
                            message: '',
                        }}
                        onSubmit={(values: Values) => {
                            api.sendForm(values)
                            .then(() => {
                            alert('Message has been sent!')
                        })
                        }}
                        >

                        <Form className={s.Form}>

                            <p className={s.Text}>
                                Please fill out the form on this section to contact with me. Or call between 9:00 a.m.
                                and
                                8:00
                                p.m. ET, Monday through Friday
                            </p>

                            <label htmlFor="name">First Name</label>
                            <Field id="name" name="name" placeholder="Name" className={s.Input}/>

                            <label htmlFor="email">Last Name</label>
                            <Field id="email" name="email" placeholder="Email" type="email" className={s.Input}/>

                            <label htmlFor="message">Message</label>
                            <Field as="textarea" id="message" name="message" placeholder="Message" className={s.Textarea}/>

                            <button type="submit">Send</button>
                        </Form>

                    </Formik>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d23182.35118968487!2d37.615843431354165!3d55.7540357102607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1689245848731!5m2!1sru!2sru"
                        width="525" height="450"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
        </div>
    );
};

export default Contacts;
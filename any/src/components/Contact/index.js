import React, { useState } from "react";
import Nav from "../Nav";

function Contact() {
    const [ name, setName ] = useState('')
    const [ email, setEmail] = useState('')
    const [ message, setMessage ] = useState('')
    const [ emailSent, setEmailSent ] = useState('')

    const submit = () => {
        if (name && email && message) {
            setName('')
            setEmail('')
            setMessage('')
            setEmailSent('')
        } else {
            alert('Please fill in all fields.')
        }
    }

    const isValidEmail = email => {
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(String(email).toLowerCase());
    };

    return (
        <>
        <Nav />
        <input type="text" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} />
        <input type="email" placeholder="Your email address" value={email} onChange={e => setEmail(e.target.value)} />
        <textarea placeholder="Your message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
        <button onClick={submit}>Send Message</button>
        <span className={emailSent ? 'visible' : null}>Thank you for your message, we will be in touch in no time!</span>
        </>
    )
}

export default Contact
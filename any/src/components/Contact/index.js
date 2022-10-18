import React, { useState } from "react";
import Nav from "../Nav";
import emailjs from 'emailjs-com'

function Contact() {
    const [ name, setName ] = useState('')
    const [ email, setEmail] = useState('')
    const [ message, setMessage ] = useState('')
    const [ emailSent, setEmailSent ] = useState('')

    const submit = () => {
        if (name && email && message) {
            const serviceId = 'service_e0bjxfj';
            const templateId = 'template_8a3llrt';
            const userId = 'yDtO9YVvkvCedmaxs';
            const templateParams = {
                name,
                email,
                message
            };

            emailjs.send(serviceId, templateId, templateParams, userId)
            .then(response => console.log(response))
            .then(error => console.log(error));

            setName('')
            setEmail('')
            setMessage('')
            setEmailSent('true')
        } else {
            alert('Please fill in all fields.')
        }
    }

    return (
        <>
        <Nav />
        <section className="form-container">
        <form className="contact-form">
            <div className='form-group'>
                <label for='email'>Your Email: </label>
                <input type="email" className='form-control' placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div className='form-group'>
                <label for='name'>Your Name: </label>
                <input type="text" className='form-control' placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
            </div>
            <div className='form-group'>
                <label for='message'>Message:</label>
                <textarea className='form-control' placeholder="Your message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
            </div>
            <button className="contact-btn" onClick={submit}>Send Message</button>
            <br></br>
            <span className={emailSent ? 'visible' : null}>Thank you for your message, we will be in touch in no time!</span>
        </form>
        <br/>
        <footer>
            <div>
            We Process All Payment Types
            <br/>
Visa Master Card American Express Discover Gift Card JCB HSA WEX
            </div>
        </footer>
        </section>
        </>
    )
}

export default Contact
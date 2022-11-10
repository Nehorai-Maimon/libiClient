import React from 'react'
import { useState } from 'react';
import emailjs from 'emailjs-com'


function SendEmail() {
    const [toSend, setToSend] = useState({
        to_name: '',
        from_name: '',
        message: '',
        reply_to: '',
        to_email: "",

    });

    const onSubmit = (e) => {
        e.preventDefault();
        emailjs.send("michal12345", "template_rbnr5tr",
            toSend,
            "gmKs6WXjj7TUG7mWV")

            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
                console.log('FAILED...', err);
            });
    };


    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    return (
        <div>

            <form onSubmit={onSubmit}>
                <input
                    type='text'
                    name='from_name'
                    placeholder='from name'
                    value={toSend.from_name}
                    onChange={handleChange}
                />
                <input
                    type='text'
                    name='to_name'
                    placeholder='to name'
                    value={toSend.to_name}
                    onChange={handleChange}
                />
                <input
                    type='text'
                    name='message'
                    placeholder='Your message'
                    value={toSend.message}
                    onChange={handleChange}
                />
                <input
                    type='text'
                    name='reply_to'
                    placeholder='Your email'
                    value={toSend.reply_to}
                    onChange={handleChange}
                />
                <input
                    type='text'
                    name='to_email'
                    placeholder='email to...'
                    // value={toSend.to_email}
                    onChange={handleChange}
                />
                <button type='submit'>submit</button>
            </form>
        </div>
    )
}

export default SendEmail
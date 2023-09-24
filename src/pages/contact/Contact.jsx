import { useState } from 'react'
import { motion } from 'framer-motion';

import Loader from "../../utils/Loader/Loader";

import './Contact.scss'
import '../../styles/Globals.scss';


const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('https://backend-ogzx-6fhrvu64t-pxulin.vercel.app/submit-form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, message }),
        })
            .then((response) => response.text())
            .then((data) => {
                console.log(data);
                setName('');
                setEmail('');
                setMessage('');
            })
            .catch((error) => {
                console.error('Erro:', error);
            });
    };

    return (
        <>
            <Loader />

            <section id='contact'>
                <main className='grid-layout'>
                    <div className="text-content">
                        <motion.h1>
                            Get in Touch.
                        </motion.h1>
                        <p>Got a question or proposal, or just want
                            to say hello? Go ahead.</p>
                    </div>


                    <form onSubmit={handleSubmit}>
                        <div className="input-wrapper">
                            <label htmlFor="name">What's your name?</label>
                            <input
                                id='name'
                                type="text"
                                placeholder="Paulo"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="email">What's your email?</label>
                            <input
                                id='email'
                                type="email"
                                placeholder="Paulo@example.com "
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="textarea-wrapper">
                            <label htmlFor="message">Send me a message!</label>
                            <textarea
                                id='message'
                                rows="10"
                                placeholder="Message..."
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            />
                        </div>


                        <button type="submit">
                          Submit
                        </button>

                    </form>

                </main>
            </section >
        </>
    )
}

export default Contact;

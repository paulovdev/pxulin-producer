import { useState } from 'react'
import { motion } from 'framer-motion';

import './Contact.scss'
import '../../styles/Globals.scss';
import Loader from "../../utils/Loader/Loader";

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
                            Send me a message!
                        </motion.h1>
                        <p>Got a question or proposal, or just want
                            to say hello? Go ahead.</p>
                    </div>


                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="What's your name?"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <input
                            type="email"
                            placeholder="What's your email?"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <textarea
                            rows="10"
                            placeholder="What's your message?"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        />
                        <button type="submit">Submit</button>
                    </form>

                </main>
            </section >
        </>
    )
}

export default Contact;

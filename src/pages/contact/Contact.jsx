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
                            GET IN <b>TOUCH</b>.
                        </motion.h1>
                        <p>GOT A <b> QUESTION</b> OR <b>PROPOSAL</b>, OR JUST WANT
                            TO SAY <b>HELLO</b>? GO <b>AHEAD</b>.</p>
                    </div>


                    <form onSubmit={handleSubmit}>
                        <div className="input-wrapper">
                            <label htmlFor="name">WHAT'S YOUR <b>NAME</b>?</label>
                            <input
                                id='name'
                                type="text"
                                placeholder="PAULO"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="email">WHAT'S YOUR  <b>EMAIL</b>?</label>
                            <input
                                id='email'
                                type="email"
                                placeholder="PAULO@EXAMPLE.COM"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="textarea-wrapper">
                            <label htmlFor="message">SEND ME A  <b>MESSAGE</b>!</label>
                            <textarea
                                id='message'
                                rows="10"
                                placeholder="MESSAGE..."
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            />
                        </div>


                        <button type="submit">
                            SUBMIT
                        </button>

                    </form>

                </main>
            </section >
        </>
    )
}

export default Contact;

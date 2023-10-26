import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handleSubscribeClick = async () => {
        console.log('Email address:', email);
        const response = await fetch('http://localhost:3000/subscribe', {
            method: 'POST',
            headers: {
                'Content-Type': "application/json",
            },
            body: JSON.stringify({ email }),
        });

        if (response.status === 200) {
            alert('Email sent successfully');
        } else {
            alert('Email sent successfully');
        }
    }

    return (
        <div className='NavBar'>
            <h2 className='Input'>Sign up for daily insider</h2>
            <input
                className='input_Hold'
                type='email'
                placeholder='Enter your email'
                value={email}
                onChange={handleEmailChange}
            />
            <button className='butn' onClick={handleSubscribeClick}>Subscribe</button>
        </div>
    );
}

export default Navbar;

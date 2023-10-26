import React from 'react';
import './Last.css';
import { FaYoutube, FaTwitter, FaFacebook } from "react-icons/fa";

function Last() {
    return (
        <>
          
        <div className='Last'>
            <div className='Class_Last'>
                <div className='Explore'>
                    <h3 className='header_1'>Explore</h3>

                    <section className='Explore_1'>Home</section>
                    <section className='Explore_1'>Questions</section>
                    <section className='Explore_1'>Articles</section>
                    <section className='Explore_1'>Tutorials</section>
                </div>


                <div className='Support'>
                    <h3 className='header'>Support</h3>

                    <section className='Support_1'>FAQs</section>
                    <section className='Support_1'>Help</section>
                    <section className='Support_1'>Contact us</section>


                </div>
                <div className='Connected'>
                    <h3 className='header'>Stay Connected</h3>
                    <section className='Section_2'>
                        <FaYoutube />
                        <FaTwitter />
                        <FaFacebook />
                    </section>
                </div>

                </div>
                
                <div>
                    <p id='Paragraph'>DEV@Deakin 2023</p>
                </div>
                <div className='Div'>
                    <p >Privacy Policy</p>
                    <p>Terms</p>
                    <p>Code of Conduct</p>
                </div>

            </div>
        </>
    )
}
export default Last;
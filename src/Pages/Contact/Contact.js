import React from 'react';
import './ContactStyle.css';
import { FaPhoneAlt } from 'react-icons/fa';
import { RiMapPin2Fill } from 'react-icons/ri';
import { AiOutlineMail, AiFillYoutube } from 'react-icons/ai';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="container">
            <div className="contact">
                <div className="contact-form">
                    <h3>Contact Traveler</h3>
                    <p>Our team is available to receive your travel questions and booking requests from Sunday to Thursday.</p>
                    <form >
                        <input type="input" placeholder="First Name" required />
                        <input type="input" placeholder="Last Name" required />
                        <input type="input" placeholder="Email" required />
                        <textarea placeholder="Message" required />
                        <input type="submit" />
                    </form>
                </div>
                <div className="contact-info">
                    <h3>contact info</h3>
                    <p><FaPhoneAlt /> +1 0455548547</p>
                    <p><RiMapPin2Fill /> address</p>
                    <p><AiOutlineMail /> sales@Traveler.com</p>

                    <a href="https://www.youtube.com" target="_blank" rel="noreferrer"><AiFillYoutube /></a>
                    <a href="https://www.fb.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
                    <a href="https://www.twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>

                </div>
            </div>
        </div>
    )
}

export default Contact;

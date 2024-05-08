import React from 'react';
import './index.css';
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaGithubSquare, FaPhoneAlt, FaEnvelope  } from "react-icons/fa";

const TopHeader = () => {
    return (
        <div id="topbar" className="d-flex align-items-center fixed-top">
            <div className="container d-flex justify-content-between">
                <div className="contact-info d-flex align-items-center">
                    <FaEnvelope className='contact-icon'/> <a href="mailto:arathour_be22@thapar.edu">arathour_be22@thapar.edu</a>
                    <FaPhoneAlt className='contact-icon'/> <a href="tel:+91-7696580263">+91-7696580263</a> 
                </div>
                <div className="d-none d-lg-flex social-links align-items-center">
                    <a href="https://www.linkedin.com/in/anshika-rathour-3a3815259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target='_blank' rel="noreferrer" className="linkedin"><FaLinkedin /></a>
                    <a href="https://github.com/balbirs22" target='_blank' rel="noreferrer" className=""><FaGithubSquare /></a>
                </div>
            </div>
        </div>
    );
};
export default TopHeader;
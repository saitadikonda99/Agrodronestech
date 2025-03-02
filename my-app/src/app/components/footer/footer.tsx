import React from 'react'
import Image from 'next/image'
import './footer.css'

import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
        <div className="FooterComponent">
            <div className="FooterComponent-in">
                <div className="footer-one">
                    <div className="footer-one-one">
                        <Image 
                            src='/footerLogo.png'
                            alt="logo"
                            width={200}
                            height={200}
                        />
                    </div>
                    <div className="footer-one-two">
                        <p>Unlock Your Farming Potential. Begin Your Journey Now!</p>
                    </div>
                </div>
                <div className="footer-two">
                    <div className="footer-two-in">
                        <div className="footer-two-one">
                            <p>&copy; 2025 Agro Drone Tech. All rights reserved.</p>
                        </div>
                        <div className="footer-two-two">
                            <FaInstagram />
                            <FaLinkedin />
                            <FaWhatsapp />
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Footer
'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import './footer.css'

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  const handleScroll = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
        <div className="FooterComponent">
            <div className="FooterComponent-in">
                
                <div className="footer-one">

                    <div className="footer-one-one">
                        <div className="fo-one">
                            <Image 
                                src="/logos/AGRO.png"
                                alt="logo"
                                width={200}
                                height={200}
                            />
                        </div>
                        <div className="fo-two">
                            <Link href="https://www.linkedin.com/in/tadikondasaimanikanta/" target='_blank' aria-label="LinkedIn Profile"><FaLinkedin /></Link>
                            <Link href="https://github.com/saitadikonda99" target='_blank' aria-label="GitHub Profile"><FaGithub /></Link>
                            <Link href="https://www.instagram.com/_sai.you/" target='_blank' aria-label="Instagram Profile"><FaInstagram /></Link>
                            <Link href="https://x.com/sai_tadikonda_" target='_blank' aria-label="Twitter Profile"><FaXTwitter /></Link>
                        </div>
                        <div className="fo-three">
                            <p>AgroDrone Tech is a leading provider of agricultural drone technology, revolutionizing farming with cutting-edge solutions. Our mission is to make farming smarter, faster, and more efficient.</p>
                        </div>
                    </div>

                    <div className="footer-two-two">
                        <div className="footer-two-two-one">
                            <div className="footer-two-two-one-in">
                                <h1>Quick Links</h1>
                                <Link href='/' onClick={(e) => {
                                    e.preventDefault();
                                    handleScroll('home');
                                }}>Home</Link>
                                <Link href='/' onClick={(e) => {
                                    e.preventDefault();
                                    handleScroll('about');
                                }}>About us</Link>
                                <Link href='/' onClick={(e) => {
                                    e.preventDefault();
                                    handleScroll('services');
                                }}>Services</Link>
                                <Link href='/' onClick={(e) => {
                                    e.preventDefault();
                                    handleScroll('products');
                                }}>Products</Link>
                            </div>
                        </div>

                        <div className="footer-two-two-two">
                            <div className="footer-two-two-two-in">
                                <h1>Services</h1>
                                <Link href='/' onClick={(e) => {
                                    e.preventDefault();
                                    handleScroll('drones');
                                }}>Drones</Link>
                                <Link href='/' onClick={(e) => {
                                    e.preventDefault();
                                    handleScroll('spare-parts');
                                }}>Spare Parts</Link>
                                <Link href='/' onClick={(e) => {
                                    e.preventDefault();
                                    handleScroll('field-monitoring');
                                }}>Field Monitoring</Link>
                                <Link href='/' onClick={(e) => {
                                    e.preventDefault();
                                    handleScroll('ai-analysis');
                                }}>AI Crop Analysis</Link>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="footer-two">
                    <p>© 2025 AgroDrone Tech. All rights reserved. Designed and Developed by <Link href="https://www.saitadikonda.in" target='_blank'>Tadikonda Sai Manikanta</Link> </p>
                </div>
            </div>
        </div>
  )
}

export default Footer
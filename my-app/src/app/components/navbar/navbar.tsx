"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import './navbar.css'

interface NavbarProps {
  page: string;
}

const Navbar = ({ page }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Add useEffect to check window width
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Check initially
    checkMobile();
    
    // Add event listener
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="NavbarComponent">
      <div className="NavbarComponent-in">
        <div className="navbar-one">
          {isMobile ? (
            <h1>AgroDrone Tech</h1>
          ) : (
            <Image 
              src="/logos/AGRO.png"
              alt="logo"
              width={200}
              height={200}
            />
          )}
        </div>
        
        {/* Mobile menu button */}
        <button className="mobile-menu-button" onClick={toggleMenu}>
          <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
        </button>

        <div className={`navbar-two ${isMenuOpen ? 'mobile-open' : ''}`}>
          <a href="#home" onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}>Home</a>
          <a href="#about" onClick={(e) => {
            e.preventDefault();
            scrollToSection('about');
          }}>About us</a>
          <a href="#services" onClick={(e) => {
            e.preventDefault();
            scrollToSection('services');
          }}>Services</a>
          <a href="#products" onClick={(e) => {
            e.preventDefault();
            scrollToSection('products');
          }}>Products</a>
        </div>
        
        <div className={`navbar-three ${isMenuOpen ? 'mobile-open' : ''}`}>
          {page === 'Products' ? (
            <a href="#home" onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}>Back to Home</a>
          ) : (
            <a href="#contact" onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}>Contact us</a>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
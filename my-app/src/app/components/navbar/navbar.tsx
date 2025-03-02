import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import './navbar.css'

const Navbar = () => {
  return (
        <div className="NavbarComponent">
            <div className="NavbarComponent-in">
                <div className="navbar-one">
                    <Image 
                        src="/AGRO.png"
                        alt="logo"
                        width={200}
                        height={200}
                    />
                </div>
                <div className="navbar-two">
                    <Link href='/'>Home</Link>
                    <Link href='/'>About us</Link>
                    <Link href='/'>Services</Link>
                    <Link href='/'>Products</Link>
                </div>
                <div className="navbar-three">
                    <Link href='/'>Contact us</Link>
                </div>
            </div>
        </div>
  )
}

export default Navbar
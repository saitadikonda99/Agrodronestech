import React from 'react'
import Image from 'next/image'
import './about.css'

const About = () => {
  return (
        <div className="AboutComponent">
            <div className="AboutComponent-in">
                <div className="about-one">
                    <h1>Home / About Us</h1>
                </div>
                <div className="about-two">
                    <div className="about-two-in">
                        <div className="about-two-one">
                            <p>We are pioneers in agricultural <span>drone technology</span> , revolutionizing farming with cutting-edge solutions. Our mission is to make farming <span>smarter</span>, <span>faster</span>, and more <span>efficient</span>.</p>
                        </div>
                        <div className="about-two-two">
                            <div className="about-box about-box-one">
                                <Image 
                                    src='/about1.jpg'
                                    alt="about1"
                                    width={400}
                                    height={400}
                                />
                            </div>
                            <div className="about-box about-box-two">
                                <Image 
                                    src='/about2.jpg'
                                    alt="about2"
                                    width={400}
                                    height={400}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default About
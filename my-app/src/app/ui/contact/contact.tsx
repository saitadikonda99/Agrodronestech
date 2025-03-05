"use client"
import React from 'react'
import './contact.css'

const Contact = () => {

    const [data, setData] = React.useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = () => {
        console.log(data);
    }

  return (
    <div className="ContactComponent">
      <div className="ContactComponent-in">
        <div className="contact-one">
          <h1>Contact Us</h1>
        </div>
        <div className="contact-two">
          <div className="contact-two-heading">
            <h1>Drop a Message To Get</h1>
            <h1>In Touch With Us</h1>
          </div>
          <div className="contact-three">
            {/* Left Section */}
            <div className="contactCard">
              <div className="contactCard-in">
                <h2>Get in Touch</h2>
                <div className="contactCard-item">
                  <div className="icon">✉️</div>
                  <div className="details">
                    <span>Email:</span>
                    <a href="mailto:helderligcommercio@gmail.com">helderligcommercio@gmail.com</a>
                  </div>
                </div>
                
                <div className="contactCard-item">
                  <div className="icon">📞</div>
                  <div className="details">
                    <span>Phone:</span>
                    <a href="tel:+919988669224">+91 9988669224</a>
                  </div>
                </div>
                
                <div className="contactCard-item">
                  <div className="icon">📍</div>
                  <div className="details">
                    <span>Address:</span>
                    <p>
                      #39-4-12/4, Ground Floor,<br />
                      Near Sudarshan Park, Muralinagar,<br />
                      VISAKHAPATNAM, Pin:- 530007,<br />
                      Andhra Pradesh, INDIA
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contactForm">
              <div className="contactForm-in">
                  <div className="form-group">
                    <input 
                        type="text"
                        placeholder="Enter your name"
                        name="name"
                        value={data.name}
                        onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <input 
                        type="email"
                        placeholder="Enter your email"
                        name="email"
                        value={data.email}
                        onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <input 
                        type="tel"
                        placeholder="Enter your phone"
                        name="phone"
                        value={data.phone}
                        onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                        placeholder="Enter your message"
                        name="message"
                        value={data.message}
                        onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <button onClick={handleSubmit}>Send Message</button>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
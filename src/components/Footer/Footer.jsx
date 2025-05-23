import React from 'react'
import './Footer.css'
import assets from '../../assets/assets'

const Footer = () => {

  let currentYear = new Date().getFullYear();
  return (
    <div className="footer">
    <div className='footer-content'>
      <div className="footer-content-left">
        <div className="logo">
        <img src={assets.logo} alt="" />
        <h1>HACC</h1>
        </div>
        <p>Connect, Learn, Grow!</p>
      </div>
    <div className="footer-content-center">
        <h1>Socials</h1>
        <ul>
            <li><a href="https://www.linkedin.com/company/hacc-thehackathon-and-coding-club/"><img src={assets.linkedIn} alt="" /></a></li>
            <li><a href="https://www.instagram.com/the_hacc/profilecard/?igsh=MW43aThmZGx1eXh6YQ=="><img src={assets.insta} alt="" /></a></li>
            <li><a href="https://chat.whatsapp.com/FRXKH7xvePHHRZSkVyMA82"><img src={assets.whatsapp} alt="" /></a></li>
        </ul>
    </div>
    <div className="footer-content-right">
        <h1>Contacts</h1>
        <ul>
            <li>Lohith P: +91-7483856694</li>
            <li>Vivith: +91-6366335543</li>
        </ul>
    </div>
    </div>
    <hr />
    <div className="cr">
        <p>{currentYear} HACC. ALL RIGHTS RESERVED</p>
    </div>
    </div>
  )
}

export default Footer

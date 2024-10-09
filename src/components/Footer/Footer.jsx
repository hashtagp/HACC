import React from 'react'
import './Footer.css'
import assets from '../../assets/assets'

const Footer = () => {
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
            <li><img src={assets.linkedIn} alt="" /></li>
            <li><img src={assets.insta} alt="" /></li>
            <li><img src={assets.whatsapp} alt="" /></li>
        </ul>
    </div>
    <div className="footer-content-right">
        <h1>Contacts</h1>
        <ul>
            <li>Student coordinator</li>
            <li>Student coordinator</li>
            <li>Student coordinator</li>
        </ul>
    </div>
    </div>
    <hr />
    <div className="cr">
        <p>2024 HACC. ALL RIGHTS RESERVED</p>
    </div>
    </div>
  )
}

export default Footer

import React from 'react'
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
const Contact = () => {
  return (
    <div>
        <h1>Contact Us:-</h1>
        <div className='dis'>
      <div className='center'>
      <FaPhone className='whatsapp'/>
      <h3>+91 9701349209</h3>
      </div>
      <div className='center'>
      <FaSquareWhatsapp className='whatsapp'/>
      <h3>+91 9701349209</h3>
      </div>
      <div className='center'>
      <FaLinkedin className='whatsapp'/>
      <h3>Bathala Gangadhar</h3>
      </div>
      </div>
    </div>
  )
}

export default Contact
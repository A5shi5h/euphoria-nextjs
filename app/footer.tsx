"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook , faInstagram , faGoogle , faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import React from 'react'

const Footer = () => {
  return (
    <>
     <div className='footer' id='contact'>
     <h1 className='flex w-full text-2xl text-white bg-black justify-center pt-4'>Follow us on</h1>
     <div className='footer-socials'>
        <a href='https://www.facebook.com/aonedesigns/'>
            <FontAwesomeIcon icon={faFacebook} size='3x'/>
        </a>
        <a href='https://www.instagram.com/euphoriasingtam/'>
            <FontAwesomeIcon icon={faInstagram} size='3x'/>
        </a>
        <a href='https://euphoriasingtam@gmail.com'>
            <FontAwesomeIcon icon={faGoogle} size='3x'/>
        </a>
        <a href="https://api.whatsapp.com/send?phone=918101497215">
            <FontAwesomeIcon icon={faWhatsapp} size='3x'/>
        </a>
     </div>
     </div>
    </>
  )
}

export default Footer
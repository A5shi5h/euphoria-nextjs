"use client"
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars , faX } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-scroll';
import Image from 'next/image';

export function Navbar(){

  return (
    <>
     <header className='header'>
      <Link 
          to="home" 
          spy={true} 
          smooth={true} 
          offset={-100} 
          duration={500} 
        >
          <img className="logo" src='./images/logo.jpg' alt='logo'/>
        </Link>
      
      <input type='checkbox' id='check'/>
      <label htmlFor='check' className='icons'>
       <FontAwesomeIcon icon={faBars} id='menu-icon'/>
       <FontAwesomeIcon icon={faX} id='close-icon'/>
      </label>
        <nav className='navbar'>
        <Link 
          to="about" 
          spy={true} 
          smooth={true} 
          offset={-100} 
          duration={500} 
        >
          About
        </Link>
        <Link 
          to="gallery" 
          spy={true} 
          smooth={true} 
          offset={-150} 
          duration={500} 
        >
          Gallery
        </Link>
        <Link 
          to="feedback" 
          spy={true} 
          smooth={true} 
          offset={-150} 
          duration={500} 
        >
          Testimonials
        </Link>
        <Link 
          to="contact" 
          spy={true} 
          smooth={true} 
          offset={-100} 
          duration={500} 
        >
          Contact
        </Link> 
        </nav>
      </header>   
  </>
  )
}


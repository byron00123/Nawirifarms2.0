import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

export default function Navbar() {
  return (
   <nav className='container'>
    <img src={logo} alt="" className='logo'/>
    <ul>
      <li>Home</li>
      <li>Services</li>
      <li>About Us</li>
      <li>Products</li>
      <li>Testimonials</li>
      <li><button className='btn'>Contact Us</button></li>
    </ul>
   </nav>
  )
}

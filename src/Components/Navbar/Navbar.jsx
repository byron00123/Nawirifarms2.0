import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

export default function Navbar() {
  return (
   <nav>
    <img src={logo} alt="" />
    <ul>
      <li>Home</li>
      <li>Services</li>
      <li>About Us</li>
      <li>Products</li>
      <li>Testimonials</li>
      <li>Contact Us</li>
    </ul>
   </nav>
  )
}

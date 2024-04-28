import React from 'react'
import './Hero.css'
import { Link } from 'react-scroll';

import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Transforming Kenyan Agriculture: A Commitment to Sustainable Growth</h1>
        <p>Our mission is to revolutionise agriculture in Kenya by employing sustainable farming
            practices to enhance food security, environmental conservation, and socioeconomic
            development</p>
            <Link to ='products' smooth={true} offset={-260} duration={500} className='btn'>Explore more<img src={dark_arrow} alt=""/></Link>
      </div>
    </div>
  )
}

export default Hero

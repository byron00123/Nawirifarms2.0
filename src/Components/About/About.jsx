import React from 'react'
import './About.css'
import about_img from '../../assets/about.jpg'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon'/>
        </div>
    <div className="about-right">
       <h3>ABOUT NAWIRI FARMS</h3>
       <h2>Naturing tomorrow's harvest</h2>
       <p>Nawiri Farms Limited, deriving its name from the Swahili word meaning "Thrive,"
         is a Kenyan-born organic and sustainable crop farming enterprise dedicated to uplifting underprivileged communities through agriculture.</p>
       <p>Our mission is to revolutionize Kenya's agricultural sector by employing sustainable farming practices to enhance food security,
         promote environmental conservation, and drive socioeconomic development. With a commitment to sustainability, social responsibility,
          innovation, and integrity, Nawiri Farms Limited focuses on implementing cutting-edge techniques such as drip irrigation systems, 
          solar-powered water pumps, and natural pesticides to ensure the long-term viability of our operations while uplifting disadvantaged communities.</p>
    <p>Join us as we cultivate a brighter, more sustainable future for Kenya's agricultural landscape and its people.</p>
    </div>
     
      
    </div>
  )
}

export default About

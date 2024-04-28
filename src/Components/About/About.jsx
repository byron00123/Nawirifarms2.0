import React from 'react'
import './About.css'
import about_img from '../../assets/about.jpg'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
        </div>
    <div className="about-right">
       <h3>ABOUT NAWIRI FARMS</h3>
       <h2>Thrive with Nawiri</h2>
       <p>Nawiri, translating to "Thrive" in Swahili, embodies our commitment to fostering sustainable agriculture and improving livelihoods in Kenya.
         We are Nawiri Farms Limited, a Kenyan-born, organic, and sustainable crop farming enterprise dedicated to uplifting underprivileged communities.</p>
         <h2>Revolutionizing Kenyan Agriculture</h2>
       <p>Our mission is to revolutionize Kenyan agriculture by employing sustainable practices that enhance food security, environmental conservation,
         and socioeconomic development. We believe in a future where agriculture thrives in harmony with nature, empowering people and nourishing communities.</p>
         <h2>Core Values that Guide Us</h2>
        <p><b class="dark-text">Sustainability:</b> Long-term viability is at the heart of everything we do. We prioritize practices that ensure the health of our farms and
           the surrounding ecosystems for generations to come.</p> 
        <p><b class="dark-text">Social Responsibility:</b> We are dedicated to uplifting underprivileged communities by providing employment opportunities,
           training, and support. We believe in empowering people to build a better future.</p>   
        <p><b class="dark-text">Innovation:</b> We embrace cutting-edge technologies and methodologies to optimize agricultural productivity.
           We constantly seek ways to minimize environmental impact while maximizing yield.</p> 
        <p><b class="dark-text">Integrity:</b> Honesty, transparency, and ethical principles guide every decision we make.
           We build trust with our stakeholders and contribute to a fair and sustainable food system.</p>  
           <h2>Our Vision: Nawiri Holdings</h2> 
        <p>Our vision extends beyond just farming. We aim to establish Nawiri Holdings, a diversified conglomerate with a holistic approach to agriculture:</p> 
        <p><b class="dark-text">Nawiri Farms:</b> Our core business, producing high-quality organic crops for local and international markets.</p>   
        <p><b class="dark-text">Nawiri Tech:</b> An Agritech firm providing farm management tools, IoT installations, drone services, and data collection for AI and carbon credit trading.</p>    
        <p><b class="dark-text">Nawiri Finance:</b> A financial inclusion initiative offering savings and credit services tailored to the needs of smallholder farmers and rural communities.</p>
        <p><b class="dark-text">Nawiri Foundation:</b> A philanthropic arm advancing sustainable agriculture in Kenya through education, research, and community outreach programs.</p>
        <h2>Join us in Cultivating Change</h2> 

       <p>Nawiri Farms Limited is more than just a farming enterprise; we are a catalyst for positive change in Kenya's agricultural landscape. We empower communities, preserve the environment, 
         and drive economic prosperity. Join us on our journey to cultivate a brighter, more sustainable future for generations to come.</p>
    </div>
     
      
    </div>
  )
}

export default About

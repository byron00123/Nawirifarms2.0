import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero';
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Products from './Components/Products/Products';
import Testimonials from './Components/Testimonials/Testimonials';
import './index.css';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
           <Title subTitle = 'Our PROGRAM'  title= 'Introducing Nawiri Holdings, a Dynamic Conglomerate'/>
           <Programs />
           <About/>
           <Title subTitle = 'PRODUCTS'  title= 'Explore Our Range of Organic Produce'/>
           <Products/>
           <Title subTitle = 'TESTIMONIALS'  title= 'What Our Clients Say'/>
           <Testimonials/>
           <Title subTitle = 'Contact Us'  title= 'Get in Touch'/>

      </div>
      
 
      
    </div>
  )
}

export default App

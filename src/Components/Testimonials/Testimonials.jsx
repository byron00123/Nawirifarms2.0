import React, { useRef } from 'react';
import './Testimonials.css';
import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';

import user_1 from '../../assets/user-1.jpeg';
import user_2 from '../../assets/user-2.jpeg';
import user_3 from '../../assets/user-3.jpeg';
import user_4 from '../../assets/user-4.jpeg';

function Testimonials() {
  const slider = useRef();
  let tx = 0; // Initial translation value

  const slideForward = () => {
    const MAX_SLIDER_POSITION = -100; // Assuming 4 slides, each 25% width

    // Check if slider position hasn't reached the maximum
    if (tx > MAX_SLIDER_POSITION) {
      tx -= 25; // Move one step forward
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Esther, Smallholder Farmer</h3>
                  <span>Kisumu, Kenya</span>
                </div>
              </div>
              <p>
              Before Nawiri Farms, I struggled to make ends meet with my small plot of land. Traditional methods left me vulnerable to droughts and low yields.
               Nawiri offered training in sustainable practices and access to fair markets. Now, with their drip irrigation system and organic pest control techniques,
               my crops are thriving! I'm finally earning a decent income and feel empowered to build a better future for my family.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Dr. Mwangi, Environmental Scientist</h3>
                  <span>Busia, Kenya</span>
                </div>
              </div>
              <p>
              Nawiri Farms embodies the true spirit of sustainable agriculture. Their commitment to minimizing water waste and using renewable energy sources is a breath of fresh air. 
              Their focus on soil health through compost manure fosters biodiversity and protects ecosystems. 
              Nawiri sets a powerful example for other farming businesses in Kenya, demonstrating that agriculture can thrive in harmony with nature.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>John, CEO of Agritech Startup</h3>
                  <span>Nairobi, Kenya</span>
                </div>
              </div>
              <p>
              We were impressed by Nawiri's vision for Nawiri Tech. Their dedication to using cutting-edge technology to improve agricultural efficiency is inspiring. 
               Our collaboration allows us to offer Nawiri Farms access to advanced farm management systems, drone services, and AI-powered insights.
               Together, we're pushing the boundaries of Agritech in Kenya, maximizing food production while minimizing environmental impact
             
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Sarah, Local Community Leader</h3>
                  <span>Kitale, Kenya</span>
                </div>
              </div>
              <p>
              Nawiri Farms isn't just about profit. Their commitment to social responsibility shines through. 
              They actively partner with our community, providing training opportunities for local youth and creating new jobs.  
              Their financial inclusion initiatives empower residents with access to vital savings and credit services.
               Nawiri Farms is a true partner, working with us to build a stronger, more prosperous future for our community.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Testimonials;

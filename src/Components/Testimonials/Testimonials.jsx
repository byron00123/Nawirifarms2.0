import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'

import user_1 from '../../assets/user-1.jpeg'
import user_2 from '../../assets/user-2.jpeg'
import user_3 from '../../assets/user-3.jpeg'
import user_4 from '../../assets/user-4.jpeg'



function Testimonials() {
    const slider = useRef();
    let tx = 0;

const slideForward = () =>{
    if(tx > -100){
        tx -= 50;
    }
    slider.current.style.transform = `translateX(${tx}%)`

    }
 const slideBackward = () =>{
    if(tx < 0){
        tx += 50;
    }
    slider.current.style.transform = `translateX(${tx}%)`
        
    }

  return (
    <div className='testimonials'>
        <img src={ next_icon} alt="" className='next-btn' onClick={slideForward}/>
        <img src={ back_icon} alt="" className='back-btn' onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>John Doe1</h3>
                                <span>Kisumu, Kenya</span>

                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Dolores dignissimos tempore quasi quia provident dolorem cum, 
                            est nesciunt at numquam ipsa nisi sequi asperiores? Rerum officiis sunt aliquam! Provident, suscipit.</p>
                    </div>
                </li>


                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>Jane Doe2</h3>
                                <span>Kisumu, Kenya</span>

                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Dolores dignissimos tempore quasi quia provident dolorem cum, 
                            est nesciunt at numquam ipsa nisi sequi asperiores? Rerum officiis sunt aliquam! Provident, suscipit.</p>
                    </div>
                </li>


                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>John Doe3</h3>
                                <span>Kisumu, Kenya</span>

                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Dolores dignissimos tempore quasi quia provident dolorem cum, 
                            est nesciunt at numquam ipsa nisi sequi asperiores? Rerum officiis sunt aliquam! Provident, suscipit.</p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>Jane Doe4</h3>
                                <span>Kisumu, Kenya</span>

                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Dolores dignissimos tempore quasi quia provident dolorem cum, 
                            est nesciunt at numquam ipsa nisi sequi asperiores? Rerum officiis sunt aliquam! Provident, suscipit.</p>
                    </div>
                </li>
            </ul>
        </div>
      
    </div>
  )
}

export default Testimonials

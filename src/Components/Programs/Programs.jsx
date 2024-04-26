import React from 'react'
import './Programs.css'
import program_1 from '../../assets/program-1.jpg'
import program_2 from '../../assets/program-2.png'
import program_3 from '../../assets/program-3.jpg'
import program_4 from '../../assets/program-4.jpg'


function Services() {
  return (
    <div className= "programs">
      <div className="program">
        <img src={program_1} alt=''/>
      </div>
      <div className="program">
        <img src={program_2} alt=''/>
      </div>
      <div className="program">
        <img src={program_3} alt=''/>
      </div>
      <div className="program">
        <img src={program_4} alt=''/>
      </div>
    </div>
  )
}

export default Services

import React from 'react'
import './Programs.css'
import program_1 from '../../assets/program-1.jpg'
import program_2 from '../../assets/program-2.png'
import program_3 from '../../assets/program-3.jpg'
import program_4 from '../../assets/program-4.jpg'
import program_icon_1 from '../../assets/program_icon_1.png'
import program_icon_2 from '../../assets/program_icon_2.png'
import program_icon_3 from '../../assets/program_icon_3.png'
import program_icon_4 from '../../assets/program_icon_4.png'


function Services() {
  return (
    <div className= "programs">
      <div className="program">
        <img src={program_1} alt=''/>
        <div className="caption">
          <img src={program_icon_1} alt="" />
          <p>Nawiri Farms</p>
        </div>
      </div>
      <div className="program">
        <img src={program_2} alt=''/>
        <div className="caption">
          <img src={program_icon_2} alt="" />
          <p>Nawiri Tech</p>
        </div>
      </div>
      <div className="program">
        <img src={program_3} alt=''/>
        <div className="caption">
          <img src={program_icon_3} alt="" />
          <p>Nawiri Finance</p>
        </div>
      </div>
      <div className="program">
        <img src={program_4} alt=''/>
        <div className="caption">
          <img src={program_icon_4} alt="" />
          <p>Nawiri Foundation</p>
        </div>
      </div>
    </div>
  )
}

export default Services

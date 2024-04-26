import React from 'react'
import './Products.css'
import gallery_1 from '../../assets/product-1.jpeg'
import gallery_2 from '../../assets/product-2.jpeg'
import gallery_3 from '../../assets/product-3.jpg'
import gallery_4 from '../../assets/product-4.jpg'
import white_arrow from  '../../assets/white-arrow.png'


function Products() {
  return (
    <div className='products'>
      <div className="gallery">
        <img src={gallery_1} alt="" />
        <img src={gallery_2} alt="" />
        <img src={gallery_3} alt="" />
        <img src={gallery_4} alt="" />
      </div>
      <button className='btn dark-btn'>See more here <img src={white_arrow} alt="" /></button>
    </div>
  )
}

export default Products

import React from 'react'
import './index.css'
import Banner1 from '../../assests/images/banner1.jpg'
import Banner2 from '../../assests/images/banner2.jpg'
import Banner3 from '../../assests/images/banner3.jpg'
import Banner4 from '../../assests/images/banner4.jpg'
const Banner = () => {
  return (
   <div className='bannerSection'>
    <div className='container-fluid'>
      <div className='row'>
        <div className='col'>
             <div className='box'>
              <img src={Banner1} className='w-100' />
             </div>
        </div>
        <div className='col'>
             <div className='box'>
              <img src={Banner2} className='w-100' />
             </div>
        </div>
        <div className='col'>
             <div className='box'>
              <img src={Banner3}  className='w-100'/>
             </div>
        </div>
      </div>
    </div>
   </div>
  )
}

export default Banner
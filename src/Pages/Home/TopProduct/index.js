import React from 'react'
import './index.css'
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom'
import topSelling1 from '../../../assests/images/topSelling1.png'

// import topSelling2 from '../../../assests/images/topSelling2.png'
// import topSelling3 from '../../../assests/images/topSelling3.png'
const TopProducts = (props) => {
  return (
    <>
    <div className='topSellingBox1'>
       <h3>{props.title}</h3>
      
      <div className='items d-flex align-items-center'>
            
            <div className='img'>
                  <Link>
                  <img src={topSelling1} className='w-100' />
                  </Link>
            </div>
            <div className='info px-3'>
                <Link to=""><h5>Nestle Original Coffee-Mate Coffee Creamer</h5></Link>
                <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                <div className='d-flex align-items-center'>
                    <span className='price text-g'>40Rs.</span>
                    <span className='oldPrice'>50Rs.</span>
                </div>
            </div>
            
      </div>
      <div className='items d-flex align-items-center'>
            
            <div className='img'>
                  <Link>
                  <img src={topSelling1} className='w-100' />
                  </Link>
            </div>
            <div className='info px-3'>
                <Link to=""><h5>Nestle Original Coffee-Mate Coffee Creamer</h5></Link>
                <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                <div className='d-flex align-items-center'>
                    <span className='price text-g'>40Rs.</span>
                    <span className='oldPrice'>50Rs.</span>
                </div>
            </div>
            
      </div>
      <div className='items d-flex align-items-center'>
            
            <div className='img'>
                  <Link>
                  <img src={topSelling1} className='w-100' />
                  </Link>
            </div>
            <div className='info px-3'>
                <Link to=""><h5>Nestle Original Coffee-Mate Coffee Creamer</h5></Link>
                <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                <div className='d-flex align-items-center'>
                    <span className='price text-g'>40Rs.</span>
                    <span className='oldPrice'>50Rs.</span>
                </div>
            </div>
            
      </div>


    </div>
    </>
  )
}

export default TopProducts
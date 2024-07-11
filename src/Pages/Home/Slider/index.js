import React, { useEffect } from 'react'
// import Slider from "react-slick";
import './index.css'
import Slider1 from '../../../assests/images/slider-1.png'
import Slider2 from '../../../assests/images/slider-2.png'
import Carousel from 'react-bootstrap/Carousel'
import NewsLetter from '../../../Components/newsLetter/index'
import { useContext } from 'react'
import { MyContext } from '../../../App';
const HomeSlider = () => {
  const context=useContext(MyContext);

  useEffect(()=>{
      
  },[])
  return (
     <>
      <div className='container-fluid position-relative'>
       <Carousel data-bs-theme="dark" className='slider_main'>
        <Carousel.Item className='item'>
          <img
            className="d-block w-100"
            src={Slider1}
            alt="First slide"
          />
          <div className='info'>
            <h5 className='  display-2 '>
              Fresh Vegitables<br></br>
              Big discount
            </h5>
            <p>Sign up for daily news</p>
          </div>
        </Carousel.Item>
        
        <Carousel.Item className='item'>
          <img
            className="d-block w-100"
            src={Slider2}
            alt="Second slide"
          />
          <div className='info'>
            <h5 className='  display-2 '>
            Dhamakedar deal <br></br>
             don't miss
            </h5>
            <p>Save upto 30% on each deal</p>
          </div>
        </Carousel.Item>
     
      </Carousel> 
      {
         context.windowwidth>992 && <NewsLetter/>
      }
     
      </div>
      
      </>
  )
}

export default HomeSlider
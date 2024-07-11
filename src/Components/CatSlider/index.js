import React, { useEffect } from 'react'
import './index.css'
import Slider from "react-slick";
import { useState,useContext } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from '../../App';
const CatSlider = (props) => {
   const context=useContext(MyContext);
   const [catdata,setCatData]=useState(props.data);
   const [itemlen,setItemlen]=useState([])
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 10,
        slidesToScroll: 1,
        fade:false,
        arrows:context.windowwidth>992 ? true:false,
        centerMode:context.windowwidth>992 ? true:false,
        autoplay:context.windowwidth>992 ? 2000:false
       
      };
     
      const catArray=[];
      var count=0;
      useEffect(()=>{
               
         {  
           
            catdata.length!==0&&
            catdata.map((item,index)=>{
               item.items.length!==0&&
               item.items.map((item_,index_)=>{
                     count+=item_.products.length;
               })
               catArray.push(count);
               count=0;
               
            })
         }

         const list=catArray.filter((item,index)=>catArray.indexOf(item)===index);
         setItemlen(list);

      },[])

      const [itembg,setitembg]=useState([
         '#fffceb',
         '#ecffec',
         '#feefea',
         '#fff3eb',
         '#fff3ff',
         '#f2fce4',
         '#feefea',
         '#fffceb',
         '#fff3ff',
         '#ecffec',
         'feefea',
         '#f2fce4',
         '#fffceb',
         '#ecffec',
         '#feefea',
         '#fff3eb',
         '#fff3ff',
         '#fffceb',
         '#ecffec',
         '#feefea',
      ]);
  return (

<>
<div className='catSliderSection'>
           <div className='container-fluid'>
            <h2 className='hd'>Other Categories </h2>
           <Slider {...settings} className='cat_slider_main'>

            {
               catdata.length!==0&&
               catdata.map((item,index)=>{
                  return(
                           <div className='items'>
                            <Link to={`/cat/${item.cat_name.toLowerCase()}`} onClick={()=>sessionStorage.setItem('cat',item.cat_name.toLowerCase())}>
                               <div className='info ' style={{backgroundColor:itembg[index],opacity:4}}>
                                   <img src={item.image} alt =" "/>
                                   <h5 className='text-capitalize'>{item.cat_name}</h5>
                                   <p>{itemlen [index]} items</p>
                               </div>
                            </Link>
                            </div>
                         )
                
               })
            }
           
            
            
           
           
            </Slider>
           
           </div>
   </div>
</>
  )
}

export default CatSlider
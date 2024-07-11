// import React, { useState,useEffect } from "react";
// import "./index.css";
// import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
//  import Slider from "@mui/material/Slider";
// import Category1 from "../../assests/images/category-1 (1).svg";
// import Checkbox from '@mui/material/Checkbox';
// import { Button } from "@mui/material";
// import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
// import BannerImg from '../../assests/images/banner2.jpg';
// import { Link, useParams } from "react-router-dom";
// import RangeSlider from 'react-range-slider-input';
// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormControl from '@mui/material/FormControl';
// import FormLabel from '@mui/material/FormLabel';

// import 'react-range-slider-input/dist/style.css';


// const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
// function valuetext(value) {
//   return `${value}°C`;
// }


// const Sidebar = (props) => {
   
 
//   const [sidedata,setSideData]=useState(props.data);
//   const [value, setValue] = useState([20, 60000]);
//   const [value2, setValue2] = useState(0);
//   const [itemlen,setItemlen]=useState([]);
 
//   const [brandFilters, setBrandFilters] = React.useState([]);
//   const [ratingsArr, setRatings] = React.useState([]);
   
//    let {id}=useParams();
   
   
//    var brands = [];
//    var ratings = [];
   
   
//   var catArray=[];
//   var count=0;

//    useEffect(()=>{
               
//     { 
//        props.data.length!==0&&
//        props.data.map((item,index)=>{
//           item.items.length!==0&&
//           item.items.map((item_,index_)=>{
//                 count+=item_.products.length;
//           })
//           catArray.push(count);
//           count=0;
          
//        })
    
//       }
//     const list=catArray.filter((item,index)=>catArray.indexOf(item)===index);
//     setItemlen(list);

//       },[])


//       useEffect(() => {
//         var price = 0;
//         props.currentCatData.length !== 0 &&
//             props.currentCatData.map((item, index) => {
//                 let prodPrice = parseInt(item.price.toString().replace(/,/g, ""));
//                 if (prodPrice > price) {
//                     price = prodPrice
//                 }
//             })


//         setValue2(price)

//         //setValue(price);
//         //filterByPrice(price[0], price[1]);



//     }, [props.currentCatData]);

//     useEffect(() => {   
//           brands=[];
//           props.currentCatData.length !== 0 &&
//           props.currentCatData.map((item) => {
          
//                 brands.push(item.brand);
//                 ratings.push(parseFloat(item.rating))
//            })
        
      
//         const brandList = brands.filter((item, index) => brands.indexOf(item) === index);
//         setBrandFilters(brandList);
//         const ratings_ = ratings.filter((item, index) => ratings.indexOf(item) === index);
//         setRatings(ratings_)
        


//     }, [id]) 

//   useEffect(()=>{
//     props.filterByPrice(value[0],value[1]);
//   },[value]);

    

//   return (
//     <>
//       <div className="sidebar">
//        <div className='card border-0 shadow res-hide'>

//                     <h3>Category</h3>
//                     <div className='catList'>
//                         {
//                             props.data.length !== 0 && props.data.map((item, index) => {
//                                 return (
//                                     <Link to={`/cat/${item.cat_name.toLowerCase()}`}>
//                                         <div className='catItem d-flex align-items-center'>
//                                             <span className='img'><img src={Category1} width={30} /></span>
//                                             <h4 className='mb-0 ml-3 mr-3 text-capitalize'>{item.cat_name}</h4>
//                                             <span className='d-flex align-items-center justify-content-center rounded-circle ml-auto'>
//                                             {itemlen[index]}</span>
//                                         </div>
//                                     </Link>
//                                 )
//                             })

//                         }

//                     </div>
//        </div>

//         <div className="card border-0 shadow">
//           <h3>Price</h3>
          
//                 <RangeSlider value={value} onInput={setValue} min={10} max={60000} />

//           <div className='d-flex pt-2 pb-2 priceRange'>
//                    <span>From: <strong className='text-success'>Rs{value[0]}</strong></span>
//                     <span className='price'>To: <strong className='text-success'>Rs{value[1]}</strong></ span>
//           </div>


//           <div className='filters'>

//             <h5>Brand</h5>

//                 <ul className="mb-0 ">
//                 <RadioGroup
//                     aria-labelledby="demo-radio-buttons-group-label"
//                     defaultValue="female"
//                     name="radio-buttons-group"
//                   >
//                    {
//                                     brandFilters.length !== 0 &&
//                                     brandFilters.map((item, index) => {
//                                         return (
//                                             <li key={index}> <FormControlLabel value={item} control={<Radio  />} label={item} /></li>
//                                         )
//                                     })

//                   }
                    
                    
//                   </RadioGroup>
//               </ul>
//            </div>
//            <div className='filters '>
//            <h5>Filter By Ratings</h5>
//                         <ul>
//                             <RadioGroup
//                                 aria-labelledby="demo-radio-buttons-group-label"
//                                 defaultValue="female"
//                                 name="radio-buttons-group"
//                             >
                                
//                                 {
//                                     ratingsArr.length !== 0 &&
//                                     ratingsArr.map((item, index) => {
//                                         return (
//                                             <li key={index}> <FormControlLabel value={item} control={<Radio  />} label={item} /></li>
//                                         )
//                                     })

//                                 }
//                             </RadioGroup>
//                         </ul>
//            </div>
//             <div className='d-flex'>
//                 <Button className="btn btn-g"><FilterAltOutlinedIcon/>Filter</Button>
//             </div>
//         </div>
//         <img src={BannerImg} className="w-100"/>
      
//       </div>
//     </>
//   );
// };

// export default Sidebar;




import React, { useEffect, useState, } from 'react';
import "./index.css";
import Slider from '@mui/material/Slider';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import { Button } from '@mui/material';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';

import { Link, useParams } from 'react-router-dom';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Category1 from "../../assests/images/category-1 (1).svg";
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
// import { Category } from '@material-ui/icons';
 import BannerImg from '../../assests/images/banner2.jpg';
 import {MyContext} from '../../App'
import { useContext } from 'react';


function valuetext(value) {
    return `${value}°C`;
}
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Sidebar = (props) => {
    const [value, setValue] = useState([100, 60000]);
    const [value2, setValue2] = useState(0);
    const [brandFilters, setBrandFilters] = React.useState([]);
    const [ratingsArr, setRatings] = React.useState([]);
    const [totalLength, setTotalLength] = useState([]);

    const context  = useContext(MyContext);

    let { id } = useParams();


    var brands = [];
    var ratings = [];


    var catLength = 0;
    var lengthArr = [];
    useEffect(() => {
        props.data.length !== 0 &&
        props.data.map((item, index) => {
                item.items.length !== 0 &&
                    item.items.map((item_) => {
                        catLength += item_.products.length
                    })
                lengthArr.push(catLength)
                catLength = 0;
            })

        const list = lengthArr.filter((item, index) => lengthArr.indexOf(item) === index);
        setTotalLength(list)


    }, []);



    useEffect(() => {
        brands = [];
        ratings=[];
        props.currentCatData.length !== 0 &&
            props.currentCatData.map((item) => {
                brands.push(item.brand);
                ratings.push(parseFloat(item.rating))
            })

        const brandList = brands.filter((item, index) => brands.indexOf(item) === index);
        setBrandFilters(brandList);

        const ratings_ = ratings.filter((item, index) => ratings.indexOf(item) === index);
        setRatings(ratings_)

    }, [id])



   
    useEffect(() => {
        var price = 0;
        props.currentCatData.length !== 0 &&
            props.currentCatData.map((item, index) => {
                let prodPrice = parseInt(item.price.toString().replace(/,/g, ""));
                if (prodPrice > price) {
                    price = prodPrice;
                }
            })


        setValue2(price)

        //setValue(price);
        //filterByPrice(price[0], price[1]);



    }, [props.currentCatData]);


    const filterByBrand = (keywo) => {
        props.filterByBrand(keywo)
    }

    const filterByRating = (keywo) => {
        props.filterByRating(parseFloat(keywo))
    }

    useEffect(() => {
        filterByPrice(value[0], value[1]);
    }, [value]);

    const filterByPrice = (minValue, maxValue) => {
        props.filterByPrice(minValue, maxValue)
    }


    return (
        <>
            <div className={`sidebar ${context.isOpenFilters ===true && 'open1'}`}>
                <div className='card border-0 shadow res-hide'>
                    <h3>Category</h3>
                    <div className='catList'>
                        {
                            props.data.length !== 0 && props.data.map((item, index) => {
                                return (
                                    <Link to={`/cat/${item.cat_name.toLowerCase()}`} onClick={()=>sessionStorage.setItem('cat',item.cat_name.toLowerCase())}>
                                        <div className='catItem d-flex align-items-center'>
                                            <span className='img'><img src={Category1} width={30} /></span>
                                            <h4 className='mb-0 ml-3 mr-3 text-capitalize'>{item.cat_name}</h4>
                                            <span className='d-flex align-items-center justify-content-center rounded-circle ml-auto'>
                                            {totalLength[index]}</span>
                                        </div>
                                    </Link>
                                )
                            })

                        }

                    </div>
                </div>


                <div className='card border-0 shadow'>
                    <h3>Fill by price</h3>

                    <RangeSlider value={value} onInput={setValue} min={100} max={60000} step={5} />


                    <div className='d-flex pt-2 pb-2 priceRange'>
                        <span>From: <strong className='text-success'>Rs: {value[0]}</strong></span>
                        <span className='ml-auto to'>To: <strong className='text-success' >Rs: {value[1]}</strong></span>
                    </div>

                 
                    <div className='filters pt-5'>
                        <h5>Filter By Brand</h5>

                        <ul className='mb-0'>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female"
                                name="radio-buttons-group"
                            >
                                {
                                    brandFilters.length !== 0 &&
                                    brandFilters.map((item, index) => {
                                        return (
                                            <li key={index}> <FormControlLabel value={item} control={<Radio onChange={() => filterByBrand(item)} />} label={item} /></li>
                                        )
                                    })

                                }
                            </RadioGroup>

                        </ul>
                    </div>


                    <div className='filters pt-0'>
                        <h5>Filter By Ratings</h5>
                        <ul>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female"
                                name="radio-buttons-group"
                            >
                                {
                                    ratingsArr.length !== 0 &&
                                    ratingsArr.map((item, index) => {
                                        return (
                                            <li key={index}> <FormControlLabel value={item} control={<Radio onChange={() => filterByRating(item)} />} label={item} /></li>
                                        )
                                    })

                                }
                            </RadioGroup>
                        </ul>
                    </div>


                    <div className='d-flex filterWrapper '>
                        <Button className='btn btn-g w-100'  onClick={()=>context.openfilter()} ><FilterAltOutlinedIcon /> Filter</Button>
                    </div>

                </div>



                <img src={BannerImg} className='w-100' />

            </div>
        </>
    )
}

export default Sidebar;
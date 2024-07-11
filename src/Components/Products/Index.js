// import React, { useEffect } from 'react'
// import './index.css'
// import Rating from '@mui/material/Rating';
// import Button from '@mui/material/Button';
// import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
// import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
// import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
// import CompareArrowsOutlinedIcon from '@mui/icons-material/CompareArrowsOutlined';
// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import {MyContext} from '../../App'
// import { useContext } from 'react';

// const Products = (props) => {

//   const context  = useContext(MyContext);

//   const [productdata,setProductData]=useState();
//   const [added,setAdded]=useState(false);
//   useEffect(()=>{
   
//     setProductData(props.item);
    
//   },[props.item])

//    const addtocart=(productdata)=>{
//     setAdded(true);
//     context.addtocart(productdata);
//    }

//   const setProductcat=()=>{
       
//     sessionStorage.setItem('parentCat',productdata.parentCatName);
//     sessionStorage.setItem('subCat',productdata.subCatName);
//   }
 
 
//   return (
//     <div className='productThumb' onClick={setProductcat}>
//       <span className={`badge ${props.tag}`} >{props.tag}</span>
//        {
//         productdata!==undefined&&
//         <>
//             <Link to={`/product/${productdata.id}`}>
//             <div className='imgWrapper'>
//               <div className="p-4 wrapper">
//                  <img src={productdata.catImg+'?im=Resize=(420,420)'} className='w-100' />  
//               </div>
               
//                 <div className='overlay transition'>
//                     <ul className='list list-inline mb-0'>
//                           <li className='list-inline-item'>
                      
//                             <Link className='curso'  tooltip="View"><RemoveRedEyeOutlinedIcon /></Link>
//                           </li>
//                           <li className='list-inline-item'>
                          
//                             <Link className='curso'  tooltip="Add to WishList">< FavoriteBorderOutlinedIcon/></Link>
//                           </li>
//                           <li className='list-inline-item'>
                            
//                             <Link className='curso'  tooltip="Compare"><CompareArrowsOutlinedIcon/></Link>
//                           </li>
//                     </ul>
//                 </div>
//             </div>
//         </Link>
//         <div className='info1'>
//             <span className='catName d-block'>{productdata.brand}</span>
            
//             <h5 className='title'><Link>{productdata.productName.slice(0,50)+'....'}</Link></h5>
//             <Rating name="half-rating-read" value={parseFloat(productdata.rating)} precision={0.5} readOnly />
//             <span className='brandName d-block text-g'> By<Link className='text-danger'> {productdata.brand}</Link></span>
//             <div className='d-flex align-items-center'>
//                 <div className='d-flex align-items-center w-100'>
//                     <span className='price text-g'>Rs {productdata.price}</span>
//                     <span className='oldPrice '>Rs {productdata.oldPrice}</span>
//                 </div>
                
//             </div>
//              <Button className='bg-g  w-100 mt-2' onClick={()=>addtocart(productdata)}><ShoppingCartRoundedIcon />{
//               added===true? 'Added':'Add'
//             }</Button> 
            
//         </div>
//         </>
//        }
        
//     </div>
//   )
// }

// export default Products




import React, { useEffect } from 'react'
import './index.css'
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import CompareArrowsOutlinedIcon from '@mui/icons-material/CompareArrowsOutlined';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {MyContext} from '../../App'
import { useContext } from 'react';

import { addToCart} from '../../redux/features/cartSlice';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
const Products = (props) => {

  const dispatch=useDispatch();
  const context  = useContext(MyContext);

  const [productdata,setProductData]=useState();

  useEffect(()=>{
   
    setProductData(props.item);
    
  },[props.item])

   const send=(e)=>{
      dispatch(addToCart(e));
      toast.success("Item added In Your cart")
   }

  const setProductcat=()=>{
       
    sessionStorage.setItem('parentCat',productdata.parentCatName);
    sessionStorage.setItem('subCat',productdata.subCatName);
  }
 
 
  return (
    <div className='productThumb' onClick={setProductcat}>
      <span className={`badge ${props.tag}`} >{props.tag}</span>
       {
        productdata!==undefined&&
        <>
            <Link to={`/product/${productdata.id}`}>
            <div className='imgWrapper'>
              <div className="p-4 wrapper">
                 <img src={productdata.catImg+'?im=Resize=(420,420)'} className='w-100' />  
              </div>
               
                <div className='overlay transition'>
                    <ul className='list list-inline mb-0'>
                          <li className='list-inline-item'>
                      
                            <Link className='curso'  tooltip="View"><RemoveRedEyeOutlinedIcon /></Link>
                          </li>
                          <li className='list-inline-item'>
                          
                            <Link className='curso'  tooltip="Add to WishList">< FavoriteBorderOutlinedIcon/></Link>
                          </li>
                          <li className='list-inline-item'>
                            
                            <Link className='curso'  tooltip="Compare"><CompareArrowsOutlinedIcon/></Link>
                          </li>
                    </ul>
                </div>
            </div>
        </Link>
        <div className='info1'>
            <span className='catName d-block'>{productdata.brand}</span>
            
            <h5 className='title'><Link>{productdata.productName.slice(0,50)+'....'}</Link></h5>
            <Rating name="half-rating-read" value={parseFloat(productdata.rating)} precision={0.5} readOnly />
            <span className='brandName d-block text-g'> By<Link className='text-danger'> {productdata.brand}</Link></span>
            <div className='d-flex align-items-center'>
                <div className='d-flex align-items-center w-100'>
                    <span className='price text-g'>Rs {productdata.price}</span>
                    <span className='oldPrice '>Rs {productdata.oldPrice}</span>
                </div>
                
            </div>
             <Button className='bg-g  w-100 mt-2' onClick={()=>send(productdata)}><ShoppingCartRoundedIcon />{
              'Add'
            }</Button> 
            
        </div>
        </>
       }
        
    </div>
  )
}

export default Products


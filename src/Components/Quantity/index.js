import React from 'react'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
// import { useState } from 'react';
// import { useEffect } from 'react';
import { addToCart } from '../../redux/features/cartSlice';
import { useDispatch } from 'react-redux';
import {removeToCart} from '../../redux/features/cartSlice'
import {removeOneItem} from '../../redux/features/cartSlice'
const Quantity = (props) => {

  const dispatch=useDispatch();


  const Increment=(e)=>{
    dispatch(addToCart(e));
  }
  const handleDecrement=(e)=>{
    dispatch(removeToCart(e))
}

  const singleDecrement =(e)=>{
    dispatch(removeOneItem(e));
}
    // const [isValue,setIsValue]=useState(1);
    // const [cartItems, setCartItems] = useState([]);
 
   
  //   useEffect(() => {
  //     setCartItems(props.cartItems);
  // }, [props.cartItems])


  // const updateCart=(items)=>{
  //     props.updateCart(items)
  // }

   
  return (
   <>
           <div className="addcartSection ">

              <div className="countSec ">

                   
                     <input type="number" value={props.item.qnty}/>
                     <span onClick={()=>Increment(props.item)}><KeyboardArrowUpOutlinedIcon className="up arrow" /></span> 
                     <span  onClick={props.item.qnty <=1 ? ()=>handleDecrement(props.item.id):()=>singleDecrement(props.item)}><KeyboardArrowDownOutlinedIcon className="down arrow"/></span> 
                       {/* <input type="number" value={isValue}/> */}
                     {/* <span onClick={()=>{
                      setIsValue(isValue+1);
                      const cart_=props.cartItems?.map((cartItem,key)=>{

                        return key===parseInt(props.index)? {...cartItem,quantity:isValue+1}:{...cartItem}

                      });

                      updateCart(cart_);
                      setCartItems(cart_);
                     }} ><KeyboardArrowUpOutlinedIcon className="up arrow" /></span> 
                     <span span onClick={()=>{

                                if(isValue!==1)
                                {
                                  setIsValue(isValue-1);

                                }
                      
                            const cart_=props.cartItems?.map((cartItem,key)=>{

                              return key===parseInt(props.index)? {...cartItem,quantity:cartItem.quantity!==1?isValue-1:cartItem.quantity}:{...cartItem}
      
                            });

                      
                     

                      updateCart(cart_);
                      setCartItems(cart_);
                     }}  ><KeyboardArrowDownOutlinedIcon className="down arrow"/></span>  */}
              </div> 

                                                                    
                                                                
         </div>
   </>
  )
}

export default Quantity
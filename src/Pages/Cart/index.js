// import React, { useEffect } from 'react'
// import { useState } from 'react';
// import { Link } from 'react-router-dom'
// import './index.css'
// import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
// import Rating from '@mui/material/Rating';
// import Product1 from '../../assests/images/Product1.jpg';
// import Quantity from '../../Components/Quantity';
// import { Button } from 'bootstrap-4-react/lib/components';
// import axios from 'axios';
// import { useContext } from 'react';
// import { MyContext } from '../../App';
// import { useNavigate } from 'react-router-dom';
// import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
// const Cart = () => {
//     const [cartItems, setCartItems] = useState([]);
//     const context =useContext(MyContext);
//     const navigate = useNavigate();
//     useEffect(()=>{
//         if(context.isLogin==="true")
//         {
//             getCartData("http://localhost:5000/cartSelect");
//         }
//         else{

//             navigate('/signIn');
//         }
        
//         window.scrollTo(0,0);
//     },[])

//     const getCartData=async(url)=>{
//         try {
//             await axios.get(url).then((response) => {
              
//                 setCartItems(response.data);
              
//             })
//           } catch (error) {
//             console.log(error)
//           }

        
//     }

    
     
    
//      const itemDelete = async(id) => {
       
        
//                 let response= await axios.delete(`http://localhost:5000/cartSelect/${id}`);
                  
//                 if(response!==null)
//                {
//                  getCartData("http://localhost:5000/cartSelect");
//                     context.removeItemsFromCart(id);
//                 }

                     
        
//     }

//     const empty=()=>{
//         let response=null;
//         cartItems.length!==0&&
//         cartItems.map((item)=>{
//          response = axios.delete(`http://localhost:5000/cartSelect/${parseInt(item.id)}`);
//         })
//          if(response!==null)
//          {
//             getCartData("http://localhost:5000/cartSelect");
           

//          }
//          context.emptyCart();
//     }
 
//     const updateCart=(items)=>{

//         setCartItems(items);

//     }
//   return (
//     <>
//     {
//         context.windowwidth >992 &&
//         <div className="breadcrumbWrapper mb-4">
//             <div className="container-fluid">
//                 <ul className="breadcrumb breadcrumb2">
//                 <li>
//                     <Link to="/">Home</Link>
//                 </li>
//                 <li className="text-capitalize">
//                    Shop
//                 </li>
//                 <li className="text-capitalize">
//                     Cart
//                 </li>
                
//                 </ul>
//             </div>
//         </div>

//     }
        

//         <section className='cardSection mb-4'>
//             <div className='container-fluid'>
//                 <div className='row'>
//                     <div className='col-sm-7'>
//                         <div className='d-flex align-items-center w-100'>
//                             <div className='left'>
//                                  <h1 className='hd mb-0'>Your Cart</h1>
//                                  <p>There are <span className='text-g'>{context.cartItems.length}</span> products in your cart</p>
//                             </div>
                             
//                             <span className='clearCart d-flex align-items-center' onClick={()=>empty()}>< DeleteForeverOutlinedIcon/>Clear Cart</span>
//                         </div>

                        
//                         <div className='cartWrapper mt-4'>
//                         <hr className='mb-0 mt-0'/>
//                             <div className="table-responsive">
//                                 <table className='table '>
                                    
//                                         <thead>
                                        
//                                             <tr >
//                                                 <th >Product</th>
//                                                 <th>Unit Price</th>
//                                                 <th>Quantity</th>
//                                                 <th>Subtotal</th>
//                                                 <th>Remove</th>
//                                              </tr>
//                                         </thead>
                                            
//                                          <tbody>  

//                                             {
//                                                 cartItems.length!==0&&
//                                                 cartItems.map((item,index)=>{

//                                                     return(
//                                                             <tr>
//                                                             <td className='pt-2 cartitems'width={"50%"}>
//                                                             <div className='d-flex align-items-center'>
                                                             
//                                                                 <div className='img'>
//                                                                 <Link to={`/product/${item.id}`}>
//                                                                             <img src={item.catImg+'?im=Resize=(100,100)'} className='w-100'/>
//                                                                  </Link>
//                                                                 </div>
                                                             
//                                                                 <div className='info pl-4'>
                                                                                    
//                                                                     <Link to={`/product/${item.id} `}><h4>{item.productName}</h4></Link>
//                                                                     <Rating name="half-rating-read" value={parseFloat(item.rating)} precision={0.5} className='rating' readOnly /> 
//                                                                     <span className='text-dark'>({parseFloat(item.rating)})</span>
//                                                                 </div>
            
//                                                             </div>
//                                                             </td>
            
//                                                             <td width={"20%"}><span>Rs:{parseInt(item.price.split(",").join(""))}</span></td>
//                                                             <td>
                                                                
//                                                             <Quantity item={item} cartItems={cartItems} index={index} updateCart={updateCart}/>
                                                                        
//                                                             </td>
//                                                             <td><span className='text-g'> Rs {parseInt(item.price.split(",").join(""))*parseInt(item.quantity)}</span></td>
//                                                             <td><span className='cursor' onClick={()=>itemDelete(item.id)}>< DeleteForeverOutlinedIcon /></span></td>
//                                                         </tr>
//                                                     )

//                                                 })
//                                             }
                                               
                                                    
//                                         </tbody> 
//                                 </table>
//                             </div>
//                         </div>

//                         <div className='d-flex align-items-center'>
//                             <Link to= "/">
//                                  <Button className="btn-g"><KeyboardBackspaceOutlinedIcon/> Continue Shopping</Button>
//                             </Link>
                            
//                         </div>


//                     </div>


//                     <div className='col-sm-5 side cardright'>

//                          <div className='card shadow p-4 mb-2 '>
//                             <div className='d-flex align-items-center mb-4'>
//                                 <h5 className='mb-0 '>Subtotal</h5>
//                                 <h3 className='mb-0 font-weight-bold'><span className='text-g'>Rs  {

//                                         cartItems.length!==0&&
//                                         cartItems.map(item=>parseInt(item.price.split(",").join(""))*item.quantity).reduce((total,value)=>total+value,0)
//                                     }
                                    
//                                 </span></h3>
//                             </div>
//                             <div className='d-flex align-items-center mb-4'>
//                                 <h5 className='mb-0'>Shipping</h5>
//                                 <h3 className='mb-0 font-weight-bold'><span className='text-danger'>Free</span></h3>
//                             </div>
//                             <div className='d-flex align-items-center mb-4'>
//                                 <h5 className='mb-0  '>Estimate</h5>
//                                 <h3 className='mb-0 font-weight-bold'><span className='text-danger'>India</span></h3>
//                             </div>
//                             <div className='d-flex align-items-center mb-4'>
//                                 <h5 className='mb-0 '>Total</h5>
//                                 <h3 className='mb-0 font-weight-bold'><span className='text-g'>Rs {

//                                     cartItems.length!==0&&
//                                     cartItems.map(item=>parseInt(item.price.split(",").join(""))*item.quantity).reduce((total,value)=>total+value,0)
//                                     }</span></h3>
//                             </div>
                             
//                             <Button className="btn-g">Proceed</Button>
//                          </div>
                         

//                     </div>
//                 </div>
//             </div>
//         </section>

        
//     </>
//   )
// }

// export default Cart


import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import './index.css'
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import Rating from '@mui/material/Rating';
import Product1 from '../../assests/images/Product1.jpg';
import Quantity from '../../Components/Quantity';
import { Button } from 'bootstrap-4-react/lib/components';
import axios from 'axios';
import { useContext } from 'react';
import { MyContext } from '../../App';
import { useNavigate } from 'react-router-dom';
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import { useSelector,useDispatch } from 'react-redux';
import {removeToCart, emptyCart} from '../../redux/features/cartSlice'
import toast from 'react-hot-toast';

const Cart = () => {

    const dispatch=useDispatch();
    const {carts}=useSelector((state)=>state.allCart);
    const [totalPrice,setTotalPrice]=useState(0);
   
    const [cartItems, setCartItems] = useState(carts);
    useEffect(()=>{
        let tp=0;
        cartItems.map((i)=>{
           tp=tp+i.price*i.qnty;
        })

        console.log(tp);
    })
    const context =useContext(MyContext);
    const navigate = useNavigate();
    useEffect(()=>{
        if(context.isLogin==="true")
        {
            //  getCartData("http://localhost:5000/cartSelect");
        }
        else{

            navigate('/signIn');
        }
       
        
        window.scrollTo(0,0);
    },[])

    // const getCartData=async(url)=>{
    //     try {
    //         await axios.get(url).then((response) => {
              
    //             setCartItems(response.data);
              
    //         })
    //       } catch (error) {
    //         console.log(error)
    //       }

        
    // }

    
     
    
    //  const itemDelete = async(id) => {
       
        
    //             let response= await axios.delete(`http://localhost:5000/cartSelect/${id}`);
                  
    //             if(response!==null)
    //            {
    //              getCartData("http://localhost:5000/cartSelect");
    //                 context.removeItemsFromCart(id);
    //             }

                     
        
    // }

    const empty=(e)=>{
       
        dispatch( emptyCart())
        toast.success("Cart is empty")
    }
 
    // const updateCart=(items)=>{

    //     setCartItems(items);

    // }

    const handleDecrement=(e)=>{
        dispatch(removeToCart(e))
        toast.success("Item Remove from Cart")
    }

    const total=()=>{
        let toatlpri=0;
        carts.map((ele,ind)=>{
            toatlpri=toatlpri+ele.price*ele.qnty;
        });
        setTotalPrice(toatlpri);
    }

    useEffect(()=>{
           total();
    },[totalPrice,carts])


  return (
    <>
    {
        context.windowwidth >992 &&
        <div className="breadcrumbWrapper mb-4">
            <div className="container-fluid">
                <ul className="breadcrumb breadcrumb2">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li className="text-capitalize">
                   Shop
                </li>
                <li className="text-capitalize">
                    Cart
                </li>
                
                </ul>
            </div>
        </div>

    }
        

        <section className='cardSection mb-4' >
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-sm-7'>
                        <div className='d-flex align-items-center w-100 head'>
                            <div className='left'>
                                 <h1 className='hd mb-0'>Your Cart</h1>
                                 <p>There are <span className='text-g'>{carts.length}</span> products in your cart</p>
                            </div>
                             
                            <span className='clearCart d-flex align-items-center' onClick={()=>empty()}>< DeleteForeverOutlinedIcon/>Empty Cart</span>
                        </div>

                        
                        <div className='cartWrapper '>
                        <hr className='mb-0 mt-0'/>
                            <div className="table-responsive">
                                <table className='table '>
                                    
                                        <thead>
                                        
                                            <tr >
                                                <th >Product</th>
                                                <th>Price</th>
                                                <th>Quantity</th>
                                                <th>Subtotal</th>
                                                <th>Remove</th>
                                             </tr>
                                        </thead>
                                            
                                         <tbody>  

                                            {
                                                carts.length!==0&&
                                                carts.map((item,index)=>{

                                                    return(
                                                            <tr>
                                                            <td className='pt-2 cartitems'width={"50%"}>
                                                            <div className='d-flex align-items-center'>
                                                             
                                                                <div className='img'>
                                                                <Link to={`/product/${item.id}`}>
                                                                            <img src={item.catImg+'?im=Resize=(100,100)'} className='w-100'/>
                                                                 </Link>
                                                                </div>
                                                             
                                                                <div className='info pl-4'>
                                                                                    
                                                                    <Link to={`/product/${item.id} `}><h4>{item.productName}</h4></Link>
                                                                    <Rating name="half-rating-read" value={parseFloat(item.rating)} precision={0.5} className='rating' readOnly /> 
                                                                    <span className='text-dark'>({parseFloat(item.rating)})</span>
                                                                </div>
            
                                                            </div>
                                                            </td>
            
                                                            <td width={"10%"}><span>Rs:{parseInt(item.price.split(",").join(""))}</span></td>
                                                            <td>
                                                                
                                                            {/* <Quantity item={item} cartItems={cartItems} index={index} updateCart={updateCart} quantity={item.qnty}/> */}
                                                            <Quantity item={item}  index={index} />   
                                                            
                                                            </td>
                                                            <td><span className='text-g'> Rs {parseInt(item.price.split(",").join(""))*parseInt(item.qnty)}</span></td>
                                                            <td><div className='delete'><span className='cursor' onClick={()=>handleDecrement(item.id)}>< DeleteForeverOutlinedIcon /></span></div></td>
                                                        </tr>
                                                    )

                                                })
                                            }
                                               
                                                    
                                        </tbody> 
                                </table>
                            </div>
                        </div>

                        <div className='d-flex align-items-center'>
                            <Link to= "/">
                                 <Button className="btn-g"><KeyboardBackspaceOutlinedIcon/> Continue Shopping</Button>
                            </Link>
                            
                        </div>


                    </div>


                    <div className='col-sm-5 side cardright'>

                         <div className='card shadow p-4 mb-2 '>
                            <div className='d-flex align-items-center mb-4'>
                                <h5 className='mb-0 '>Subtotal</h5>
                                <h3 className='mb-0 font-weight-bold'><span className='text-g'>Rs {totalPrice}</span></h3>
                            </div>
                            <div className='d-flex align-items-center mb-4'>
                                <h5 className='mb-0'>Shipping</h5>
                                <h3 className='mb-0 font-weight-bold'><span className='text-danger'>Free</span></h3>
                            </div>
                            <div className='d-flex align-items-center mb-4'>
                                <h5 className='mb-0  '>Estimate</h5>
                                <h3 className='mb-0 font-weight-bold'><span className='text-danger'>India</span></h3>
                            </div>
                            <div className='d-flex align-items-center mb-4'>
                                <h5 className='mb-0 '>Total</h5>
                                <h3 className='mb-0 font-weight-bold'><span className='text-g'>Rs {totalPrice}</span></h3>
                            </div>
                             
                            <Button className="btn-g">Proceed</Button>
                         </div>
                         

                    </div>
                </div>
            </div>
        </section>

        
    </>
  )
}

export default Cart;
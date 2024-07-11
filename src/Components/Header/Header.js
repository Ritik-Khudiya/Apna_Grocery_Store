import React, { useContext, useRef } from 'react'
 import './Header1.css';
  import logo1 from '../../assests/images/logo1.png' 
  import IconCompare from '../../assests/images/icon-compare.svg'
  import IconCart from '../../assests/images/icon-cart.svg'
  import IconHeart from '../../assests/images/icon-heart.svg'
  import IconUser from '../../assests/images/icon-user.svg'

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Select from '../SlectDrop/Select';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import Button from '@mui/material/Button';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';

import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import Nav from './Nav/Nav';
import { Link } from 'react-router-dom';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import { MyContext } from '../../App';
import { useSelector } from 'react-redux';

const Header = (props) => {

  const {carts}=useSelector((state)=>state.allCart);
     
 
  const [isOpenDrop,setisOpenDrop]=useState(false)
  const [isOpenAccDrop,setisOpenAccDrop]=useState(false)
  const [windowwidth,setwindowwidth]=useState(window.innerWidth);
  const [openSearch,setOpenSearch]=useState(false);
  const Inputsearch=useRef();
  const context=useContext(MyContext);
  const [isnavopen,setIsNavOpen]=useState(false);
  
  const [categories,setcategories]=useState([

   
    'Wines and Drinks',
    'Clothing and beauty',
    'Fresh Seafood',
    'Pet Foods and Toy',
    'Milks and Dairies',
    'Fast Food',
    'Baking materials',
    'vegetables',
    'Fresh Fruit',
    'Bread and Juice'
  ]);

   useEffect(()=>{
    getCountry('https://countriesnow.space/api/v0.1/countries/');
   },[]);
   const countryList=[];
  const getCountry=async(url)=>{
              try {
                       await axios.get(url).then((res)=>{
                        if(res!==null)
                        {
                          res.data.data.map((item,index)=>{
                            countryList.push(item.country);
                          })
                          
                        }
                       })
              } catch (error) {
                  console.log(error);
              }
  }

  const opensearch=()=>{
         setOpenSearch(true);
         Inputsearch.current.focus();
  }
  const closesearch=()=>{
    setOpenSearch(false);
    Inputsearch.current.blur();
    Inputsearch.current.value="";

  }

  const signOut1=()=>{
               
    context.signOut();
    window.scrollTo(0,0);
  }

  const open=()=>{
      setIsNavOpen(true);
  }

  const closenav=()=>{
    setIsNavOpen(false);
    setisOpenAccDrop(false);
  }

  return (
    <>
    <div className='headerWrapper'>
    <header>
      <div className='container-fluid'>
        <div className='row'>
           <div className='col-sm-2 part1 d-flex align-items-center'>
              <Link to="/"><img src={logo1} alt =" " className='w-100'/></Link>
              {
                windowwidth<992&&
                <div className='search d-flex align-items-center'>

                       
                      
                      <div className='navbarToggle m' onClick={opensearch}>< SearchIcon/></div>
                      
                      <ul className='list list-inline mb-0 headerTabs'>
              
                        <li className='list-inline-item cart'>
                          <span>
                            <Link to='/cart'>
                                  <img src={IconCart } width="48%"/>
                                  <span className='badge bg-danger'>
                                    { context.isLogin==="true"?carts.length:0}
                                  
                                    </span>
                                  
                            </Link>
                          </span>
                        </li>
                    
                     </ul>

                      <div className='navbarToggle m' onClick={open}><MenuIcon/></div>
                    {
                       
                       context.isLogin === 'true' &&
                       <div className='myAccDrop' onClick={()=>{setisOpenAccDrop(!isOpenAccDrop)}}><PersonOutlineOutlinedIcon/></div>
                    }
                       
                      
                        
                </div>
              }
               
           </div>
           <div className='col-sm-5 part2'>
           <div className={`headersearch d-flex align-items-center ${openSearch===true ? 'open':''}`}>

               
                     {
                         windowwidth<992&&
                         <div className='countryWrapper m '>
               
                          <Select data={countryList} placeholder={'Your Location'} icon={<LocationOnOutlinedIcon style={{opacity:'0.5'}}/>}/> 
                       </div>

                  }
                {
                  windowwidth<992&&
                  <div className='closesearch' onClick={closesearch}> < ArrowBackIosNewOutlinedIcon/></div>
                }
                  <Select data={categories} placeholder={'All Categories'} icon={false}/>
                
                 <div className='search '>
                      <input type="text" placeholder='Search for items...' ref={Inputsearch}/>
                      <SearchIcon className='searchIcon curso' />
                 </div>
            </div>
         </div>
         <div className='col-sm-5 d-flex align-items-center part3'>
           <div className='w-100 d-flex align-items-center'>
           <div className='countryWrapper'>
               
               <Select data={countryList} placeholder={'Your Location'} icon={<LocationOnOutlinedIcon style={{opacity:'0.5'}}/>}/> 
           </div> 
           <ClickAwayListener onClickAway={()=>setisOpenDrop(false)}>
            
           <ul className='list list-inline mb-0 headerTabs'>
              <li className='list-inline-item'>
                <span>
                  <img src={IconCompare } alt =" "/>
                  <span className='badge bg-danger'>2</span>
                  Compare
                </span>
              </li>
              <li className='list-inline-item'>
                <span>
                  <Link to='/cart'>
                        <img src={IconCart }alt =" "/>
                         <span className='badge bg-danger'>{carts.length}</span> 
                        {/* <span className='badge bg-danger'>{context.cartItems.length}</span> */}
                        <span className='text-dark'>Cart</span>
                  </Link>
                </span>
              </li>
              <li className='list-inline-item'>
                <span>
                  <img src={IconHeart } alt =" "/>
                  <span className='badge bg-danger'>4</span>
                  Wishlist
                </span>
              </li>

              {

                 context.isLogin ==="true" ? <li className='list-inline-item'>
              
                 <span onClick={()=>{setisOpenDrop(!isOpenDrop)}}>
                   <img src={IconUser } alt =" "/>
                  
                      Account
                 </span>
                 {
                   isOpenDrop===true&&
                   <ul className='dropMenu'>
                   <li><Button>< PersonOutlineOutlinedIcon/>My Account</Button></li>
                   <li><Button><LocationOnOutlinedIcon />Order Tracking</Button></li>
                   <li><Button><FavoriteOutlinedIcon/>My Wishlist</Button></li>
                   <li><Button>< SettingsSuggestOutlinedIcon/>Setting</Button></li>
                   <li><Link to="/signIn"><Button onClick={signOut1}><LogoutOutlinedIcon />Sign Out</Button></Link></li>
                   </ul>
                 }
               
               </li> 

               :
               <li className='list-inline-item'>

               <Link to="/signIn"><Button className='btn-g text-capitalize sign'>Sign In</Button></Link>

               
               </li>

              }
            
             

               
             </ul>
             </ClickAwayListener>
            </div>    
         </div>
             
        </div>

      </div>
 
    </header>
     <Nav data={props.data} isnavopen={isnavopen} closenav={closenav}/>
    </div>
      
     <div className='afterHeader'></div>
    
       
    
              {
                   isOpenAccDrop!==false&&
                   <> 
                   <div className='navbarOverlay' onClick={closenav}></div>
                   <ul className='dropMenu dropdownAcc'>
                   <li><Button onClick={closenav}><Link to="">< PersonOutlineOutlinedIcon/>My Account</Link></Button></li>
                   <li><Button onClick={closenav}><Link to=""><img src={IconCompare}/>Compare</Link></Button></li>
                   <li><Button onClick={closenav}><Link to="/cart"><img src={IconCart} />Cart</Link></Button></li>
                   <li><Button onClick={closenav}><Link to=""><LocationOnOutlinedIcon />Order Tracking</Link></Button></li>
                   <li><Button onClick={closenav}><Link to=""><FavoriteOutlinedIcon/>My Wishlist</Link></Button></li>
                   <li><Button onClick={closenav}><Link to="">< SettingsSuggestOutlinedIcon/>Setting</Link></Button></li>
                   <li><Button onClick={signOut1}><Link to="/signIn"><LogoutOutlinedIcon />Sign Out</Link></Button></li>
                   </ul>

                   </>
                 }

    </>
  )
}

export default Header
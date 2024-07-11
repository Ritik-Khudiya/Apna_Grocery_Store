import React, { useEffect, useState,useContext } from 'react'
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
import Fruits from "../../../assests/images/fruits.jpg"
import GridViewIcon from '@mui/icons-material/GridView';
import { Link } from 'react-router-dom';
import { MyContext } from '../../../App';

import './Nav1.css';
const Nav = (props) => {

  const [navData,setNavData]=useState([]);
  const [megafix,setMegaFix]=useState(0);
  const [isnavopen,setIsNavOpen]=useState(false);
  const [windowwidth,setwindowwidth]=useState(window.innerWidth);
  const context=useContext(MyContext);
  useEffect(()=>{
     setNavData(props.data);
  },[])
 const mega=()=>{ 
      setMegaFix(1) 
 }
 const mega2=()=>{
  
    
  setMegaFix(0) 
}

 useEffect(()=>{

   setIsNavOpen(props.isnavopen);

 },[props.isnavopen])

 const closenav=()=>{
    props.closenav();
 }
  
  return (
    <>
    {
        isnavopen===true && <div className='navbarOverlay' onClick={closenav}></div>
    }
     <div className=' nav d-flex align-items-center'>
        <div className='container-fluid'>
            <div className='row position-relative'>
                <div className='col-sm-2 part1 '>
                <Button className='bg-g text-white catTab res-hide'><GridViewIcon/>&nbsp; Browse All categories <KeyboardArrowDownIcon/></Button>
                </div>
                <div className='col-sm-8 part2 position-static'>
                     <nav className={isnavopen===true ? 'open':''}>
                              <ul className='list list-inline mb-0'>
                                
                                <li className='list-inline-item'>
                                  <Button><Link to ='/' onClick={closenav}>Home</Link></Button>
                                </li>
                                    {
                                        navData.length !== 0 &&
                                        navData.map((item, index) => {        
                                          return(
                                              <li className='list-inline-item' key={index}>
                                                     <Button onClick={closenav}><Link to={`/cat/${item.cat_name.toLowerCase()}`} onClick={()=>sessionStorage.setItem('cat',item.cat_name.toLowerCase())}>{item.cat_name}<KeyboardArrowDownIcon/></Link></Button>
                                                      {
                                                         item.items.length !==0 &&
                                                         <div className='dropdown_menu'>
                                                           <ul>
                                                               {
                                                                   item.items.map((item_,index_)=>{
                                                                            return(
                                                                              <li key={index_}>
                                                                                <Button onClick={closenav}>
                                                                                   <Link to={`/cat/${item.cat_name.toLowerCase()}/${item_.cat_name.replace(/\s/g,'-'.toLowerCase())}`} onClick={()=>sessionStorage.setItem('cat',item.cat_name)}>
                                                                                     {item_.cat_name}
                                                                                   </Link>
                                                                                </Button>
                                                                              </li>
                                                                            )
                                                                   })
                                                               }
                                                           </ul>
                                                         </div>
                                                         
                                                     } 
                                              </li>
                                          )

                                        })
                                    }


                                <li className='list-inline-item'>
                                  <Button onClick={closenav}><Link>About</Link></Button>
                                </li>
                            
                                <li className='list-inline-item position-static '>
                                  <Button><Link onMouseEnter={mega2}>Mega menu<KeyboardArrowDownIcon/></Link></Button>
                                   <div className={` megaMenu dropdown_menu w-100 row ${megafix===1? 'deactive':' '}`}>
                                            <div className='row'>

                                                   {
                                                       props.data.length !==0 &&
                                                       props.data.map((item,index)=>{

                                                        return(
                                                          <div className='col'>
                                                            <a href={`/cat/${item.cat_name.toLowerCase()}`}><h4 className='text-g' onClick={mega} >{item.cat_name[0].toUpperCase()+item.cat_name.slice(1)}</h4></a>
                                                            {
                                                               item.items.length!==0 &&
                                                               <ul className="mt-3">
                                                                   {
                                                                       item.items.map((item_,index_)=>{
                                                                        return(
                                                                                  <li className='text-capitalize' onClick={mega}>
                                                                                    <Link to={`/cat/${item.cat_name.toLowerCase()}/${item_.cat_name.replace(/\s/g,'-').toLowerCase()}`} onClick={closenav}>{item_.cat_name}</Link></li>
                                                                          )
                                                                       })
                                                                   }
                                                               </ul>
                                                            }
                                                          </div>
                                                        )

                                                       })
                                                   }

                                                  <div className='col'>
                                                      <img src={Fruits} className='w-100' alt =" "/>
                                                  </div> 
                                            </div>
                                           
                                  </div>
                                </li>
                                <li className='list-inline-item'>
                                  <Button><Link onClick={closenav}>Blog</Link></Button>
                                </li>
                                <li className='list-inline-item'>
                                  <Button>
                                    <Link onClick={closenav}>Pages<KeyboardArrowDownIcon/></Link>
                                     </Button>
                                     <div className='dropdown_menu'>
                                      <ul>
                                       
                                        <li><Button><Link to="/footer">Contact</Link></Button></li>
                                        <li><Button><Link to="/">My Account</Link></Button></li>
                                        <li><Button><Link to="/signIn">Login</Link></Button></li>
                                       
                                        <li><Button><Link to="/signUp">Register</Link></Button></li>
                                       
                                        <li><Button><Link to="/about">404 Page</Link></Button></li>
                                      
                                      </ul>
                                     </div>
                                </li>
                                <li className='list-inline-item'>
                                  <Button><Link onClick={closenav}>Content</Link></Button>
                                </li>
                                {
                                  windowwidth<992&&
                                  <>
                                  {
                                     context.isLogin!=='true' &&
                                     <div className='login'>
                                    <br />
                                    <Link to="/signIn">
                                       <Button className='btn-g w-100 ' onClick={closenav}>Sign In</Button>
                                    </Link>
                                     
                                     </div>
                                  }
                                  
                                  </>
                                }
                              </ul>
                     </nav>
                </div>
                <div className='col-sm-2 part3 d-flex align-items-center '>
                    <div className='phNo d-flex align-items-center '>
                      <span><HeadphonesOutlinedIcon/></span>
                      <div className='info ml-3'>
                         <h1 className='mb-0 text-g'>93500-11502</h1>
                         {/* <p className='mb-0 support'>24/7 Support Center</p> */}
                      </div>
                    </div>
                </div>
            </div>
        </div>
     </div>
  </>

  )
}

export default Nav





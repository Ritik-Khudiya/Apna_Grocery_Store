import React, { useState } from 'react'
import './index.css'
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import Button from '@mui/material/Button';
import {app} from '../../firebase';
import { initializeApp } from "firebase/app";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const auth = getAuth(app);
const SignUp = () => {

  const [showpass,setShowPass]=useState(false);
  const [showpass1,setShowPass1]=useState(false);
  const [showloader,setShowloader]=useState(false);
  const [formFields,setFormFields]=useState({
       
    email:'',
    password:'',
    confirmPassword:''
  })
  
  const signUp=()=>{
         
           setShowloader(true);
          createUserWithEmailAndPassword(auth, formFields.email, formFields.password)
            .then((userCredential) => {
              // Signed up 
              const user = userCredential.user;
               setShowloader(false);
              setFormFields({
                email:'',
                password:'',
                confirmPassword:''
              })
              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              // ..
            });
  }
  
  const setform=(e)=>{

    const name=e.target.name;
    const value=e.target.value;

    setFormFields(()=>({
      ...formFields,
      [name]:value,


    }))
    

  }

  return (
    <>
          
          <section className='signUp  mb-5'>
            
               <div class="breadcrumbWrapper res-hide">
                    <div class="container-fluid">
                         <ul class="breadcrumb breadcrumb2">
                             <li><Link to ="/">Home</Link></li>
                             <li>SignUp</li>
                             
                          </ul>
                      </div>
                </div>


                <div className='loginWrapper mt-0'>
                  <div className='card shadow pt-3'>

                  <Backdrop
                          sx={{ color: '#000', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                          open={showloader}
                          className='formLoder'
                        >
                          <CircularProgress color="inherit" />
                  </Backdrop>

                    <h3>Sign Up</h3>
                    <form  className='mt-4'>
                      <div className='form-group mb-4 w-100'>
                          <TextField id="email" name="email" label="Email" type='email' className='w-100 outline' onChange={setform} value={formFields.email}/>
                      </div>
                      <div className='form-group mb-3 w-100 '>
                        <div className='position-relative'>
                          <TextField id="password" name="password" label="Password" type={showpass===false?'password':'text'} className='w-100 outline' onChange={setform} value={formFields.password} placeholder='6 words password' />
                          <Link className="icon" onClick={()=>setShowPass(!showpass)}>
                          {
                              showpass===false ? <VisibilityOffOutlinedIcon />:<VisibilityOutlinedIcon/>
                          }

                          </Link>
                        </div>
                      </div>
                      <div className='form-group mb-3 w-100 '>
                        <div className='position-relative'>
                          <TextField id="confirm_password" name="confirmPassword" label="Confirm Password" type={showpass1===false?'password':'text'} className='w-100 outline' onChange={setform} value={formFields.confirmPassword} placeholder='6 words password'/>
                          <Link className="icon" onClick={()=>setShowPass1(!showpass1)}>
                          {
                              showpass1===false ? <VisibilityOffOutlinedIcon />:<VisibilityOutlinedIcon/>
                          }

                          </Link>
                        </div>
                      </div>


                      <div className='form-group mb-3 w-100 mt-3'>
                        <Button className="btn-g w-100" onClick={signUp}> Sign Up</Button>

                      </div>
                      <p className='text-center'>Already have an account <Link to="/signIn"><b>Sign In</b></Link></p>
                      
                    </form>

                  </div>
                </div>
            
          </section>
           
    </>
  )
}

export default SignUp;
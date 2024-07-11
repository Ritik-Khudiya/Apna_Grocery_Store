import React, { useState } from 'react'
import './index.css'
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import Button from '@mui/material/Button';
import google from '../../assests/images/google.png'
import { initializeApp } from "firebase/app";
import {app} from '../../firebase';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup  } from "firebase/auth";
import { useContext } from 'react';
import { MyContext } from '../../App';
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const SignIn = () => {

  const [showpass,setShowPass]=useState(false);
  const [showloader,setShowloader]=useState(false);
  const [formFields,setFormFields]=useState({
       
    email:'',
    password:'',
    confirmPassword:''
  })

  const context=useContext(MyContext);

  const navigate = useNavigate();
  const setform=(e)=>{

    const name=e.target.name;
    const value=e.target.value;

    setFormFields(()=>({
      ...formFields,
      [name]:value,


    }))
    

  }

  const signIn=()=>{
    setShowloader(true);
    signInWithEmailAndPassword(auth, formFields.email, formFields.password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    setShowloader(false);
    setFormFields({
      email:'',
      password:'',
      confirmPassword:''
    })  

    localStorage.setItem('isLogin',true);
    context.signIn();

    navigate('/');
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

  }
  
  const googleSignIn=()=>{
    setShowloader(true);
          const auth = getAuth();
        signInWithPopup(auth, googleProvider)
        .then((result) => {
          
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
        
          const user = result.user;
          setShowloader(false); 
      
          localStorage.setItem('isLogin',true);
          context.signIn();
          navigate('/');
          
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });


        window.scrollTo(0,0);

  }

  return (
    <>
          
          <section className='signIn  mb-5 '>
            
               <div class="breadcrumbWrapper res-hide">
                    <div class="container-fluid">
                         <ul class="breadcrumb breadcrumb2">
                             <li><Link to ="/">Home</Link></li>
                             <li>SignIn</li>
                             
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
                    <h3>Sign In</h3>
                    <form  className='mt-4'>
                      <div className='form-group mb-4 w-100'>
                          <TextField id="email" name="email" label="Email" type='email' className='w-100 outline' onChange={setform} value={formFields.email}/>
                      </div>
                      <div className='form-group mb-3 w-100 '>
                        <div className='position-relative'>
                          <TextField id="password" name="password" label="Password" type={showpass===false?'password':'text'} className='w-100 outline' onChange={setform} value={formFields.password} placeholder='6 words password'/>
                          <Link className="icon" onClick={()=>setShowPass(!showpass)}>
                          {
                              showpass===false ? <VisibilityOffOutlinedIcon />:<VisibilityOutlinedIcon/>
                          }

                          </Link>
                        </div>


                      </div>

                      <div className='form-group mb-3 w-100 mt-3'>
                        <Button className="btn-g w-100" onClick={signIn}> Sign In</Button>

                      </div>
                      <div className='form-group mb-3 w-100 mt-3 signInOr'>
                        <p className='text-center'> OR</p>
                        <Button className='w-100' variant='outlined' onClick={googleSignIn}><img src={google}  />Sign In with Google</Button>
                        
                      </div>

                     <p className='text-center'>Not have an account <Link to="/signUp" ><b>Sign Up</b></Link></p>

                    </form>

                  </div>
                </div>
            
          </section>
           
    </>
  )
}

export default SignIn;
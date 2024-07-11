import React from 'react'
import './index.css'
import Notfound from '../../assests/images/notfound.webp'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
const NotFound = () => {
  return (
       <section className='notfound'>
        <div className='container-fluid'>
            <div className='box'>
                 <img src={Notfound}/>
                 <br />
                 <h2>Page Not Found</h2>
                 <p>The page you clicked may be broken or may have been removed</p>
                 <br />
                 <div className='d-flex'>
                    <Button className='btn-g'><Link to="/">Back to Home</Link></Button>
                 </div>
                
            </div>
        </div>
       </section>
  )
}

export default NotFound
import React from 'react'
import './index.css'
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
const newsLetter = () => {
  return (
      <div className='newsLetterBanner'>
        <SendIcon/>
        <input type="text" placeholder='Email address'/>
        <Button className='bg-g'>Subscribe</Button>
      </div>
  )
}

export default newsLetter
import React from 'react'
import { Button } from '../ui/button'
import './Header.css';
function Header() {
  return (
    <div>
    <div className=' header-container p-3 shadow-sm flex justify-between items-center px-5 '>
      <img src='/logo.svg' alt='Logo' className='logo'/>
      <div className='button-container'>
        <Button>Sign in</Button>
      </div>
    
    </div>
    <hr className='header-separator'/>
    </div>

  )
}

export default Header

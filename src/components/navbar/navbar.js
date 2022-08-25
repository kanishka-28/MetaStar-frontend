import React from 'react'
import metaLogo from "../../assets/images/metaLogo.png"

const Navbar = () => {
  return (
    <div className='text-gray-400 w-full flex justify-center'>
        <div className='flex items-center w-min gap-4 md:gap-10 mr-20'>
            <p>Home</p>
            <p>Services</p>
            <img src={metaLogo} alt='logo'/>
            <p>About</p>
            <p>Contact</p>
        </div>
    </div>
  )
}

export default Navbar
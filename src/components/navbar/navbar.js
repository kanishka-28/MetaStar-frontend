import React from 'react'
import metaLogo from "../../assets/images/metaLogo.png"

const Navbar = () => {
  return (
    <>
    <div className=' flex  text-gray-400 w-full md:hidden justify-center'>
        <div className=' flex items-center justify-between  '>
           
            <img src={metaLogo} width={80} alt='logo'/>
            
        </div>
    </div>
    <div className=' hidden  text-gray-400 w-full md:flex justify-center'>
        <div className=' flex items-center w-min gap-4 md:gap-10 mr-20'>
            <p>Home</p>
            <p>Services</p>
            <img src={metaLogo} alt='logo'/>
            <p>About</p>
            <p>Contact</p>
        </div>
    </div>
    </>
  )
}

export default Navbar
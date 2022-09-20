import React, { useState } from 'react'
import metaLogo from "../../assets/images/metaLogo.png"
import { CgLogOff } from 'react-icons/cg'

const Navbar = () => {

  const [showText, setshowText] = useState(false)

  return (
    <>
      {/* <div className='text-gray-400 w-full flex items-center justify-center'>
        <div className='w-max flex items-center w-min gap-4 md:gap-10 mr-10'>
          <p>Home</p>
          <p>Services</p>
          <img src={metaLogo} alt='logo' />
          <p>About</p>
          <p>Contact</p>
        </div>
        <div>
          <div className={showText ? 'bg-white font-semibold text-sm px-1 absolute top-4' : 'hidden'}>Logout</div>
          <CgLogOff onMouseOver={() => setshowText(true)} onMouseOut={() => setshowText(false)} size={'1.5rem'} color='white' className='cursor-pointer ' />
        </div>
      </div> */}
      <div className=' flex  text-gray-400 w-full md:hidden justify-center'>
        <div className=' flex items-center justify-between  '>
          <img src={metaLogo} width={80} alt='logo' />
        </div>
      </div>
      <div className=' hidden  text-gray-400 w-full md:flex justify-center'>
        <div className=' flex items-center w-min gap-4 md:gap-10 mr-20'>
          <p>Home</p>
          <p>Services</p>
          <img src={metaLogo} alt='logo' />
          <p>About</p>
          <p>Contact</p>
        </div>
      </div>
    </>
  )
}

export default Navbar
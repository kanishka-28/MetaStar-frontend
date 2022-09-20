import React from 'react'
import Navbar from '../components/navbar/navbar'

const PlaneLayout = (props) => {
    return (
        <div className='min-h-screen bg-black'>
            <Navbar />
            {/* <div className='px-2 md:px-20'> */}
            <div className='sm:px-20'>
                {props.children}
            </div>
            <br />
        </div>
    )
}

export default PlaneLayout
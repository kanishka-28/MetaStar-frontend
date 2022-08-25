import React from 'react'
import Navbar from '../components/navbar/navbar'

const HomeLayout = (props) => {
    return (
        <div className='min-h-screen bg-black'>
            <Navbar />
            <div className='px-20'>
                {props.children}
            </div>
            <br />
        </div>
    )
}

export default HomeLayout

import React from 'react'
import Navbar from '../components/navbar/navbar'

const HomeLayout = (props) => {
    return (
        <div className='h-screen bg-black'>
            <Navbar/>
            {props.children}
        </div>
    )
}

export default HomeLayout

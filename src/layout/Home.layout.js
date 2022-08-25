import React from 'react'
import Navbar from '../components/navbar/navbar'

const HomeLayout = (props) => {
    return (
        <div className='min-h-screen bg-black'>
            <Navbar/>
            {props.children}
            <br/>
        </div>
    )
}

export default HomeLayout

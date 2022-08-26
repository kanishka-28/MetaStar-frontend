import React from 'react'
import Footer from '../components/footer/footer'
import Navbar from '../components/navbar/navbar'

const HomeLayout = (props) => {
    return (
        <div className='min-h-screen flex flex-col justify-between bg-black'>
            <Navbar />
            <div className=''>
                {props.children}
            </div>
            <br />
            <Footer />
        </div>
    )
}

export default HomeLayout

import React from 'react'
import { Link } from 'react-router-dom'

const PlaneLayout = (props) => {
    return (
        <div className='h-screen sm:flex'>
            <div className='bg-black w-full'>
                {props.children}
            </div>
        </div>
    )
}

export default PlaneLayout
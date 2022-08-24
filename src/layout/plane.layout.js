import React from 'react'
import { Link } from 'react-router-dom'
import quarterCircle from "../assets/images/Exclude.png"
import logoyaap from "../assets/images/logoyaap.png"
import yellowCircle from "../assets/images/yellowCircle.svg"
import semiCircle from "../assets/images/semicircle.svg"


const PlaneLayout = (props) => {
    return (
        <div className='h-screen sm:flex gap-64'>
            <div className='bg-black w-full'>
                {props.children}
            </div>
        </div>
    )
}

export default PlaneLayout
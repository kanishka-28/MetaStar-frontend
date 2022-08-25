import React from 'react'
import { Link } from 'react-router-dom'
import HomeLayout from '../../layout/Home.layout'

const Home = () => {
    return (
        <HomeLayout>
            <div className='flex flex-col items-center justify-evenly h-3/4'>
                <div className='text-white font-semibold text-4xl w-1/2 md:px-12 text-center'>
                    Kickstart Your Journey Into the world of NFTs & Concerts!
                </div>
                <div>
                    <Link to={'/signup'}>
                        <button className='border border-b-4 border-t-2 border-gray-300 text-gray-300 bg-black px-6 ml-10 mb-2 py-1 text-center'>GET STARTED</button>
                    </Link>
                    <p className='text-gray-600'>Already on our platform? <span className='text-gray-300'><Link to={'/login'}>Log In</Link></span></p>
                </div>
            </div>
        </HomeLayout>
    )
}

export default Home
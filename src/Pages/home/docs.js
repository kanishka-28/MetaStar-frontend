import React from 'react'
import { Link } from 'react-router-dom'
import HomeLayout from '../../layout/Home.layout'
import arrow from '../../assets/images/downArrow.png';
import NFTCarousel from '../../components/carousel/NFTCarousel';
import NFT from '../../components/docs/NFT';
import AboutUs from '../../components/docs/aboutUs';
import Permaweb from '../../components/carousel/permaweb';

const Docs = () => {
    return (
        <HomeLayout>
            <div className='flex flex-col items-center justify-evenly'>
                <div className='text-white font-semibold text-4xl md:w-3/5 md:px-12 text-center mt-10 md:mt-16'>
                    Kickstart Your Journey Into the world of NFTs & Concerts!
                </div>
                <div className='mt-20 flex flex-col items-center'>
                    <Link to={'/'}>
                        <button className='border border-b-4 border-t-2 border-gray-300 text-gray-300 bg-black px-6 mb-8 py-1 text-center'>Connect Wallet</button>
                    </Link>
                    <img src={arrow} alt="down" />
                    <div className='mt-10 text-white text-4xl text-center '>
                        Enter the new age of digital
                    </div>
                </div>
            </div>
            <div className='mt-20 mx-4 md:mx-28'>
                <NFTCarousel />
            </div>
            <NFT />
            <AboutUs />
            <div className='mt-20 mx-4 md:mx-28'>
                <Permaweb />
            </div>
        </HomeLayout>
    )
}

export default Docs;
import React from 'react'
import { BiLogOut } from 'react-icons/bi';
import { IoSettingsOutline } from 'react-icons/io5';
import { BsArrowLeft } from 'react-icons/bs';
import PlaneLayout from '../../../layout/plane.layout';
import SideAccordion from '../../../components/accordion/sideAccordion';
import NFTCarousel from '../../../components/carousel/NFTCarousel';

const MarketPlace2 = () => {
    return (
        <PlaneLayout>
            <div>
                <div className='w-full flex flex-wrap justify-between items-center mb-4 mt-10'>
                    <div className='text-white text-xl flex items-center gap-2'>
                        <BsArrowLeft size={'1.5rem'} className='cursor-pointer' />
                        <span className='text-gray-400 '>Dashboard / </span><p>MarketPlace</p>
                    </div>
                    <div className='text-gray-500 flex items-center gap-6'>
                        <IoSettingsOutline size={'1.5rem'} className='cursor-pointer' />
                        <BiLogOut size={'1.5rem'} className='cursor-pointer' /></div>
                </div>
                <hr className='class="border border-gray-700' />
                <br />
                <div className='flex gap-4 text-gray-400'>
                    <p className='cursor-pointer '>NFT's</p>
                    <p className='cursor-pointer '>Collections</p>
                    <p className='cursor-pointer '>Users</p>
                </div>
                <br />
                <h1>Featured Ttems</h1>
                <NFTCarousel/>
            </div>
        </PlaneLayout>
    )
}

export default MarketPlace;
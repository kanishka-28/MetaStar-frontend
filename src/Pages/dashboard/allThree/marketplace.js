import React from 'react'
import { BiLogOut } from 'react-icons/bi';
import { IoSettingsOutline } from 'react-icons/io5';
import { BsArrowLeft } from 'react-icons/bs';
import PlaneLayout from '../../../layout/plane.layout';
import SideAccordion from '../../../components/accordion/sideAccordion';
import data from './acrdionDummyData';

const MarketPlace = () => {
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
                <div className='flex justify-between'>
                    <div className=''>
                        <SideAccordion data={data}/>         
                    </div>
                    <div className='w-full md:w-3/4 flex flex-wrap justify-evenly'>
                        <div className='text-center border border-gray-400 w-60 h-72 text-gray-300 mb-4'></div>
                        <div className='text-center border border-gray-400 w-60 h-72 text-gray-300 mb-4'></div>
                        <div className='text-center border border-gray-400 w-60 h-72 text-gray-300 mb-4'></div>
                    </div>
                </div>
            </div>
        </PlaneLayout>
    )
}

export default MarketPlace;
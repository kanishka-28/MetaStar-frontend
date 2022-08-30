import React from 'react'
import { BiLogOut } from 'react-icons/bi';
import { IoSettingsOutline } from 'react-icons/io5';
import { BsArrowLeft } from 'react-icons/bs';
import PlaneLayout from '../../../layout/plane.layout';

const Metaverse = () => {
    return (
        <PlaneLayout>
            <div>
                <div className='w-full flex justify-between items-center '>
                    <div className='text-white text-xl mb-2 mt-10 flex items-center gap-2'>
                        <BsArrowLeft size={'1.5rem'} className='cursor-pointer' />
                        <span className='text-gray-400 '>Dashboard / </span><p>Metaverse</p>
                    </div>
                    <div className='text-gray-500 flex items-center gap-6'>
                        <IoSettingsOutline size={'1.5rem'} className='cursor-pointer' />
                        <BiLogOut size={'1.5rem'} className='cursor-pointer' /></div>
                </div>
                <hr className='class="border border-gray-700' />
                <br />
                <div className='flex gap-4 text-gray-400'>
                    <p className='cursor-pointer '>All</p>
                    <p className='cursor-pointer '>Modern</p>
                    <p className='cursor-pointer '>User Worlds</p>
                    <p className='cursor-pointer '>Village</p>
                </div>
                <br />
                <div className='flex flex-wrap justify-between'>
                    <div className='text-center border border-gray-400 w-80 lg:w-96 h-56 text-gray-300 mb-4'></div>
                    <div className='text-center border border-gray-400 w-80 lg:w-96 h-56 text-gray-300 mb-4'></div>
                    <div className='text-center border border-gray-400 w-80 lg:w-96 h-56 text-gray-300 mb-4'></div>
                </div>
            </div>
        </PlaneLayout>
    )
}

export default Metaverse;
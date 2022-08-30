import React from 'react'
import { BiLogOut } from 'react-icons/bi';
import { IoSettingsOutline } from 'react-icons/io5';
import PlaneLayout from '../../../layout/plane.layout';

const Profile = () => {
    return (
        <PlaneLayout>
            <div>
                <div className='w-full flex justify-between items-center '>
                    <p className='text-white text-xl mb-2 mt-10'>Hey, Shubhransh</p>
                    <div className='text-gray-500 flex items-center gap-6'><IoSettingsOutline size={'1.5rem'}/><BiLogOut size={'1.5rem'} className='' /></div>
                </div>
                <hr className='class="border border-gray-700 cursor-pointer hover:border-red-500 duration-500"' />
                <br />
                <br />
                <div className='flex flex-wrap justify-between'>
                    <div className='text-center border border-gray-400 w-80 lg:w-96 h-56 text-gray-300 mb-4'>Metaverse</div>
                    <div className='text-center border border-gray-400 w-80 lg:w-96 h-56 text-gray-300 mb-4'>artistverse</div>
                    <div className='text-center border border-gray-400 w-80 lg:w-96 h-56 text-gray-300 mb-4'>nft marketplace</div>
                </div><br />
                <h2 className='text-white font-semibold text-xl'>Your Daily Statistics</h2>
            </div>
        </PlaneLayout>
    )
}

export default Profile
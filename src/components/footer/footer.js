import React from 'react'
import logoMeta from '../../assets/images/metaLogo.png'

const Footer = () => {
    return (
        <div className='pb-1'>
            <div className='flex justify-evenly'>
                <div className='flex flex-col gap-2 justify-center'>
                    <img src={logoMeta} className='w-20' />
                    <p className='text-gray-500 mb-2'>MetaStarMedia.Io Pvt. Ltd.</p>
                    <p className='text-gray-500'>456, XYZ Street</p>
                    <p className='text-gray-500'>City</p>
                </div>
                <div className='flex flex-col gap-4'>
                    <p className='text-white text-lg font-semibold'>Browse us</p>
                    <p className='text-gray-400'>What are NFTs?</p>
                    <p className='text-gray-400'>Formats</p>
                    <p className='text-gray-400'>Blogs</p>
                    <p className='text-gray-400'>Contact Us</p>
                </div>
                <div className='flex flex-col gap-4'>
                    <p className='text-white text-lg font-semibold'>Social Media</p>
                    <p className='text-gray-400'>Facebook</p>
                    <p className='text-gray-400'>LinkedIn</p>
                    <p className='text-gray-400'>Twitter</p>
                </div>
            </div>
            <p className='text-sm text-gray-400 mx-auto w-max mt-10'>©2022. Metastar Media. All Rights Reserved.</p>
        </div>
    )
}

export default Footer
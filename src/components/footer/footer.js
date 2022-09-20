import React from 'react'
import logoMeta from '../../assets/images/metaLogo.png'

const Footer = () => {
    return (
        <div className='pb-1'>
            <div className='flex flex-col sm:flex-row justify-evenly items-center text-center'>
                <div className='flex flex-col gap-2 justify-center items-center'>
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
            {/* <div className='text-sm  text-gray-400   mt-10 w-10/12'>
                ©2022. Metastar Media. All Rights Reserved.
            </div> */}
            <p className='text-sm text-center text-gray-400 mx-auto break-words  mt-10'>©2022. Metastar Media. All Rights Reserved.</p>
        </div>
    )
}

export default Footer
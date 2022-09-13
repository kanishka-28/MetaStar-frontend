import React from 'react'

const Card
    = () => {
        return (
            <div class="my-8  rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 bg-blue-500 ">
                <div className='w-96 h-44 bg-red-600'>
                    {/* <img class="rounded-t-lg" src="https://www.cbc.ca/kids/images/furchester_header.jpg" alt="" /> */}
                </div>
                <div className='flex justify-between items-center'>
                    <div class="p-5">
                        <h5 class="mb-2 text-white font- tracking-tight dark:text-white">Noteworthy technology acquisitions</h5>
                        <p class="mb-3 text-sm text-gray-500 dark:text-gray-400">Here are the biggest enterprise technology </p>
                    </div>
                    <div className='w-20 h-20'>
                        <img class="rounded-t-lg " src="https://www.cbc.ca/kids/images/furchester_header.jpg" alt="image" />
                    </div>
                </div>
            </div>
        )
    }

export default Card

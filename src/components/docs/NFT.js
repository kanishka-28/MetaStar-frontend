import React from 'react'

const NFT = () => {
    return (
        <>
            <div className='bg-white w-full px-2 md:px-40 py-10'>
                <h1 className='font-semibold text-3xl mb-2'>What’s an NFT?</h1>
                <p className='text-lg text-gray-400'>A digital asset registered on the blockchain. NFTs can take on different forms, such as art, collectibles, digital fashion, etc. NFTs guarantee provenance, ownership, tradability and scarcity, providing asset holders with various utilities and experiences.</p>
                <br /><br />
                <div className='flex flex-wrap mx-auto justify-between gap-4'>
                    <div className='rounded border border-black w-44 h-56'></div>
                    <div className='rounded border border-black w-44 h-56'></div>
                    <div className='rounded border border-black w-44 h-56'></div>
                    <div className='rounded border border-black w-44 h-56'></div>
                </div>
            </div>
                <br /><br />
            <h1 className='font-semibold text-4xl md:px-40 mt-6 mb-2 text-white mb-80 px-2'>
                NFTs can be activated in various formats, according to the brand's preferences and targets.
            </h1>
        </>
    )
}

export default NFT
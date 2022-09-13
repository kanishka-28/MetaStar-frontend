import React from 'react'
import { UserAuth } from '../../context/auth/authContext'
import { auth } from '../../firebase'
import Docs from './docs'
import Landing from './landing'

const Home = () => {

    
    return (
        <>
            {/* {auth ? <Docs/> : <Landing/>} */}
            <Landing/>
        </>
    )
}

export default Home
import React from 'react'
import { UserAuth } from '../../context/auth/authContext'
import { auth } from '../../firebase'
import Docs from './docs'
import Landing from './landing'

const Home = () => { 

    const {user} = UserAuth();
    console.log(user?.email);
    
    return (
        <>
            {user?.email ? <Docs/> : <Landing/>}
            {/* <Landing/> */}
        </>
    )
}

export default Home
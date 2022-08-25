import React, { useState } from 'react'
import HomeLayout from '../../../layout/Home.layout'
import {BsArrowLeft} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import LoginGoogle from '../../../components/login/googleLogin'
import LoginFacebook from '../../../components/login/facebookLogin'
import LoginTwitter from '../../../components/login/twitterLogin'
import LoginGithub from '../../../components/login/githubLogin'

const Signup = () => {

    const [email, setemail] = useState('');
    const [pass, setpass] = useState('');
    const [name, setname] = useState('');
    const [mobile, setmobile] = useState('');


    return (
        <HomeLayout>
            <div className='flex flex-col items-center gap-10 mt-16'>
                <p className='text-white text-3xl text-center '>Let’s get you onboard! Sign up below</p>
                <div>
                    <div><input value={name} onChange={(e)=>setname(e.target.value)} placeholder='Name' className='m-2 w-80 bg-white p-2' /></div>
                    <div><input value={email} onChange={(e)=>setemail(e.target.value)} placeholder='Email' className='m-2 w-80 bg-white p-2' /></div>
                    <div><input value={mobile} onChange={(e)=>setmobile(e.target.value)} placeholder='Mobile' className='m-2 w-80 bg-white p-2' /></div>
                    <div> <input value={pass} onChange={(e)=>setpass(e.target.value)} placeholder='Password' className='m-2 w-80 bg-white p-2' /></div>
                </div>
                <div className='flex justify-between w-80'>
                    <Link to={'/'}>
                    <button className='flex items-center gap-2 text-gray-300'> <BsArrowLeft/> <p>GO BACK</p></button>
                    </Link>
                    <button className='text-gray-300 border border-gray-300 px-3 py-1'>SIGNUP</button>
                </div>
                <div className='text-center'>
                        <p className='text-white'>Or</p>
                        <p className='text-white'>Sign In With</p>
                    </div>
                    <div className='flex gap-6 items-center justify-between'>
                        <LoginGoogle />
                        <LoginFacebook />
                        <LoginTwitter />
                        <LoginGithub />
                    </div>
            </div>
        </HomeLayout>
    )
}

export default Signup
import React, { useEffect, useState } from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { Link, useHistory } from 'react-router-dom'
import LoginFacebook from '../../../components/login/facebookLogin'
import LoginGithub from '../../../components/login/githubLogin'
import LoginGoogle from '../../../components/login/googleLogin'
import LoginTwitter from '../../../components/login/twitterLogin'
import { UserAuth } from '../../../context/auth/authContext'
import { auth } from '../../../firebase'
import PlaneLayout from '../../../layout/plane.layout'

const Login = () => {

    const { user } = UserAuth();

    const history = useHistory();

    const [email, setemail] = useState('');
    const [pass, setpass] = useState('');


    return (
        <>
            <PlaneLayout>
                <div className='flex flex-col items-center gap-10 mt-16'>
                    <p className='text-white text-3xl text-center '>Welcome back! Sign in below</p>
                    <div>
                        <div><input value={email} onChange={(e) => setemail(e.target.value)} placeholder='Email' className='my-2 w-full sm:w-80 bg-white p-2' /></div>
                        <div><input value={pass} onChange={(e) => setpass(e.target.value)} placeholder='Password' className='my-2 w-full sm:w-80 bg-white p-2' /></div>
                    </div>
                    <div className='flex justify-between w-full sm:w-80 px-10 sm:px-0'>
                        <Link to={'/'}>
                            <button className='flex items-center gap-2 text-gray-300'> <BsArrowLeft /> <p>GO BACK</p></button>
                        </Link>
                        <button className='text-gray-300 border border-gray-300 px-3 py-1'>LOG IN</button>
                    </div>
                    <div className='text-center'>
                        <p className='text-white'>Or</p>
                        <p className='text-white'>Sign In With</p>
                    </div>
                    <div className='flex flex-wrap gap-6 items-center justify-center'>
                        <LoginGoogle />
                        <LoginFacebook />
                        <LoginTwitter />
                        <LoginGithub />
                    </div>
                </div>
            </PlaneLayout>
        </>
    )
}

export default Login
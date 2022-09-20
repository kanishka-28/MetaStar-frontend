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

    const { EmailSignIn } = UserAuth();

    useEffect(() => {
        if(user?.email){
            history.push('/')
        }
    }, [user?.email]);

    const handleSignIn = async () => {
        try {
            await EmailSignIn(email, pass);
            console.log(user?.email);
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <>
            <PlaneLayout>
                <div className='flex flex-col items-center gap-10 mt-16'>
                    <p className='text-white text-3xl text-center '>Welcome back! Sign in below</p>
                    <div className='items-center -center flex-col'>
                        <div className='mb-6 w-80 mx-auto'>
                            <input value={email} onChange={(e) => setemail(e.target.value)} placeholder='Email' className='z-30 mx-2 w-80 bg-white p-2 absolute' />
                            <div className='z-0 border border-white right-16 top-2 relative h-10 w-80 ml-20'></div>
                        </div>
                        <div className='mb-6 w-80 mx-auto'>
                            <input value={pass} type='password' onChange={(e) => setpass(e.target.value)} placeholder='Password' className='z-30 mx-2 w-80 bg-white p-2 absolute' />
                            <div className='z-0 border border-white right-16 top-2 relative h-10 w-80 ml-20'></div>
                        </div>
                    </div>
                    <div className='flex justify-between w-full sm:w-80 px-10 sm:px-0'>
                        <Link to={'/'}>
                            <button className='flex items-center gap-2 text-gray-300'> <BsArrowLeft /> <p>GO BACK</p></button>
                        </Link>
                        <button onClick={handleSignIn} className='text-gray-300 border border-gray-300 px-3 py-1'>LOG IN</button>
                    </div>
                    <div className='text-center'>
                        <p className='text-white'>Or</p>
                        <p className='text-white'>Sign In With</p>
                    </div>
                    <div className='flex gap-6 items-center justify-between'>
                        <LoginGoogle />
                        <LoginFacebook />
                    </div>
                    {/* <div className='flex flex-wrap gap-6 items-center justify-center'>
                        <LoginGoogle />
                        <LoginFacebook />
                        <LoginTwitter />
                        <LoginGithub />
                    </div> */}
                </div>
            </PlaneLayout>
        </>
    )
}

export default Login
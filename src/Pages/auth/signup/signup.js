import React, { useState } from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { Link, useHistory } from 'react-router-dom'
import LoginGoogle from '../../../components/login/googleLogin'
import LoginFacebook from '../../../components/login/facebookLogin'
import LoginTwitter from '../../../components/login/twitterLogin'
import LoginGithub from '../../../components/login/githubLogin'
import PlaneLayout from '../../../layout/plane.layout'
import { UserAuth } from '../../../context/auth/authContext'
import { auth } from '../../../firebase'

const Signup = () => {

    const [email, setemail] = useState('');
    const [pass, setpass] = useState('');
    const [name, setname] = useState('');
    const [mobile, setmobile] = useState('');

    const { EmailSignUp } = UserAuth();
    const history = useHistory();

    const handleSignup = async () => {
        try {
            await EmailSignUp(email, pass, name, mobile);
            history.push('/');
        } catch (error) {
            console.log(error);
        }
    }

    console.log(auth);
    return (
        <PlaneLayout>
            <div className='flex flex-col items-center gap-10 mt-12'>
                <p className='text-white text-3xl text-center '>Let’s get you onboard! Sign up below</p>
                <div>
                    <div className='mb-6'>
                        <input value={name} onChange={(e) => setname(e.target.value)} placeholder='Name' className='mx-2 w-80 bg-white p-2 absolute' />
                        <div className='border border-white right-16 top-2 relative h-10 w-80 ml-20'></div>
                    </div>
                    <div className='mb-6'>
                        <input value={email} onChange={(e) => setemail(e.target.value)} placeholder='Email' className='mx-2 w-80 bg-white p-2 absolute' />
                        <div className='border border-white right-16 top-2 relative h-10 w-80 ml-20'></div>
                    </div>
                    <div className='mb-6'>
                        <input value={mobile} onChange={(e) => setmobile(e.target.value)} placeholder='Mobile' className='mx-2 w-80 bg-white p-2 absolute' />
                        <div className='border border-white right-16 top-2 relative h-10 w-80 ml-20'></div>
                    </div>
                    <div className='mb-6'>
                        <input type={'password'} value={pass} onChange={(e) => setpass(e.target.value)} placeholder='Password' className='mx-2 w-80 bg-white p-2 absolute' />
                        <div className='border border-white right-16 top-2 relative h-10 w-80 ml-20'></div>
                    </div>
                </div>
                <div className='flex justify-between w-80 mr-12'>
                    <Link to={'/'}>
                        <button className='flex items-center gap-2 text-gray-300'> <BsArrowLeft /> <p>GO BACK</p></button>
                    </Link>
                    <button onClick={handleSignup} className='text-gray-300 border border-gray-300 px-3 py-1'>SIGNUP</button>
                </div>
                <div className='text-center mr-12'>
                    <p className='text-white'>Or</p>
                    <p className='text-white'>Sign In With</p>
                </div>
                <div className='flex gap-6 items-center justify-between mr-12'>
                    <LoginGoogle />
                    <LoginFacebook />
                    {/* <LoginTwitter />
                    <LoginGithub /> */}
                </div>
            </div>
        </PlaneLayout>
    )
}

export default Signup
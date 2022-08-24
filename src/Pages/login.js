import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import LoginFacebook from '../components/login/facebookLogin'
import LoginGoogle from '../components/login/googleLogin'
import LoginTwitter from '../components/login/twitterLogin'
import { UserAuth } from '../context/auth/authContext'
import { auth } from '../firebase'
import PlaneLayout from '../layout/plane.layout'
import Name from './information/name'

const Login = () => {

    const { user } = UserAuth();

    const history = useHistory();

    useEffect(() => {
        console.log(user); 
        // console.log(auth?.currentUser?.email);
        // console.log(auth?.currentUser?.accessToken);
        //   if(user){
        //     history.push('/info/name');
        //   }
    }, [])


    return (
        <>
            <PlaneLayout>
                {user ? 
                <Name/> 
                : 
                <div className='h-full flex flex-col items-center justify-center'>
                    <LoginGoogle />
                    <br />
                    <LoginFacebook />
                    <br />
                    <LoginTwitter />
                    {/* <LinkedInLogin /> */}
                </div>
                }
            </PlaneLayout>
        </>
    )
}

export default Login
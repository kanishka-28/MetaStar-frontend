import { useEffect } from 'react';
import { ImFacebook } from 'react-icons/im'
import { useHistory } from 'react-router-dom';
import { UserAuth } from '../../context/auth/authContext';

function LoginFacebook() {

    const {facebookSignIn} = UserAuth();
    const history = useHistory();
    const { user } = UserAuth();

    useEffect(() => {
        if(user?.email){
            history.push('/')
        }
    }, [user?.email])

    const ResponseSuccessfacebook = async (response) => {
        try {
            await facebookSignIn()
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            {/* <div className="flex">
                <div className="m-auto rounded-lg">
                    <GoogleLogin
                        clientId="430560948108-l48c3dssgupp977dti4au6g5vc3dsfp6.apps.googleusercontent.com"
                        buttonText="Login with google"
                        onSuccess={ResponseSuccessGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                </div>
            </div> */}
            <div onClick={ResponseSuccessfacebook} className=''>
                <ImFacebook size={'3rem'} className='cursor-pointer ml-2 p-1 text-blue-500 border border-blue-400 rounded-full' />
                {/* <div className='px-2 w-44 text-center h-10 flex items-center cursor-pointer'>
                    <p className=''>Sign in with facebook</p>
                </div> */}
            </div>
        </>
    )
}

export default LoginFacebook;

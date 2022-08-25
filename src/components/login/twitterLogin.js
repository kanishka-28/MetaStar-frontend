import { AiFillTwitterCircle } from 'react-icons/ai'
import { BsTwitter } from 'react-icons/bs';
import { UserAuth } from '../../context/auth/authContext';

function LoginTwitter() {
   
    const {twitterSignIn} = UserAuth();

    const ResponseSuccessTwitter = async (response) => {
        try {
            await twitterSignIn()
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
            <div onClick={ResponseSuccessTwitter} className=''>
                <BsTwitter size={'3rem'} className='border border-twitter p-1 ml-2 text-twitter rounded-full'/>
                {/* <div className='px-2 w-44 text-center h-10 flex items-center cursor-pointer'>
                    <p className=''>Sign in with Twitter</p>
                </div> */}
            </div>
        </>
    )
}

export default LoginTwitter;
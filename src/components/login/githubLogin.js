import { ImGithub } from 'react-icons/im'
import { UserAuth } from '../../context/auth/authContext';
// import { Googlebutton } from 'react-google-button'

function LoginGithub() {

    // const ResponseSuccessGoogle = async (response) => {
    //     console.log(response);
    // }
   
    const {googleSignIn} = UserAuth();

    const ResponseSuccessGithub = async (response) => {
        try {
            // await googleSignIn()
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
            <div onClick={ResponseSuccessGithub} className='flex items-center cursor-pointer rounded-full '>
                <ImGithub size={'3rem'} className='ml-2 border border-gray-300 bg-white text-black-500  rounded-full' />
                {/* <div className='px-2 w-44 text-center h-10 flex items-center cursor-pointer'>
                    <p className=''>Sign in with Google</p>
                </div> */}
            </div>
        </>
    )
}

export default LoginGithub;

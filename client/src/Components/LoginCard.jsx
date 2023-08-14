import { useGoogleLogin } from '@react-oauth/google';
import googleLogo from '../assets/google.svg'
import appleLogo from '../assets/apple.svg'
import { useState } from 'react';
import {Navigate} from 'react-router-dom'

export default function LoginCard(){

    const [loggedIn, setLoggedIn] = useState(false);

    const login = useGoogleLogin({
        onSuccess: tokenResponse => {
            console.log(tokenResponse); 
            setLoggedIn(true)
        },
    });

    if(loggedIn){
        return <Navigate to={'/dashboard'} />
    }

    return (
        <div className='pt-16 flex md:items-center h-screen justify-center md:w-2/3 p-4 bg-primary rounded-xl'>
        <div className="flex-col justify-items-start items-center">
          <div className='font-bold text-4xl my-1'>Sign In</div>
          <div className='my-1'>Sign in to your account</div>
          <div className="flex gap-4 mt-4">
            {/* google login  */}
          <div className='cursor-pointer flex items-center gap-1 py-1 px-4 bg-white text-xs text-gray-400 rounded-md border-none' onClick={() => login()}>
          <img src={googleLogo} alt="" />
            Sign in with Google
          </div>
          
           {/* apple login  */}
            <div className='cursor-pointer flex items-center gap-1 py-1 px-4 bg-white text-xs text-gray-400 rounded-md'>
              <img src={appleLogo} alt="" />
              Sign in with Apple
            </div>
          </div>

          {/* card  */}
          <div className='bg-white p-6 mt-6 rounded-xl'>
            <form>
              <div>
              <label>Email address</label> <br />
              <input type="email" />
              </div>
              
              <div>
              <label>Password</label> <br />
              <input type="password" />
              </div>
              
              <div>
              <a className="text-blue-500" href='_blank'>Forgot password?</a>
              </div>

              <div className='cursor-pointer mt-4 mb-2 bg-black text-white p-2 rounded-lg text-center'>Sign In</div>
            </form>
          </div>

          <div className='mt-4 text-center text-sm text-gray-500'>
            Don't have an account? <a className='text-blue-500 '>Register here</a>
          </div>
        </div>
      </div>
    )
}
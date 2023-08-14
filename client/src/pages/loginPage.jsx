import React from 'react';
import ReactDOM from 'react-dom';
import LoginCard from '../Components/LoginCard';

export default function LoginPage(){
    return (
        <>
            <div className='md:flex'>
            <div className="md:h-screen w-full p-16 md:w-1/3 bg-black flex items-center justify-center">
                <h1 className='text-white text-6xl font-bold'>Board.</h1>
            </div>
            <LoginCard />
            </div>
        </>
    )
}
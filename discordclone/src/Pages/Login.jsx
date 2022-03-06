import React, { useState } from 'react';
import { FaDiscord } from 'react-icons/fa';
import { authentication } from '../firebase-config';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Login() {

  let navigate = useNavigate();

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(authentication, provider);
    {navigate("/home")}
  }
  
  return (
    <div className="Login h-full w-full bg-zinc-900 flex flex-col items-center pt-4 gap-3">
        <FaDiscord className="w-32 h-32 text-white" />
        <h1 className="text-3xl text-white">Sign In With Google</h1>
        <button
         onClick={signInWithGoogle}
         className="bg-slate-800 text-gray-200 p-2 rounded w-56 text-xl">
           Click to Sign In
        </button>
    </div>
  )
}

export default Login;
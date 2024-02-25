import React from 'react'
import { useState } from 'react'
import {
  
  doSignInWithEmailAndPassword,
} from '../firebase/auth'

import { useAuth } from '../contexts/authContext'
import { Navigate , Link } from 'react-router-dom'

const LogIn = () => {
  const  userLoggedIn  = useAuth()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSigningIn, setIsSigningIn] = useState(false)
//   const [errorMessage, setErrorMessage] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    if(isSigningIn ){
        setIsSigningIn(true);
        await doSignInWithEmailAndPassword(email, password)
    }  
  }

//   const onGoogleSignIn = (e) =>{
//     e.preventDefault()
//     if(!isSigningIn){
//         setIsSigningIn(true)
//         // doSignInWithGoogle().catch
//     }
//   }

  return (
    <div>
      {userLoggedIn && <Navigate to={'/'} replace={true} />}
      <section class="text-gray-600 body-font relative">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Sign In
            </h1>
          </div>
          <div class="lg:w-1/2 md:w-2/3 mx-auto">
            <div class="flex flex-col flex-wrap m-2 items-center">
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="name" class="leading-7 text-sm text-gray-600">
                    Email
                  </label>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    id="email"
                    name="email"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="email" class="leading-7 text-sm text-gray-600">
                    Password
                  </label>
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    id="password"
                    name="password"
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="p-2 w-full border-gray-200">
                <button
                  onClick={onSubmit}
                  class="flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 mt-4 focus:outline-none hover:bg-blue-600 rounded text-lg"
                >
                  Sign In
                </button>
              </div>
            </div>
            <div class="flex flex-col items-center m-2 ">
              <p>
                Register a new account&nbsp;
                <Link class="text-blue-500" to="/signup">
                  Here.
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LogIn

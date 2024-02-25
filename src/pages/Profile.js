import { UserInfo } from '../firebase/UserInfo'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { auth } from '../firebase/firebase'
import { doSignOut } from '../firebase/auth'
import { useState, useEffect } from 'react'

const Profile = () => {
  const navigate = useNavigate()

  const [user, setUser] = useState(null)
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user)
    })

    return () => unsubscribe()
  }, [])

  const handleSignOut = async () => {
    await doSignOut()
    setUser(null)
    alert('User logged out successfully')
    // Navigate to the home page after sign out
    navigate('/')
  }

  return (
    <div className="flex justify-center mt-14 py-1">
      <div className="w-[30rem] md:w-[38rem] md:m-5 mt-10 p-4 border rounded-lg shadow-lg">
        <div className="flex justify-center mt-[-5rem]">
          <img
            className="w-32 h-32 border-4 border-white rounded-full"
            src={UserInfo.photoURL}
            alt="Profile Picture"
          />
        </div>
        <div className="text-center mt-4 mb-[5rem]">
          <h1 className="text-2xl font-semibold">{UserInfo.displayName}</h1>
          <p className="text-gray-600">{UserInfo.email}</p>
        </div>
        <div>
          <Link
            to="/editprofile"
            className="block w-2/3 m-auto py-2 text-center text-white bg-blue-500 hover:bg-blue-600 rounded-xl"
          >
            Edit Profile
          </Link>

          <button
            className="inline-flex items-center bg-blue-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-blue-600 rounded text-base mt-4 md:mt-0"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  )
}

export default Profile
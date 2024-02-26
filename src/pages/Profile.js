import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { auth } from '../firebase/firebase'
import { doSignOut } from '../firebase/auth'
import { useEffect, useState } from 'react'
import { getUserInfo } from '../firebase/UserInfo'

const Profile = () => {
  const navigate = useNavigate()

  const [user, setUser] = useState(null)
  // const [userInfo, setUserInfo] = useState(null) // Initialize userInfo as null

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      setUser(user)
      if (user) {
        try {
          const userInfo = await getUserInfo() // Fetch user info if user exists
          setUser(userInfo) // Update state with user info
        } catch (error) {
          console.error('Error fetching user info:', error)
        }
      }
    })

    return () => unsubscribe()
  }, [])
  const handleSignOut = async () => {
   doSignOut()
    setUser(null)
    alert('User logged out successfully')
    navigate('/')
  }

  return (
    <div className="flex justify-center mt-14 py-1">
      <div className="w-[30rem] md:w-[38rem] md:m-5 mt-10 p-4 border rounded-lg shadow-lg">
        <div className="flex justify-center mt-[-5rem]">
          <img
            className="w-32 h-32 border-4 border-white rounded-full"
            src={user?.photoURL || ''}
            alt="Profile Picture"
          />
        </div>
        <div className="text-center mt-4 mb-[5rem]">
          <h1 className="text-2xl font-semibold">{user?.displayName}</h1>
          <p className="text-gray-600">{user?.email}</p>
          <div>
            <p className="text-gray-600">Phone Number: {user?.phoneNo}</p>
            <p className="text-gray-600">Age: {user?.age}</p>
            <p className="text-gray-600">Weight: {user?.weight}</p>
            <p className="text-gray-600">Height: {user?.height}</p>
            <p className="text-gray-600">Blood Group: {user?.bloodGroup}</p>
            <p className="text-gray-600">BMI: {user?.BMI}</p>
          </div>
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

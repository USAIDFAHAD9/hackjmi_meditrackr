
import { useEffect, useState } from 'react'
import { auth } from '../firebase/firebase'
import { useNavigate } from 'react-router-dom'
import { getUserInfo } from '../firebase/UserInfo'

const EditProfile = () => {
  const navigate = useNavigate()
  const [userInfo, setUserInfo] = useState(getUserInfo())
const [user, setUser] = useState(null)
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUserInfo(getUserInfo())
    })

    return () => unsubscribe()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setUserInfo({
      ...userInfo,
      gender: e.target.gender.value,
      age: e.target.age.value,
      weight: e.target.weight.value,
      height: e.target.height.value,
      bloodGroup: e.target.bloodGroup.value,
      phoneNo: e.target.phoneNo.value,
      BMI: e.target.bmi.value, // Make sure to update BMI field
    })
    console.log(userInfo)
    navigate('/profile')
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
          <h1 className="text-2xl font-semibold">{user?.displayName || ''}</h1>
          <p className="text-gray-600">{user?.email || ''}</p>
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <div className="p-4 my-2 bg-blue-500 hover:bg-blue-600 rounded-xl flex flex-col sm:flex-row justify-between lg:w-full m:w-2/3 w-4/5 m-auto items-center text-lg">
              <span className="font-bold">Gender</span>
              <input
                type="text"
                name="gender"
                required
                className="py-2 rounded-lg w-3/4 sm:w-1/3 text-center"
                value={userInfo?.gender || ''}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, gender: e.target.value })
                }
              />
            </div>
            <div className="p-4 my-2 bg-blue-500 hover:bg-blue-600 rounded-xl flex flex-col sm:flex-row justify-between lg:w-full m:w-2/3 w-4/5 m-auto items-center text-lg">
              <span className="font-bold">Phone No</span>
              <input
                type="number"
                name="phoneNo"
                required
                className="py-2 rounded-lg w-3/4 sm:w-1/3 text-center"
                value={userInfo?.phoneNo || ''}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, phoneNo: e.target.value })
                }
              />
            </div>
            <div className="p-4 my-2 bg-blue-500 hover:bg-blue-600 rounded-xl flex flex-col sm:flex-row justify-between lg:w-full m:w-2/3 w-4/5 m-auto items-center text-lg">
              <span className="font-bold">Age</span>
              <input
                type="text"
                name="age"
                required
                className="py-2 rounded-lg w-3/4 sm:w-1/3 text-center"
                value={userInfo?.age || ''}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, age: e.target.value })
                }
              />
            </div>
            <div className="p-4 my-2 bg-blue-500 hover:bg-blue-600 rounded-xl flex flex-col sm:flex-row justify-between lg:w-full m:w-2/3 w-4/5 m-auto items-center text-lg">
              <span className="font-bold">Weight</span>
              <input
                type="text"
                name="weight"
                required
                className="py-2 rounded-lg w-3/4 sm:w-1/3 text-center"
                value={userInfo?.weight || ''}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, weight: e.target.value })
                }
              />
            </div>
            <div className="p-4 my-2 bg-blue-500 hover:bg-blue-600 rounded-xl flex flex-col sm:flex-row justify-between lg:w-full m:w-2/3 w-4/5 m-auto items-center text-lg">
              <span className="font-bold">Height</span>
              <input
                type="text"
                name="height"
                required
                className="py-2 rounded-lg w-3/4 sm:w-1/3 text-center"
                value={userInfo?.height || ''}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, height: e.target.value })
                }
              />
            </div>
            <div className="p-4 my-2 bg-blue-500 hover:bg-blue-600 rounded-xl flex flex-col sm:flex-row justify-between lg:w-full m:w-2/3 w-4/5 m-auto items-center text-lg">
              <span className="font-bold">Blood Group</span>
              <input
                type="text"
                name="bloodGroup"
                required
                className="py-2 rounded-lg w-3/4 sm:w-1/3 text-center"
                value={userInfo?.bloodGroup || ''}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, bloodGroup: e.target.value })
                }
              />
            </div>
            <div className="p-4 my-2 bg-blue-500 hover:bg-blue-600 rounded-xl flex flex-col sm:flex-row justify-between lg:w-full m:w-2/3 w-4/5 m-auto items-center text-lg">
              <span className="font-bold">BMI</span>
              <input
                type="text"
                name="bmi"
                required
                className="py-2 rounded-lg w-3/4 sm:w-1/3 text-center"
                value={userInfo?.BMI || ''}
                onChange={(e) =>
                  setUserInfo({ ...userInfo, BMI: e.target.value })
                }
              />
            </div>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EditProfile

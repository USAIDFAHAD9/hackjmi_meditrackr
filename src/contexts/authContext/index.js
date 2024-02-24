import { auth } from '../../firebase/firebase'
import { useEffect, useContext, useState } from 'react'
import { onAuthStateChanged } from '@firebase/auth'

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null)
  const [userLoggedIn, setUserLoggedIn] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, initializeUser)
    return unsubscribe
  }, [])
  async function initializeUser(user) {
    user
      ? (setCurrentUser({ ...user }), setUserLoggedIn(true))
      : (setCurrentUser(null), setUserLoggedIn(false))
    setLoading(false)
  }

  const value = {
    currentUser,
    userLoggedIn,
    loading,
  }
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

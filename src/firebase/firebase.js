import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
const firebaseConfig = {
  apiKey: 'AIzaSyAbxPq18ca3NnEcqJrmU4SxwWfMqV4o2mE',
  authDomain: 'meditrack-91c78.firebaseapp.com',
  projectId: 'meditrack-91c78',
  storageBucket: 'meditrack-91c78.appspot.com',
  messagingSenderId: '1068158259103',
  appId: '1:1068158259103:web:28b434639303ff6eb237aa',
  measurementId: 'G-C7H6LH1HV9',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export { app, auth }

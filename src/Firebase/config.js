// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCWzITMlvpD8kOK6hk2Hs7YsZHavSLnws4',
  authDomain: 'temponet-50e2e.firebaseapp.com',
  dataBaseURL: 'https://temponet-50e2e-default-rtdb.firebaseio.com/',
  projectId: 'temponet-50e2e',
  storageBucket: 'temponet-50e2e.appspot.com',
  messagingSenderId: '907318055795',
  appId: '1:907318055795:web:357380535a0bcf6ce7ab06',
  measurementId: 'G-T8S6PBP20X'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app)

export default app

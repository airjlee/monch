import { initializeApp } from 'firebase/app';
import {  getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// import { GoogleSignin } from '@react-native-google-signin/google-signin';


const firebaseConfig = {
  apiKey: "AIzaSyDErox-9e_8_FXoiyfOcule4CMlJD0dheQ",
  authDomain: "monch-428ae.firebaseapp.com",
  projectId: "monch-428ae",
  storageBucket: "monch-428ae.appspot.com",
  messagingSenderId: "495685574015",
  appId: "1:495685574015:web:15d4d2a349afab8368ce4a",
  measurementId: "G-C3N6VKQQ15"
};

const app = initializeApp(firebaseConfig);
// REACT NATIVE PERSIST--> LOOK INTO REPLACING WITH REDUX
export const auth = initializeAuth(app, { 
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
// export const auth = getAuth(app);
// GoogleSignin.configure({
//   webClientId: '//495685574015-eh0nlofeo30ej3ljfq2t4didcoa06d80.apps.googleusercontent.com',
// });


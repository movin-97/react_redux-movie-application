import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyARFl6dHK20V78RoKrF9dxkRTC2IB7Z6mk",
  authDomain: "netflix-testing-app.firebaseapp.com",
  projectId: "netflix-testing-app",
  storageBucket: "netflix-testing-app.appspot.com",
  messagingSenderId: "309579290334",
  appId: "1:309579290334:web:5bfb9cdc1e9a2f0927944f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const app = firebase.initializeApp({
  apiKey:"AIzaSyAQZkwOixZ4dJavt-pHKpsp6GmuWk33JOA",
  authDomain:"auth-development-157f1.firebaseapp.com",
  projectId:"auth-development-157f1",
  storageBucket:"auth-development-157f1.appspot.com",
  messagingSenderId:"1046520409688",
  appId:"1:1046520409688:web:8540696bb900f4fc61a42d"
})

export const auth = app.auth()
export default app;
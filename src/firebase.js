import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyComplVs7RAcAyuB2USVOtGoTMFCqyhn58',
  authDomain: 'bug-twister-javaclub.firebaseapp.com',
  projectId: 'bug-twister-javaclub',
  storageBucket: 'bug-twister-javaclub.appspot.com',
  messagingSenderId: '346591154536',
  appId: '1:346591154536:web:045b63fc5e37c41311c6dd',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
export default db;

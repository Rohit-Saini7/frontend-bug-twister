import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyA5j72i_JMsLE1z5XzC-6QsOhqciawWtYs',
  authDomain: 'bug-twister-by-java-club.firebaseapp.com',
  projectId: 'bug-twister-by-java-club',
  storageBucket: 'bug-twister-by-java-club.appspot.com',
  messagingSenderId: '627436916548',
  appId: '1:627436916548:web:0a1356c379bfd26ab4d111',
  measurementId: 'G-HP7T56ZBCG',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
export default db;

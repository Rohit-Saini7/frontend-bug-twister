import {
  signInWithPopup,
  onAuthStateChanged,
  getAuth,
  signOut,
} from 'firebase/auth';
import {
  doc,
  getDoc,
  collection,
  setDoc,
  serverTimestamp,
} from 'firebase/firestore';
import db, { auth, provider } from '../../firebase';
let set, language;

export const setUser = (payload) => ({
  type: 'SET_USER',
  user: payload,
});

export const setLanguage = (language) => ({
  type: 'SET_LANGUAGE',
  language: language,
});

export const setConfirmation = (status) => ({
  type: 'SET_LANGUAGE_CONFIRMATION',
  status: status,
});

export const setSet = (payload) => ({
  type: 'SET_SET',
  set: payload,
});

export const setQueNo = (payload) => ({
  type: 'SET_QUENO',
  set: payload,
});

export function signInAPI() {
  return (dispatch) => {
    signInWithPopup(auth, provider)
      .then(async (payload) => {
        dispatch(setUser(payload.user));
        const docRef = doc(db, 'userProfile', payload.user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          dispatch(setSet(docSnap.data().set.toString()));
          dispatch(setLanguage(docSnap.data().language));
          dispatch(setConfirmation(true));
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        console.error(errorCode + errorMessage + email);
      });
  };
}

export function getUserAuth() {
  return (dispatch) => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        dispatch(setUser(user));
      }
    });
  };
}

export function signOutAPI() {
  return (dispatch) => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        dispatch(setUser(null));
        dispatch(setLanguage(null));
        dispatch(setConfirmation(false));
        dispatch(setSet(1));
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        console.error(errorCode + errorMessage + email);
      });
  };
}

export function setLanguageAPI(payload) {
  return (dispatch) => {
    language = payload.language;
    dispatch(setLanguage(payload.language));
  };
}

export function setConfirmationAPI(payload) {
  return (dispatch) => {
    dispatch(setConfirmation(true));
    getDoc(doc(db, 'userProfile', payload.uid)).then((docSnap) => {
      if (docSnap.exists()) {
        dispatch(setSet(docSnap.data().set.toString()));
      } else {
        //
        // ! change set back to 3 after done testing
        //
        set = (Math.floor(Math.random() * 1) + 1).toString();
        dispatch(setSet(set));
        let userProfile = {
          name: payload.displayName,
          email: payload.email,
          set: set,
          timestamp: serverTimestamp(),
          questionsDone: 0,
          skipped: 0,
          language: language,
          time: 1500,
          totaltime: 0,
        };
        setDoc(doc(collection(db, 'userProfile'), payload.uid), userProfile);
      }
    });
  };
}

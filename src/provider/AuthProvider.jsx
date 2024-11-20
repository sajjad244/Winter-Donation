import {createContext, useEffect, useState} from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  console.log(user);

  // ! for new user creation
  const createNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // ! logOut / signOut
  const logOut = () => {
    return signOut(auth);
  };

  // ! logIn / SignIn
  const userLogIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //? ContextValue___Share__
  const authInfo = {
    user,
    setUser,
    createNewUser,
    logOut,
    userLogIn,
  };

  // ! onAuthStateChange or observer fn

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

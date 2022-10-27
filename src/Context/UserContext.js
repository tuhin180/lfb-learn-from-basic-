import React, { createContext, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
  sendEmailVerification,
  sendPasswordResetEmail,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import { useEffect } from "react";
export const AuthUserContext = createContext();
const auth = getAuth(app);

const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 1.creating user
  const createUserWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // 2.login User
  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // 3:log Out
  const logOut = () => {
    signOut(auth);
  };

  // 4.update profile
  const userProfile = (name, image) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    });
  };

  // 5. email verification
  const verifyEmail = () => {
    return sendEmailVerification(auth.currentUser);
  };

  // 6.forgot password
  const forgotPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  // 7.google log in
  const googleLogin = () => {};
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log(currentuser);
      setUser(currentuser);
      setLoading(false);
    });
    return () => unsubscribe;
  }, []);

  const userInfo = {
    user,
    createUserWithEmail,
    userLogin,
    logOut,
    userProfile,
    verifyEmail,
    forgotPassword,
  };
  return (
    <AuthUserContext.Provider value={userInfo}>
      {children}
    </AuthUserContext.Provider>
  );
};

export default UserContext;

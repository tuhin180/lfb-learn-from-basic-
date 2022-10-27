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
  signInWithPopup,
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
    return signOut(auth);
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
  const googleLogin = (googleProvider) => {
    return signInWithPopup(auth, googleProvider);
  };

  // .8 github log in
  const gitHubLogin = (gitHubProvider) => {
    setLoading(true);
    return signInWithPopup(auth, gitHubProvider);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser === null || currentUser.emailVerified) {
        setUser(currentUser);
      }
      console.log(currentUser);
      setUser(currentUser);
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
    googleLogin,
    gitHubLogin,
    loading,
  };
  return (
    <AuthUserContext.Provider value={userInfo}>
      {children}
    </AuthUserContext.Provider>
  );
};

export default UserContext;

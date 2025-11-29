import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../firebase/firebase.init";
import { FirebaseAuthContext } from "./FirebaseAuthContext";

const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Create User With MailPass
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Sign in with mail pass
  const signInWithMailPass = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Sign In Google
  const signInGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // Password Reset Password
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  // Sign Out
  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  // Manage User State
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (res) => {
      setUser(res);
      setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  //   value User Info
  const userInfo = {
    user,
    loading,
    setLoading,
    createUser,
    signInWithMailPass,
    resetPassword,
    signOutUser,
    signInGoogle,
  };
  return <FirebaseAuthContext value={userInfo}>{children}</FirebaseAuthContext>;
};

export default AuthProvider;
import React, { children, createContext, useEffect, useState } from 'react'
import app from '../firebase/firebase.config'
import { getAuth, createUserWithEmailAndPassword,onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext=createContext();
const auth=getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProviders = ({children}) => {

const [user,setUser]=useState(null);
const [loading,setLoading]=useState(true);

const createUser=(email,password)=>{
setLoading(true);
return createUserWithEmailAndPassword(auth, email, password)
}

const loginWithGoogle=()=> {
  setLoading(true);
  return signInWithPopup(auth, provider)
}

const login =(email,password)=>{
  setLoading(true);
return signInWithEmailAndPassword(auth, email, password)
}

const logOut=()=>{
  return signOut(auth);
}

useEffect(()=>{
  const unsubscribe=onAuthStateChanged(auth, currentUser => {
    setUser(currentUser);
    setLoading(false);
  });
  return (()=>{
    return unsubscribe();
  })
},[])

const authInf={
  user,
  createUser,
  loginWithGoogle,loading,login,logOut
}

  return (
    <AuthContext.Provider value={authInf}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProviders
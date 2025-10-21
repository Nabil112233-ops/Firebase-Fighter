import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/firebase.config';

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateProfilefunc = ({ displayName, photoURL }) => {
        return updateProfile(auth.currentUser, {
            displayName,
            photoURL
        })
    }

    const sendEmailVerificationFunc = () => {
        setLoading(true)
        return sendEmailVerification(auth.currentUser)
    }

    const signInWithEmailAndPasswordfunc = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signinWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const signinWithGithub = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    const singOutFunc = () => {
        setLoading(true)
        return signOut(auth)
    }

    const sendPasswordResetEmailFunc = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    const authInfo = {
        user,
        setUser,
        createUser,
        signInWithEmailAndPasswordfunc,
        signinWithGoogle,
        signinWithGithub,
        singOutFunc,
        sendPasswordResetEmailFunc,
        updateProfilefunc,
        sendEmailVerificationFunc,
        loading, 
        setLoading
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser)
            setUser(currentUser);
            setLoading(false)
        });
        return () => {
            unsubscribe();
        }
    }, [])

    return <AuthContext value={authInfo}>{children}</AuthContext>
};

export default AuthProvider;  
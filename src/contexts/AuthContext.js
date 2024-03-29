import React, { useState, useContext, useEffect } from 'react'
import { auth } from '../services/firebase'
import firebase from 'firebase/app'
import 'firebase/auth'
// creating an auth context
const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

const googleProvider = new firebase.auth.GoogleAuthProvider()
export const signInWithGoogle = () => {
    return auth.signInWithPopup(googleProvider)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null)
    const [userLoading, setUserLoading] = useState(true)

    const signup = (email, password) => {
        async function handleSignup() {
            try {
                const result = await auth.createUserWithEmailAndPassword(email, password)
                result.user.sendEmailVerification()
                auth.signOut()
            } catch (e) {
                console.log(e)
            }
        }
        return handleSignup()
    }

    const login = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password)
    }

    const logout = () => {
        return auth.signOut()
    }

    const forgotPassword = (email) => {
        return auth.sendPasswordResetEmail(email)
    }

    useEffect(() => {
        // if new user -> set user in firebase
        // useEffect will only load once
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setCurrentUser(user)
            setUserLoading(false)
        })

        return unsubscribe
    }, [])

    const value = {
        currentUser,
        signup,
        login,
        logout,
        forgotPassword
    }

    return <AuthContext.Provider value={value}>{!userLoading && children}</AuthContext.Provider>
}

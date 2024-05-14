/* eslint-disable react/prop-types */
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import axios from "axios";

// context api
export const AuthContext = createContext(null)

// google
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    // console.log(user)
    const [loading, setLoading] = useState(true);


    // create User
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // // update userprofile
    const updateUserProfile = (name, image) => {

        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image
        }).then(() => {
            // Profile updated!
            // ...
        }).catch((error) => {
            // An error occurred
            // ...
        });
    }

    // sign in 
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google
    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)

    }

    // sign out
    const signOutUser = () => {
        signOut(auth);
        setUser(null)

    };

    // observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {

            const userEmail = user?.email || user?.email;
            const loggedUser = { email: userEmail };

            if (user) {
                setUser(user);
                console.log(user)
                // if user than issue a token here
                axios.post(`${import.meta.env.VITE_API_URL}/jwt`, loggedUser, {
                    withCredentials: true

                })
                    .then(res => {
                        console.log('token response', res.data)
                    })

                setLoading(false)
            }
            else {
                // logout
                axios.post(`${import.meta.env.VITE_API_URL}/logOut`, loggedUser, {
                    withCredentials: true
                })
                    .then(res => {
                        console.log(res.data)
                    })

                setLoading(false)
                // User is signed out
                // ...
            }
        });

        return () => {
            return unsubscribe()
        }
    }, [])


    const info = {
        createUser,
        signInUser,
        googleSignIn,
        signOutUser,
        user,
        loading,
        updateUserProfile
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
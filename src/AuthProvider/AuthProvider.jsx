import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import { toast } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";



export const AuthContext = createContext(null)

// google
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    console.log(user)

    // create User
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // sign in 
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google
    const googleSignIn = () =>{
        return signInWithPopup(auth, googleProvider)
        .then(() => {
            toast.success('Logged in with Google successfully');
        })
        .catch(error => {
            toast.error('Failed to login with Google');
        });
    }

    // sign out
    const signOutUser = () =>{
         signOut(auth);
         setUser(null)
       
    };

    // observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
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
        user
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
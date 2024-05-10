import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    console.log(user)

    // create User
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // sign in 
    const signInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)

    }

    // observer
    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } 
          });

          return () =>{
            return unsubscribe()
          }
    },[])




    const info = {
        createUser,
        signInUser
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
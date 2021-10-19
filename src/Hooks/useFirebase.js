import initializeFirebase from "../Firebase/firebase.init"
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut,createUserWithEmailAndPassword,updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";

initializeFirebase()
const useFirebase =()=>{
    const [user,setUser]=useState({})
    const [name,setName]=useState('')
    const [isLoading,setIsLoading]= useState(true)
   

    const auth = getAuth()

    const googleProvider=new GoogleAuthProvider()



    // handle log in declare ------------

    const handleLogIn = (email,password)=>{
        setIsLoading(true)
       return  signInWithEmailAndPassword(auth,email,password)
    }

    // handle sign up name input -----------

    const handleNameInput = (e)=>{
        setName(e.target.value)
    }

     // declare profile name wehe user Sing Up-----------

     const setProfile =()=>{
        updateProfile(auth.currentUser,{
            displayName:name
        })
    }

    // handle sign Up ------------------

    const handleRegister=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
        // .then(result=>{
        //     setUser(result.user)
        //     setProfile()
        //     console.log(result.user)
        // })
        // .catch(erorr=>{
        //     setErorr(erorr.message)
        // })
    }


    // handle google sing in -------------------

    const handleGoogleSignIn = ()=>{
        setIsLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    // handle on auth state change---------

    useEffect(()=>{
        onAuthStateChanged(auth, user=>{
            if(user){
                setUser(user)
            }
            else{
                setUser({})
            }
            setIsLoading(false)
        })
    },[])

    // handle Sing Out ------------

    const handleSignOut=()=>{
        setIsLoading(true)
        signOut(auth)
        .then(()=>{
            setUser({})
        })
        .finally(()=>{
            setIsLoading(false)
        })
    }


    return{
        handleLogIn,
        handleRegister,
        setProfile,
        handleNameInput,
        handleGoogleSignIn,
        handleSignOut,
        setIsLoading,
        isLoading,
        user
    }

}

export default useFirebase;
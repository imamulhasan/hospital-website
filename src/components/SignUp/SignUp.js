import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import loginLogo from '../../images/login/logo-bumrungrad-eng.webp';

const SignUp = () => {
    
    const{handleGoogleSignIn,handleRegister,handleNameInput,setProfile,setIsLoading}= useAuth()

    const location=useLocation()
    const history = useHistory()
    const Url = location.state?.from||'/home'

    // declare usestate email, erorr and password -------
    const [email,setEmail]=useState('')
    const [password, setPassword]=useState('')
    const [erorr, setErorr]= useState('')

    // hadle email input------------
    const handleEmailInput = (e) =>{
        setEmail(e.target.value)
    }
    // handle password input-----------
    const handlePasswordInput = (e) =>{
        setPassword(e.target.value)
    }


    // handle Sign Up---------------------

    const handleSignUp =(e) =>{
        e.preventDefault()
        handleRegister(email,password)
        .then(result=>{
            history.push(Url)
            setProfile()
        })
        .catch(erorr=>{
            setErorr(erorr.message)
        })
        .finally(()=>[
            setIsLoading(false)
        ]) 
    }
    // handle google log in
    const handleGoogleLogin =()=>{
        handleGoogleSignIn()
        .then(result =>{
            history.push(Url)
        })
        .catch(erorr=>{
            setErorr(erorr.message)
        })
        .finally(()=>{
            setIsLoading(false)
        })
    }
    
    return (
        <div style={{backgroundColor:'#f0f0f0'}} >
            <div className=" form-container">
                <div className="text-center mt-5 mb-5">
                    <img width="200px" src={loginLogo} alt="" />
                </div>
                <form className='text-center'>
                    <input onBlur={handleNameInput} className="input" type="text" placeholder="name.." /><br />

                    <input onBlur={handleEmailInput} className="input" type="email" name="email" placeholder=" email.." />
                    <br />

                    <input onBlur={handlePasswordInput} className="input" type="password" name="password" placeholder=" password.."   />
                    <br />
                    <p className="text-danger"><small>{erorr}</small></p>
                    <input onClick={handleSignUp} className="login-btn" type="submit" value="Sign Up" />
                </form>
                <Link to="login">
                <p className="text-center">Already have an account?</p>
                </Link>
                <p className="text-center">--------------or google sign in--------------</p>
                <div className="text-center">
                <button onClick={handleGoogleLogin} className="google-btn "><i className="fab fa-google"></i></button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
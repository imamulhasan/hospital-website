import './Login.css'
import loginLogo from '../../images/login/logo-bumrungrad-eng.webp';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { useState } from 'react';

const Login = () => {
    const {handleGoogleSignIn,handleLogIn,setIsLoading}=useAuth()

    const [email,setEmail]=useState('')
    const [password, setPassword]=useState('')
    const [erorr,setErorr]=useState('')
    


    const location = useLocation()
    const history = useHistory()
    const Url = location.state?.from||'/home'

          // hadle email input------------
          const handleEmailInput = (e) =>{
            setEmail(e.target.value)
        }
    
        // handle password input-----------
        const handlePasswordInput = (e) =>{
            setPassword(e.target.value)
        }

        


    const handleGoogleLogin=()=>{
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

    // handle Sign Up---------------------

    const handleSignin =(e) =>{
        e.preventDefault()
        handleLogIn(email,password)
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
                    <input onBlur={handleEmailInput} className="input" type="email" name="email" placeholder=" email.." />
                    <br />
                    <input onBlur={handlePasswordInput} className="input" type="password" name="password" placeholder=" password.."  />
                    <br />
                    <p className="text-danger"><small>{erorr}</small></p>
                    <input onClick={handleSignin} className="login-btn" type="submit" value="Sign In" />
                </form>
                <Link to="signup">
                <p className="text-center">New User? Do Sign Up</p>
                </Link>
                <p className="text-center">--------------or google sign in--------------</p>
                <div className="text-center">
                <button onClick={handleGoogleLogin} className="google-btn "><i className="fab fa-google"></i></button>
                </div>
            </div>
        </div>
    );
};

export default Login;
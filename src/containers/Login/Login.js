import React, { useState} from 'react';
import { Link, useNavigate } from "react-router-dom";

import { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "../../firebase";
import './Login.css'

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // do something with the user
                navigate('/');
            })
            .catch(error => alert('Login failed!'));

    }

    const register = e => {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                if (userCredential) {
                    navigate('/login');
                }
            })
            .catch(error => alert('Registration failed!'));

    }

    return (
        <div className='login'> 
            <Link to='/' style={{ textDecoration: "none" }}>
                <div className="login__logo">
                    <div className="login__logoIcon"></div>
                </div>
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button 
                        type='submit' 
                        className='login__signInButton' 
                        onClick={signIn}
                    >
                        Sign In
                    </button>
                </form>

                <p>
                    By signing-in you agree to the eShop Website Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button 
                    className='login__registerButton' 
                    onClick={register}
                >
                    Create your eShop Account
                </button>
            </div>
        </div>
    )
}

export default Login;
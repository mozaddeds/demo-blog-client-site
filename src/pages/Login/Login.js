import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }else {
    firebase.app(); 
 }

const Login = () => {

    const provider = new firebase.auth.GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        console.log(`firebase login`)
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            var credential = result.credential;
            var token = credential.accessToken;
            var user = result.user;
        }).catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
        });
    }


    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm">
                <label>Email</label>
                <input type="text" className="loginInput" placeholder="Enter your email..." />
                <label>Password</label>
                <input type="password" className="loginInput" placeholder="Enter your password..." />
                <button className="loginBtn">
                    Login
                </button>
            </form>
            <button className="loginRegisterBtn">
                <Link style={{ color: "white" }} className="link" to="/register">Register</Link>
            </button>
            <h4 className="mt-4"> OR </h4>
            <button onClick={handleGoogleSignIn} className="btn googleSignInBtn">Login With Google</button>
        </div>
    );
};

export default Login;
import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../Login/firebase.config';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }else {
    firebase.app(); 
 }

const Register = () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                console.log(result);
            }).catch((error) => {
                console.error(error)
            });
    }


    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm">
                <label>Username</label>
                <input type="text" className="registerInput" placeholder="Enter your username..." />
                <label>Email</label>
                <input type="text" className="registerInput" placeholder="Enter your email..." />
                <label>Password</label>
                <input type="password" className="registerInput" placeholder="Enter your password..." />
                <button className="registerBtn">
                    Register
                </button>
            </form>
            <button className="registerLoginBtn">
                <Link style={{ color: "white" }} className="link" to="/login">Login</Link>
            </button>
            <h4 className="mt-2 mb-2"> OR </h4>
            <button onClick={handleGoogleSignIn} className="btn googleSignInBtn">Register With Google</button>
        </div>
    );
};

export default Register;
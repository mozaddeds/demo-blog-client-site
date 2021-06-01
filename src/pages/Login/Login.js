import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext, ProfileContext } from '../../App';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}

const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [user, setUser] = useContext(ProfileContext);


    const provider = new firebase.auth.GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                setLoggedInUser(true);
                const userData = {
                    name: result.user.displayName,
                    email: result.user.email,
                    userImage: result.user.photoURL
                }
                setUser(userData);
            }).catch((error) => {
                console.error(error)
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
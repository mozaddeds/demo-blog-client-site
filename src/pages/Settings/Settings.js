import React, { useState, useContext } from 'react';
import { UserContext } from '../../App';
import './Settings.css';


const Settings = () => {


    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">update your account</span>
                    <span className="settingsDeleteTitle">Delete account</span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img src="https://avatars.githubusercontent.com/u/76786635?s=96&v=4" alt="" />
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon far fa-user-circle"></i>
                        </label>
                        <input type="file" id="fileInput" style={{ display: "none" }} />
                    </div>
                    <label>UserName</label>
                    <input type="text" placeholder="Shakib" />
                    <label>Email</label>
                    <input type="email" placeholder="shakibshalim1698@gmail.com" />
                    <label>Password</label>
                    <input type="password" />
                    <button className="settingsSubmit">
                        Update
                    </button>
                </form>
            </div>

        </div>
    );
};

export default Settings;
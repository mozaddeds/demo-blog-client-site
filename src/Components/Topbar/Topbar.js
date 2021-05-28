import React from 'react';
import { Link } from 'react-router-dom';
import './Topbar.css'

const Topbar = () => {
    const user = false;
    return (
        <div className="top">
            <div className="topLeft">website name</div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/">Home</Link>
                    </li>
                    <li className="topListItem"><Link className="link" to="/">About</Link></li>
                    <li className="topListItem"><Link className="link" to="/">Contact</Link></li>
                    <li className="topListItem"><Link className="link" to="/write">Write</Link></li>
                    <li className="topListItem">
                        {user && "Logout"}
                    </li>
                </ul>

            </div>
            <div className="topRight">
                {
                    user ? (

                        <img className="topImg" src="https://avatars.githubusercontent.com/u/76786635?s=96&v=4" alt="" />
                    ) : (
                        <ul className="topList">
                            <li className="topListItem">
                                <Link className="link" to="/login"> Login</Link>
                            </li>
                            <li className="topListItem">
                                <Link className="link" to="/register"> Register</Link>
                            </li>
                        </ul>
                    )

                }
            </div>
        </div>
    );
};

export default Topbar;
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Topbar.css';
import { UserContext } from '../../App';

const Topbar = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

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
                </ul>

            </div>
            <div className="topRight">
                <ul className="topList">
                    {loggedInUser? <div>
                        <li className="topListItem">
                            <Link className="link" to="/login"> Log Out</Link>
                        </li>
                    </div> :
                    <div>
                        <li className="topListItem">
                            <Link className="link" to="/login"> Login</Link>
                        </li>
                        <li className="topListItem">
                            <Link className="link" to="/register"> Register</Link>
                        </li>
                    </div>}
                </ul>
            </div>
        </div>
    );
};

export default Topbar;
import Home from "./pages/Home/Home";
import Topbar from "./Components/Topbar/Topbar";
import Write from "./pages/Write/Write";
import Settings from "./pages/Settings/Settings";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { createContext, useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Single from "./pages/SinglePage/Single";

export const UserContext = createContext();
export const ProfileContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState(false);
  const [user, setUser] = useState({
    name: null,
    email: null,
    userImage: null
  });

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <ProfileContext.Provider value={[user, setUser]}>
        <Router>
          <Topbar></Topbar>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/write">
              <Write />
            </Route>
            <Route path="/settings">
              <Settings />
            </Route>
            <Route path="/news/hvfhe:id">
              <Single />
            </Route>
          </Switch>
        </Router>
      </ProfileContext.Provider>
    </UserContext.Provider>
  );
}

export default App;

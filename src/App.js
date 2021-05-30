import Home from "./pages/Home/Home";
import Topbar from "./Components/Topbar/Topbar";
import Write from "./pages/Write/Write";
import Settings from "./pages/Settings/Settings";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  const user = false;
  return (
    <Router>
      <Topbar></Topbar>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/register">
          {user ? <Home /> : <Register />}
        </Route>
        <Route path="/login">
          {user ? <Home /> : <Login />}
        </Route>
        <Route path="/write">
          {user ? <Write /> : <Register />}
        </Route>
        <Route path="/settings">
          {user ? <Settings /> : <Register />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

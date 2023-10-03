import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Navigate as Redirect,
} from "react-router-dom";
import React, { useContext } from "react";
import { AuthContext, AuthContextProvider } from "./context/AuthContext";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          element={user ? <Home /> : <Redirect to="/login" />}
        ></Route>
        <Route
          path="/login"
          element={
            !user ? (
              <AuthContextProvider>
                <Login />{" "}
              </AuthContextProvider>
            ) : (
              <Redirect to="/" />
            )
          }
        ></Route>
        <Route
          path="/register"
          element={!user ? <Register /> : <Redirect to="/" />}
        ></Route>
        <Route
          path="/profile/:username"
          element={user ? <Profile /> : <Redirect to="/login" />}
        ></Route>
      </Switch>
    </Router>
  );
}

export default App;

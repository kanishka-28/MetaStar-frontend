import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Pages/auth/login/login";
import { AuthContextProvider} from "./context/auth/authContext";
import axios from "axios";
import Home from "./Pages/home/home";
import Signup from "./Pages/auth/signup/signup";
import Profile from "./Pages/dashboard/profileDashboard/profile";

// axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.params = {};


const App = () => {

  return (
    <Router>
      <AuthContextProvider>
        <div>
          <Route exact path="/" component={Home} /> 
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/profile" component={Profile} />
        </div>
      </AuthContextProvider>
    </Router>
  )
}

export default App

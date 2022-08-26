import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Pages/auth/login/login";
import { AuthContextProvider} from "./context/auth/authContext";
import axios from "axios";
import Home from "./Pages/home/home";
import Signup from "./Pages/auth/signup/signup";
import Profile from "./Pages/dashboard/profileDashboard/profile";
import Metaverse from "./Pages/dashboard/allThree/metaverse";
import Artistverse from "./Pages/dashboard/allThree/artistverse";
import Docs from "./Pages/home/docs";

// axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.params = {};


const App = () => {

  return (
    <Router>
      <AuthContextProvider>
        <div>
          <Route exact path="/" component={Home} /> 
          <Route exact path="/docs" component={Docs} /> 
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/dashboard/profile" component={Profile} />
          <Route exact path="/dashboard/metaverse" component={Metaverse} />
          <Route exact path="/dashboard/artistverse" component={Artistverse} />
        </div>
      </AuthContextProvider>
    </Router>
  )
}

export default App

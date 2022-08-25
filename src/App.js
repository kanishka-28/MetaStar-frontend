import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Pages/auth/login/login";
import { AuthContextProvider} from "./context/auth/authContext";
import axios from "axios";
import Home from "./Pages/home/home";
import Signup from "./Pages/auth/signup/signup";

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
          {/* <Route exact path="/info/name" component={Name} /> */}
          {/* <Route exact path="/info/email" component={Email} />
          <Route exact path="/info/mobile" component={Mobile} />
          <Route exact path="/info/thanks" component={Thanks} /> */}
        </div>
      </AuthContextProvider>
    </Router>
  )
}

export default App

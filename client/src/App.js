import React from "react";
import "./style.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddStore from "./pages/AddStore";
import SuburbStores from "./pages/SuburbStores";
import Nav from "./components/Nav";
import Login from "./components/Login/login";
import SignUp from "./components/Login/signup";
import Footer from "./components/Footer";

function App() {
  return (

    <Router>
      <div>
        <Nav />
        <Route exact path="/" component={SuburbStores} />
        <Route exact path="/newstore" component={AddStore} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={SignUp} />
        <Footer/>
      </div>
    </Router>
    
  );
}

export default App;

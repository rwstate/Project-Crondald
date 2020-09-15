import React from 'react';
import './App.css';
import {Route} from "react-router-dom"
import Nav from "./components/Nav.js"
import Login from "./components/Login"
// import Register from "./register"


function App() {
  return (
    <div className="App">
      <Route path="/" render={props => <Nav {...props} />}/>
      <Route path="/login" component={Login}/>
    </div>
  );
}

export default App;

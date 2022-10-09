import React from "react";
import NavigationBar from "./Components/NavBar/NavigationBar";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Routing from "./Components/Navigation/Routing";
import {Router} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <NavigationBar />
        <Routing />
    </div>
  );
}

export default App;

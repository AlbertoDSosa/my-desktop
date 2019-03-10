import React, { Component } from "react";
import '../assets/icons/style.css';
import Desktop from "./desktop";
import "./App.scss";


class App extends Component{
  render(){
    return(
      <div className="App">
        <Desktop />
      </div>
    );
  }
}

export default App;
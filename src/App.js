import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from "./components/navbar";
import About from "./components/about";
import Projects from "./components/projects";
import Main from "./components/main";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
        <NavBar />

        <Route exact path = '/' component = {Main} />
        <Route path = '/about' component = {About} />
        <Route path = '/projects' component = {Projects} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

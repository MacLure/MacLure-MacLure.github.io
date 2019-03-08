import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import NavBar from "./components/navbar";
import About from "./components/about";
import Projects from "./components/projects";
import Main from "./components/main";
import {TransitionGroup, CSSTransition,} from 'react-transition-group'

class App extends Component {
  render() {
    return (
        <div style={styles.app}>
          <NavBar />
          <div>
          <Route render={({location}) =>(
            <TransitionGroup>
              <CSSTransition
                key={location.key}
                timeout={300}
                classNames='fade'
              >
                <Switch location={location}>
                  <Route exact path = '/' component = {Main} />
                  <Route path = '/about' component = {About} />
                  <Route path = '/projects' component = {Projects} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )} />
            
          </div>
        </div>
    );
  }
}

export default App;

const styles = {}

styles.app={
  position: 'relative',
  width: '100vw',
}
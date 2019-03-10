import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';
import Gramophone from './icons/gramophone'

class NavBar extends Component {
  state = {  }
  render() { 
    return (
      <div style={styles.nav}>
      <NavLink style={styles.homeLink} to="/" ><Gramophone /></NavLink>
        <ul style={styles.ul}>
        <li style={styles.li}><NavLink to="/about" className="navLink">About</NavLink></li>
        <li style={styles.li}><NavLink to="/projects" className="navLink">Projects</NavLink></li>
        </ul>
      </div> );
  }
}
 
export default NavBar;

const styles = {}

styles.nav={
  margin: 0,
  position: 'fixed',
  top: 0,
  width: '100vw',
  zIndex: 10
}

styles.homeLink = {
  position: 'absolute',
  top: '20px',
  left: '20px'
}

styles.ul= {
  position: 'absolute',
  right: '20px',
  top: '20px',
  margin: 0,
  fontSize: '1.5em',
}

styles.li= {
  color: "black",
  margin: "0 10px",
  padding: "10px",
}

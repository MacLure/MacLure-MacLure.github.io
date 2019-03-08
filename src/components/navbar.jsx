import React, { Component } from 'react';
import {Link, NavLink} from 'react-router-dom';

class NavBar extends Component {
  state = {  }
  render() { 
    return (
      <div style={styles.nav}>
        <ul style={styles.ul}>
        <li style={styles.li}><NavLink to="/" style={styles.link}>Home</NavLink></li>
        <li style={styles.li}><NavLink to="/about" style={styles.link}>About</NavLink></li>
        <li style={styles.li}><NavLink to="/projects" style={styles.link}>Projects</NavLink></li>
        </ul>
      </div> );
  }
}
 
export default NavBar;

const styles = {}

styles.nav={
  margin: 0,
  position: 'relative',
  zIndex: 10
}

styles.ul= {
  position: 'absolute',
  right: '20px',
  top: '20px',
  margin: 0,
  fontSize: '1.5em'
}

styles.li= {
  border: "1px solid black",
  margin: "0 10px",
  padding: "10px",
}
styles.link = {
  textDecoration: 'none'
}
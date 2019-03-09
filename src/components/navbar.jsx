import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';

class NavBar extends Component {
  state = {  }
  render() { 
    return (
      <div style={styles.nav}>
        <ul style={styles.ul}>
        <li style={styles.li}><NavLink to="/" className="navLink">Home</NavLink></li>
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
  color: "black",
  margin: "0 10px",
  padding: "10px",
}
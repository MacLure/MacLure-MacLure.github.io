import React, { Component } from 'react';
import {Link, NavLink} from 'react-router-dom';

class NavBar extends Component {
  state = {  }
  render() { 
    return (
      <div>
        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>

        </ul>
      </div> );
  }
}
 
export default NavBar;
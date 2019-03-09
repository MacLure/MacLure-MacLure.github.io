import React, { Component } from 'react';

class Main extends Component {
  state = {  }
  render() { 
    return (
      <div style={styles.fill}>
      <div className="projectTitle">Malcolm MacLure</div>
      <div className="projectDesc">Full-Stack Web Developer</div>

      </div> );
  }
}
 
export default Main;

const styles = {}

styles.fill={
  position: 'absolute',
  backgroundColor: 'rgb(180,250,180',
  width: '100vw',
  height: '100vh',
}
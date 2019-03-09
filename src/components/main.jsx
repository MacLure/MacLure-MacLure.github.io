import React, { Component } from 'react';
import Footer from "./footer";


class Main extends Component {
  state = { 
   }

  render() { 
    return (
      <div style={styles.fill}>
        <div className="projectTitle">Malcolm MacLure</div>
        <div className="projectDesc">Full-Stack Web Developer</div>
        <Footer color={bgColor}/>
      </div> );
  }
}
 
export default Main;

const styles = {}
const bgColor = 'rgb(180,250,180'

styles.fill={
  position: 'absolute',
  backgroundColor: bgColor,
  width: '100vw',
  minHeight: '100vh',
}
import React, { Component } from 'react';
import email from './../assets/icons/email.svg';
import linkedin from './../assets/icons/linkedin.svg';
import github from './../assets/icons/github.svg';
import codepen from './../assets/icons/codepen.svg';


class Footer extends Component {
  state = {  }
  render() { 
    return ( 
      <div style={styles.footer}>
      <img className="projectTechIcon" src={email} />
      <img className="projectTechIcon" src={linkedin} />
      <img className="projectTechIcon" src={github} />
      <img className="projectTechIcon" src={codepen} />

      </div> );
  }
}
 
export default Footer;

  const styles={}

  styles.footer={
    margin: 0,
    width: "100vw",
    position: 'fixed',
    bottom: 0,
    zIndex: 10
}
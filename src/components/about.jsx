import React, { Component } from 'react';
import Footer from "./footer";

import nautilusCutout from './../assets/images/nautilusCutout.png';

class About extends Component {
  state = {  }
  render() { 
    return (
      <div style={styles.fill}>
        <div style={styles.aboutParagraphs}>
        I'm a full-stack web developer with a background in international recruitment and project management. I love coding and building things with technology.
        <br /><br />
        I started learning web development in my previous role, where I wore many hats as the <a target="blank" href="http://www.jetprogramme.ca">head of a national cultural/education programme between Canada and Japan.</a>
        <br /><br />
        I began teaching myself to code in my free time before deciding to dive deeper into web development and programming. I am now looking forward to contributing to Toronto's tech industry.
        <br /><br />
        <a href="mailto:malcolm.maclure@gmail.com">Send me a message and let's connect!</a>
        </div>
        <img style={styles.nautilus} src={nautilusCutout} alt="nautilus"/>
        <Footer color={bgColor}/>
      </div>
    );
  }
}
 
export default About;


const styles = {}
const bgColor = 'rgb(180,180,230'

styles.fill={
  position: 'absolute',
  backgroundColor: 'rgb(180,180,230',
  width: '100vw',
  minHeight: '100vh',
}

styles.aboutParagraphs={
  position: 'absolute',
  left: '20vw',
  margin: '130px auto',
  maxWidth: "500px",
  fontSize: '1.2em',
  lineHeight: '1.4em',
  letterSpacing: '0.0em',
}

styles.emphasis = {
  color: 'rgba(0, 0, 0, 0.4)'
}

styles.nautilus = {
  position: 'absolute',
  margin: '60px auto',
  top: '15vh',
  right: '10vw',
  width: '500px',
  filter: 'grayscale(100%)',
  transform: 'rotate(-90deg)'
}
        
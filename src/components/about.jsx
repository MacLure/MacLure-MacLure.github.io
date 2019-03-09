import React, { Component } from 'react';

class About extends Component {
  state = {  }
  render() { 
    return (
      <div style={styles.fill}>
        <div style={styles.aboutParagraphs}>
        I'm a full-stack web developer with a background in international recruitment and project management. I love coding and building things with technology.
        <br /><br />
        I started learning web development in my previous role, where I wore many hats as the head of a national cultural/education programme between Canada and Japan.
        <br /><br />
        I began teaching myself to code in my free time before deciding to dive deeper into web development and programming. I am now looking forward to contributing to Toronto's tech industry.
        <br /><br />
        Send me a message and let's connect!
        </div>
      </div>
    );
  }
}
 
export default About;


const styles = {}

styles.fill={
  position: 'absolute',
  backgroundColor: 'rgb(180,180,230',
  width: '100vw',
  height: '100vh',
}

styles.aboutParagraphs={
  margin: '100px auto',
  width: "500px"
}
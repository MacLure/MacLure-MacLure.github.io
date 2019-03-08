import React, { Component } from 'react';

class About extends Component {
  state = {  }
  render() { 
    return (
      <div style={styles.fill}>
        About
        Hi! I'm a full-stack web developer with a background in international recruitment and project management. I love coding and building things with technology.

        I started learning web development in my previous role, where I wore many hats as the head of a national cultural/education programme between Canada and Japan.

        I began teaching myself to code in my free time before deciding to dive deeper into web development and programming. I am now looking forward to contributing to Toronto's tech industry.

        Let's have a conversation!
      </div>
    );
  }
}
 
export default About;


const styles = {}

styles.fill={
  position: 'absolute',
  backgroundColor: 'rgb(230,100,100',
  width: '100vw',
  height: '100vh',
}
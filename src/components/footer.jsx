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
        <div style={styles.footerCopyright}>© Malcolm MacLure</div>
        <div style={styles.footerLinks}>
          <img style={styles.footerLink} src={email} />
          <img style={styles.footerLink} src={linkedin} />
          <img style={styles.footerLink} src={github} />
          <img style={styles.footerLink} src={codepen} />
        </div>
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

  styles.footerCopyright = {
    display: "inline-block",
    position: 'absolute',
    margin: '10px',
    color: "rgba(0, 0, 0, 0.4)",
    fontWeight: 400,
  }

  styles.footerLinks = {
    width: "100vw",
    textAlign: 'right',
  }

  styles.footerLink = {
    margin: '0 20px 10px',
    width: '25px'
  }
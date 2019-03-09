import React, { Component } from 'react';
import email from './../assets/icons/email.svg';
import linkedin from './../assets/icons/linkedin.svg';
import github from './../assets/icons/github.svg';
import codepen from './../assets/icons/codepen.svg';

class Footer extends Component {
  state = { 
    socialLinks: [
      {
        name: email,
        url: 'mailto:malcolm.maclure@gmail.com',
      },
      {
        name: linkedin,
        url: 'https://www.linkedin.com/in/malcolmmaclure/',
      },
      {
        name: github,
        url: 'https://github.com/MacLure/',
      },
      {
        name: codepen,
        url: 'https://codepen.io/MacLure/',
      },
    ]
   }
  render() { 
  const bgColor = this.props.color

    return ( 
      <div style={styles.footer}>
        <div style={{backgroundColor: bgColor, paddingTop: '15px'}}>
          <div style={styles.footerCopyright}>© Malcolm MacLure</div>
          <div style={styles.footerLinks}>
            {this.state.socialLinks.map(link =>
              <a key={link.name} href={link.url} target={link.name !== email ? 'blank' : ''}><div className="footerLinkDiv"><img style={styles.footerLink} src={link.name} alt={link.name} /></div></a>
            )}
          </div>
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
    zIndex: 10,
}

  styles.footerCopyright = {
    position: 'absolute',
    margin: '6px 0 0 20px',
    Bottom: '30px',
    color: "rgba(0, 0, 0, 0.4)",
    fontWeight: 400,
  }

  styles.footerLinks = {
    width: "100vw",
    textAlign: 'right',
  }

  styles.footerLink = {
    position: 'relative',
    top: '7px',
    width: '25px'
  }
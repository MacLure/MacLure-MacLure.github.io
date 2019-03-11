import React, { Component } from 'react';
import Footer from "./footer";
import gramophoneCutout from './../assets/images/gramophoneCutout.png';

class Main extends Component {
  state = { 
   }

  render() { 
    return (
      <div style={styles.fill}>
        <div className="mainHeader">
          <div className="mainName" >Malcolm MacLure</div>
          <div className="mainTitle" >Full-Stack Web Developer</div>
        </div>
        <img className="gramophone" src={gramophoneCutout} alt="gramophone"/>
        <Footer color={bgColor}/>
      </div>
    );
  }
}
 
export default Main;

const styles = {}
const bgColor = 'rgb(180,250,180'

styles.fill={
  position: 'relative',
  backgroundColor: 'rgb(180,250,180',
  width: '100vw',
  minHeight: '100vh',
}
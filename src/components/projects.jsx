import React, { Component } from 'react';
import html5 from './../assets/icons/html5.svg';
import css3 from './../assets/icons/css3.svg';
import js from './../assets/icons/js.svg';
import sass from './../assets/icons/sass.svg';
import react from './../assets/icons/react.svg';
import redux from './../assets/icons/redux.svg';
import ruby from './../assets/icons/ruby.svg';
import rails from './../assets/icons/rails.svg';
import postgres from './../assets/icons/postgres.svg';



class Projects extends Component {
  state = {  }
  render() { 
    return (
      <div style={styles.fill}>
        <div className="projectTitle">Horizon</div>
        <div className="projectDesc">Admin and Student dashboards</div>
        <div>
          <img className="projectTechIcon" src={html5} />
          <img className="projectTechIcon" src={css3} />
          <img className="projectTechIcon" src={js} />
          <img className="projectTechIcon" src={react} />
          <img className="projectTechIcon" src={redux} />
          <img className="projectTechIcon" src={ruby} />
          <img className="projectTechIconWide" src={rails} />
          <img className="projectTechIcon" src={postgres} />
        </div>
        <div>
          <div className="projectLink">visit site</div>
          <div className="projectLink">view code</div>
        </div>
        <div className="projectTitle">Reserve-It</div>
        <div className="projectDesc">Restaurant booking app</div>
        <div>
          <img className="projectTechIcon" src={html5} />
          <img className="projectTechIcon" src={css3} />
          <img className="projectTechIcon" src={js} />
          <img className="projectTechIcon" src={sass} />
          <img className="projectTechIcon" src={ruby} />
          <img className="projectTechIconWide" src={rails} />
          <img className="projectTechIcon" src={postgres} />
        </div>
        <div>
          <div className="projectLink">visit site</div>
          <div className="projectLink">view code</div>
      </div>
      </div>
    );
  }
}
 
export default Projects;

const styles = {}

styles.fill={
  position: 'absolute',
  backgroundColor: 'rgb(255,230, 60)',
  width: '100vw',
  height: '100vh',
}
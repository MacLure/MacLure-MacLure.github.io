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
        <div class="projectTitle">Horizon</div>
        <div class="projectDesc">Admin and Student dashboards for schools</div>
        <div>
          <img class="projectTechIcon" src={html5} />
          <img class="projectTechIcon" src={css3} />
          <img class="projectTechIcon" src={js} />
          <img class="projectTechIcon" src={react} />
          <img class="projectTechIcon" src={redux} />
          <img class="projectTechIcon" src={ruby} />
          <img class="projectTechIconWide" src={rails} />
          <img class="projectTechIcon" src={postgres} />
        </div>
        <div class="projectTitle">Reserve-It</div>
        <div class="projectDesc">Restaurant booking app</div>
        <div>
          <img class="projectTechIcon" src={html5} />
          <img class="projectTechIcon" src={css3} />
          <img class="projectTechIcon" src={js} />
          <img class="projectTechIcon" src={sass} />
          <img class="projectTechIcon" src={ruby} />
          <img class="projectTechIconWide" src={rails} />
          <img class="projectTechIcon" src={postgres} />
        </div>
      </div>
    );
  }
}
 
export default Projects;

const styles = {}

styles.fill={
  position: 'absolute',
  backgroundColor: 'rgb(255,230, 60',
  width: '100vw',
  height: '100vh',
}
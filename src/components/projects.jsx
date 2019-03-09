import React, { Component } from 'react';
import Project from './project'

import html5 from './../assets/icons/html5.svg';
import css3 from './../assets/icons/css3.svg';
import js from './../assets/icons/js.svg';
import sass from './../assets/icons/sass.svg';
import react from './../assets/icons/react.svg';
import redux from './../assets/icons/redux.svg';
import ruby from './../assets/icons/ruby.svg';
import rails from './../assets/icons/rails.svg';
import postgres from './../assets/icons/postgres.svg';

import horizonScreenCap from './../assets/images/horizon_screencap.png';
import reserveItScreenCap from './../assets/images/reserveIt_screencap.png';



class Projects extends Component {
  state = { 
    projects: [
      {
        name: "Horizon",
        desc: "Admin and Student dashboards",
        summary: "Horizon is a web-based student and admin management tool for schools' career program success. It is designed for schools that have an outcomes or careers team who wish to optimize their communication between themselves and with students.  It features personalized dashboards for admins and students, allowing them to create, read, update, and delete information such as events, assignments, submissions, and comments.",
        tech: [html5, css3, js, react, redux, ruby, rails, postgres],
        screenCap: horizonScreenCap,
        liveURL: 'https://project-horizon-react.herokuapp.com/',
        gitHubURL: 'https://github.com/MacLure/project-horizon-react',
      },
      {
        name: "Reserve-It",
        desc: "Restaurant booking app",
        summary: "Reserve-It lets users make reservations at restaurants, and restaurant owners to keep track of their reservations. The app was built with responsiveness in mind, so it is easy to use for mobile, tablet, and desktop/laptop users.",
        tech: [html5, css3, js, sass, ruby, rails, postgres],
        screenCap: reserveItScreenCap,
        liveURL: 'https://project-reserve-it.herokuapp.com/',
        gitHubURL: 'https://github.com/BenjaminHoppe/reserveit',

      }
    ]
   }

  render() { 
    return (
      <div style={styles.fill}>
        <div style={styles.projectsContainer}>
          {this.state.projects.map(project => <Project project = {project} /> )}
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
  minHeight: '100vh',
}

styles.projectsContainer = {
  margin: '90px 30px 0 30px'
}
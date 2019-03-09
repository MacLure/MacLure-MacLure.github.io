import React, { Component } from 'react';
import Project from './project'
import Footer from "./footer";

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
        desc: "School admin and student portal",
        summary: "Horizon is a management tool for schools and students. It features different dashboards for two user types and allows CRUD operations to be run to the serverside database.",
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
          {this.state.projects.map(project => <Project key={project.name}project={project} /> )}
        </div>
        <Footer color={bgColor}/>
      </div>
    );
  }
}
 
export default Projects;

const styles = {}
const bgColor = 'rgb(240,190, 160)'

styles.fill={
  position: 'absolute',
  backgroundColor: 'rgb(240,190, 160)',
  width: '100vw',
  minHeight: '100vh',
}

styles.projectsContainer = {
  margin: '90px 30px 70px 30px'
}
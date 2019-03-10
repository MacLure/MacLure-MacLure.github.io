import React, { Component } from 'react';
import rails from './../assets/icons/rails.svg';

class Project extends Component {
  
  render() { 
    const {name, desc, summary, tech, liveURL, gitHubURL, screenCap} = this.props.project

    return ( 
      <div>
        <div className="projectGrid">
          <div className="screenCapCell">
            <div className="projectName1">{name}</div>
            <div className="projectDescription1">{desc}</div>
            <img style={styles.screencap} src={screenCap} alt={name} />
          </div>
          <div className="descriptionCell">
            <div className="projectName2">{name}</div>
              <div className="projectDescription2">{desc}</div>
              <div className="projectSummary">{summary}</div>
              <div>
                {tech.map(tech => 
                  <img key={tech} className={tech !== rails ? "projectTechIcon" : "projectTechIconWide"} src={tech} alt={tech.toString()} />
                )}
              </div>
              <div>
                <a href={liveURL} target="blank"><div className="projectLink">visit site</div></a>
                <a href={gitHubURL} target="blank"><div className="projectLink">view code</div></a>
            </div>
          </div>
        </div>
        <div style={styles.divider}></div>
      </div>
     );
  }
}
 
export default Project;

const styles = {}

styles.screencap = {
  width: '100%',
}

styles.divider = {
  width: '100%',
  height: '2px',
  backgroundColor: 'rgba(0,0,0,0.4)',
  marginBottom: '10px',
}
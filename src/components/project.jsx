import React, { Component } from 'react';
import horizonScreenCap from './../assets/images/horizon_screencap.png';

class Project extends Component {
  
  render() { 
    const {name, desc, summary, tech, liveURL, gitHubURL} = this.props.project


    return ( 
        <div className="projectGrid">
          <div className="projectScreenCapCell">
            <img className="projectScreenCap" src={horizonScreenCap} />
          </div>
          <div className="projectDescCell">
            <div className="projectTitle">{name}</div>
              <div className="projectDesc">{desc}</div>
              <div>{summary}</div>
              <div>
                {tech.map(tech => 
                  <img className="projectTechIcon" src={tech} alt={tech.toString()} />
                )}
              </div>
              <div>
                <a href={liveURL} target="blank"><div className="projectLink">visit site</div></a>
                <a href={gitHubURL} target="blank"><div className="projectLink">view code</div></a>
            </div>
          </div>
        </div>
     );
  }
}
 
export default Project;
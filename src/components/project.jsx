import React, { Component } from 'react';

class Project extends Component {
  
  render() { 
    const {name, desc, summary, tech, liveURL, gitHubURL, screenCap} = this.props.project

    return ( 
        <div style={styles.projectGrid}>
          <div style={styles.projectScreenCapCell}>
            <img style={styles.projectScreenCap} src={screenCap} alt={name} />
          </div>
          <div style={styles.projectDescCell}>
            <div style={styles.projectTitle}>{name}</div>
              <div style={styles.projectDesc}>{desc}</div>
              <div>{summary}</div>
              <div>
                {tech.map(tech => 
                  <img key={tech} style={styles.projectTechIcon} src={tech} alt={tech.toString()} />
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

const styles = {}

styles.projectGrid = {
  marginBottom: '30px',
  display:'grid',
  gridTemplateColumns: '1fr 1fr',
}

styles.projectScreenCapCell = {
  textAlign: 'center',
  padding: '10px',
}
styles.projectDescCell = {
  backgroundColor: 'white',
  padding: '10px',

}
styles.projectTechIcon = {
  width: '25px',
  margin: '5px',
}
styles.projectTechIconWide = {
  width: '70px',
  margin: '5px',
}
styles.projectTitle = {
fontSize: '3em',
}
styles.projectDesc = {
  fontSize: '2em',
  color: 'rgba(0, 0, 0, 0.4)'
}
styles.projectScreenCap = {
  width: '80%'
}
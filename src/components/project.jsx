import React, { Component } from 'react';
import rails from './../assets/icons/rails.svg';
import { Z_BLOCK } from 'zlib';

class Project extends Component {
  
  render() { 
    const {name, desc, summary, tech, liveURL, gitHubURL, screenCap} = this.props.project

    return ( 
        <div style={styles.grid}>
          <div style={styles.screencapCell}>
            <img style={styles.screencap} src={screenCap} alt={name} />
          </div>
          <div style={styles.descriptionCell}>
            <div style={styles.title}>{name}</div>
              <div style={styles.description}>{desc}</div>
              <div style={styles.summary}>{summary}</div>
              <div>
                {tech.map(tech => 
                  <img key={tech} style={tech !== rails ? styles.techIcon : styles.TechIconWide} src={tech} alt={tech.toString()} />
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

styles.grid = {
  marginBottom: '30px',
  display:'grid',
  gridTemplateColumns: '1fr 1fr',
}

styles.screencapCell = {
  backgroundColor: 'white',
  textAlign: 'center',
  overflow: 'hidden',
}

styles.screencap = {
  width: '100%',
}

styles.descriptionCell = {
  padding: '10px 10px 10px 20px',
}

styles.title = {
  fontSize: '2em',
  }
  
styles.description = {
  fontSize: '1.5em',
  color: 'rgba(0, 0, 0, 0.4)'
}

styles.techIcon = {
  width: '25px',
  margin: '10px 5px 10px 5px',
}

styles.TechIconWide = {
  width: '70px',
  margin: '10px 5px',
}


styles.summary = {
  margin: '5px 0 0 0',
  fontWeight: 700,
  fontSize: '1.1em',
  lineHeight: '1.2em',
  letterSpacing: '0.0em',

}
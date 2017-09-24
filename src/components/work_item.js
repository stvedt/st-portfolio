import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import '../css/mui-icon-custom.css';
import Chip from 'material-ui/Chip';
import SimpleSlider from './simple_slider.js';

const styles = {
  button: {
    margin: "10px 0",
  },
  chip: {
    margin: 4,
  },
  chipWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  }
}

const WorkItem = (props) => {
  let linkButton = null,
      gitButton = null;
  if ( props.linkText ){
    linkButton = <RaisedButton
      href={props.linkURL}
      target="_blank"
      label={props.linkText}
      icon={<FontIcon className="material-icons">link</FontIcon>}
      style={styles.button}
    />
  }

  if ( props.gitText ){
    gitButton = <RaisedButton
      href={props.gitURL}
      target="_blank"
      label={props.gitText}
      icon={<FontIcon className="muidocs-icon-custom-github" />}
      style={styles.button}
    />
  }

  let workImageSection = null
  if(props.imageSrc.constructor === Array){
    workImageSection = <SimpleSlider images={props.imageSrc}/>
  } else {
    workImageSection = <img src={process.env.PUBLIC_URL +'/images/' + props.imageSrc} alt={props.title} />
  }
  return (
    <div className="row work-item">
      <div className="col-lg-6 work-image">
        {workImageSection}
      </div>
      <div className="col-lg-6 work-details">
        <h2>{props.title}</h2>
        <p>{props.children}</p>
        <h6>Technologies Used:</h6>
        <div style={styles.chipWrapper}>
          {props.technologies.map((tech, index)=> <Chip key={index}style={styles.chip}>{tech}</Chip>)}
        </div>
        <br />
        {linkButton} {gitButton}
      </div>
    </div>
  )
}

export default WorkItem;

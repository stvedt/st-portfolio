import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import './mui-icon-custom.css';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import Chip from 'material-ui/Chip';
const styles = {
  wrapper:{
    margin: '20px 0',
    backgroundColor: '#f9f9f9',
    padding: 20,
  },
  button: {
    margin: 12,
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
  return (
    <div className="row" style={styles.wrapper}>
      <div className="col-md-6 work-image">
        <img src={props.imageSrc} alt={props.title} />
      </div>
      <div className="col-md-6">
        <h2>{props.title}</h2>
        <p>{props.children}</p>
        <h6>Technologies Used:</h6>
        <div style={styles.chipWrapper}>
          {props.technologies.map((tech)=> <Chip style={styles.chip}>{tech}</Chip>)}
        </div>
      </div>
    </div>
  )
}

export default WorkItem;

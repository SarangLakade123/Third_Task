import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const FeatureConatiner = props =>{
    return (
        <div>
        <FontAwesomeIcon icon={props.iconName} style={{color: props.color , fontSize: props.size}}/>
        <h3 className="SubHeading" style={{paddingTop: '13px', paddingBottom: '3px'}}>{props.heading}</h3>
        <p className="cardContent">{props.paragraph}</p>
        </div>
    );
}

export default FeatureConatiner;
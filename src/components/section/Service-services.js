import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import FeatureConatiner from '../FeatureContainer';
import { faCode,  faCogs, faCameraRetro, faChartBar, faTicketAlt } from '@fortawesome/free-solid-svg-icons'
import { faWordpress } from '@fortawesome/free-brands-svg-icons';


const Feature = () =>{
    return(
        <div className="container">
        <section id="features">
        <div className="row">
            <div className="col-md-4 ">
                <FeatureConatiner 
                iconName= {faCode}
                size = {30} 
                heading = 'Lorem Ipsum' 
                paragraph= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ' 
                />
            </div>

            <div className="col-md-4">
                <FeatureConatiner 
                iconName= {faCameraRetro} 
                size = {30} 
                heading = 'Lorem Ipsum' 
                paragraph= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore' 
                />
            </div>

            <div className="col-md-4">
                <FeatureConatiner 
                iconName= {faWordpress} 
                size = {30}  
                heading = 'Lorem Ipsum' 
                paragraph= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore' 
                />
            </div>
        </div>
        
        <div className="row">
            <div className="col-md-4 ">
                <FeatureConatiner 
                iconName= {faChartBar} 
                size = {30} 
                heading = 'Lorem Ipsum' 
                paragraph= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore' 
                />
            </div>

            <div className="col-md-4">
                <FeatureConatiner 
                iconName= {faCogs} 
                size = {30} 
                heading = 'Lorem Ipsum' 
                paragraph= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore' 
                />
            </div>

            <div className="col-md-4">
                <FeatureConatiner 
                iconName= {faTicketAlt} 
                size = {30}  
                heading = 'Lorem Ipsum' 
                paragraph= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore' 
                />
            </div>
        </div>
    </section>
  </div>
    );
}

export default Feature;
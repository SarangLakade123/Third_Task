import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FeatureConatiner from './FeatureContainer';
import { faCoffee, faLeaf, faCogs, faUsers } from '@fortawesome/free-solid-svg-icons'


const Feature = () =>{
    return(
        <div className="container-fluid">
    <section id="features">
      <div className="row">

        <div className="col-md-3 ">
          <FeatureConatiner 
          iconName= {faUsers} 
          color= '#c87941' 
          size={40}
          heading = 'Lorem Ipsum' 
          paragraph= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam' 
          />
        </div>

        <div className="col-md-3 ">
        <FeatureConatiner 
          iconName= {faCoffee} 
          color= '#c87941' 
          size={40}
          heading = 'Lorem Ipsum' 
          paragraph= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam' 
          />
        </div>

        <div className="col-md-3">
        <FeatureConatiner 
          iconName= {faCogs} 
          color= 'green'
          size={40}
          heading = 'Lorem Ipsum' 
          paragraph= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam' 
          />
        </div>

        <div className="col-md-3">
        <FeatureConatiner 
          iconName= {faLeaf} 
          color= '#68b0ab' 
          size={40}
          heading = 'Lorem Ipsum' 
          paragraph= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam' 
          />
        </div>

      </div>
    </section>
  </div>
    );
}

export default Feature;
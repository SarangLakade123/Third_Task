import React from 'react';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';


const Footer = () =>{
return(
    <div>
<div fixed='bottom' className="container-fluid" style={{backgroundColor: '#323232'}}>
  <div className="row row-cols-1 row-cols-lg-4 row-cols-md-2 py-5">
    <div className="col mt-2">
      <h5 className="SubHeading mb-4">CONTACT DETAILS</h5>
      <p className="cardContent">This is a wider card with supporting text below as a natural lead-in to additional</p>

      <h4 className="cardContent">Tel: XXXX XXXX XX </h4>
      <h4 className="cardContent">Fax: XXXXX XXXXXX </h4>
      <h4 className="cardContent">Email: contact@mydomain.com </h4>
    </div>

    <div className="col mt-2">
    <h5 className="SubHeading mb-4">QUICK LINKS</h5>
    <p className="cardContent">Link Text Here</p>
    <hr style={{backgroundColor: '#6e6d6d', marginTop: '-10px'}} />
    <p className="cardContent">Link Text Here</p>
    <hr style={{backgroundColor: '#6e6d6d', marginTop: '-10px'}} />
    <p className="cardContent">Link Text Here</p>
    <hr style={{backgroundColor: '#6e6d6d', marginTop: '-10px'}} />
    <p className="cardContent">Link Text Here</p>
    <hr style={{backgroundColor: '#6e6d6d', marginTop: '-10px'}} />
    </div>

    <div className="col my-2">
    <h5 className="SubHeading mb-4">FROM THE BLOG</h5>
    <h5 className="SubHeading" style={{color: '#6e6d6d'}}>Blog Post Title</h5>
    <p className="cardContent">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <a  className="SubHeadingLinks m-0" role="button" aria-pressed="true">Read More <ChevronRightIcon /></a>
    </div>

    <div className="col my-2">
    <h5 className="SubHeading mb-4">GRAB OUT NEWSLETTER</h5>
    <input className="form-control-lg mb-3 bg-dark" type="text" placeholder="Name" />
    <input className="form-control-lg mb-3 bg-dark" type="email" placeholder="Email" />
    <div >
      <a type="button" className="btn btn-dark SubHeading" style={{color: '#81b214'}}>SUBMIT</a>
    </div>
    </div>

  </div>
</div>
<div className="container-fluid" style= {{backgroundColor: 'black'}}>
  <p className="cardContent py-4">Copyright © 2020-All Right Reserved - Domain Name</p>
</div>
</div>
);
}

export default Footer;
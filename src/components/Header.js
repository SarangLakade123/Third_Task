import React from 'react';
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import {  Link} from "react-router-dom";

import { Fab } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import PinterestIcon from '@material-ui/icons/Pinterest';
import WifiIcon from '@material-ui/icons/Wifi';
import SearchIcon from '@material-ui/icons/Search';



function Header() {
  return (
    <div>
    <div className='topPadding'></div>
    <div className="topBox">
      <div className="iconBox">
        <div className="row m-0 text-center">
          <div className="col p-1">
          <Fab size="small" aria-label="add">
            <LinkedInIcon />
          </Fab>
          </div>
          <div className="col p-1">
          <Fab size="small"  aria-label="add">
            <TwitterIcon />
          </Fab>
          </div>
          <div className="col p-1">
          <Fab size="small"  aria-label="add">
            <FacebookIcon />
          </Fab>
          </div>
          <div className="col p-1">
          <Fab size="small"  aria-label="add">
            <PinterestIcon />
          </Fab>
          </div>
          <div className="col p-1">
            <Fab size="small" aria-label="add">
              <WifiIcon />
            </Fab>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid" style={{backgroundColor: 'white'}}>
     <div className="row align-items-center">
       <div className="col-md-6 headColumn">
         <h1 className="heading">COMPONY NAME</h1>
          <h4 className="SubHeading">TAG LINE</h4>
       </div>
       <div className="col-md-6 linkColumn">
         <h4 className="SubHeadingLinks"> <span>Sign Up |</span> <span>Log In |</span> <span>RSS Feeds |</span> <span>Achived News</span> </h4>
       </div>
     </div> 
  </div>

  {/* navigationbar */}

<Navbar expand="lg" sticky="top" style={{backgroundColor: '#81b214'}}>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link id='nav-SubHeading'> <Link to="/">Home</Link></Nav.Link>
      <Nav.Link id='nav-SubHeading'> <Link to="/about">AboutUs</Link></Nav.Link>
      <Nav.Link id='nav-SubHeading'> <Link to="/service">Service</Link></Nav.Link>
      <Nav.Link id='nav-SubHeading'> <Link to="/gallary">Gallary</Link></Nav.Link>
      <Nav.Link id='nav-SubHeading'> <Link to="/contactus">Contact Us</Link></Nav.Link>
    
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Fab color="primary" size='small' aria-label="add">
        <SearchIcon />
      </Fab>
    </Form>
  </Navbar.Collapse>
</Navbar>
  </div>
  );
}

export default Header;

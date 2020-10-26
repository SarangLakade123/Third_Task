import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Image , Card } from 'react-bootstrap';

import Header from '../components/Header';
import Footer from '../components/Footer';
import MyColumn from '../components/section/Column';
import ReverseColumn from '../components/section/ReverseColumn';
function Aboutus() {
  return (
    <div >
      <Header />
        <Image src="https://images.pexels.com/photos/3931512/pexels-photo-3931512.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
        fluid 
        style={{height: '600px', width: '100%', objectFit: 'cover'}} />

       <div className='container text-center' style= {{marginTop: "5rem", marginBottom: '4rem'}} >
         <h1 className='fontHead'>Our Story</h1>
         <h4 className='font'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia des</h4>
       </div>


       <MyColumn 
       img="https://images.pexels.com/photos/3862379/pexels-photo-3862379.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
       head='We provide Flexible Design.'
       firstPara='Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.' 
       secPara=' Contrary to popular belief, Lorem Ipsum is not
              simply random text. It has roots in a piece of classical Latin literature
              from 45 BC, making it over 2000 years old. It has roots in a piece of classical Latin literature
              from 45 BC, making it over 2000 years old.'  
       />

       <div className="container text-center" style={{marginTop: '5rem', marginBottom: '5rem'}}>
       <h1 className='fontHead my-5'>Meet Our Team</h1>
        <div className='row'>
          <div className='col-md-4'>
          <Card className="shadow" >
            <Card.Img variant="top" 
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" style={{height: '300px', objectFit: 'cover'}} />
            <Card.Body>
            <Card.Title className='fontPara' >Daniel</Card.Title>
            </Card.Body>
          </Card>
          </div>
          <div className='col-md-4'>
            <Card className="shadow" >
              <Card.Img variant="top" 
              src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" style={{height: '300px', objectFit: 'cover'}} />
              <Card.Body>
              <Card.Title className='fontPara'>Sophia</Card.Title>
              </Card.Body>
            </Card>
          </div>
          <div className='col-md-4'>
            <Card className="shadow" >
              <Card.Img variant="top" 
              src="https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" style={{height: '300px', objectFit: 'cover'}} />
              <Card.Body>
              <Card.Title className='fontPara' >Johan</Card.Title>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>


      <ReverseColumn 
           img="https://images.pexels.com/photos/3862634/pexels-photo-3862634.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Girl in a jacket" 
       head='We provide Flexible Design.'
       firstPara='Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.' 
       secPara=' Contrary to popular belief, Lorem Ipsum is not
              simply random text. It has roots in a piece of classical Latin literature
              from 45 BC, making it over 2000 years old. It has roots in a piece of classical Latin literature
              from 45 BC, making it over 2000 years old.' 
      />

   

      <Footer />
    </div>
  );
}

export default Aboutus;
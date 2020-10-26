import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Feature from '../components/section/Service-services';
import PriceTable from '../components/section/PriceTable';
import MyColumn from '../components/section/Column';
import ReverseColumn from '../components/section/ReverseColumn';

function Service() {
  return (
    <div >
      <Header />
        <div className='container mt-5'>
            <h2 className='fontHead text-center'>Our Services</h2>
        </div>

        <Feature />
        
        <div className='container my-5 '>
            <h2 className='fontHead text-center'>Why Us</h2>
        </div>
        <MyColumn 
       img="https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
       head='We provide Flexible Design.'
       firstPara='Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.' 
       secPara=' Contrary to popular belief, Lorem Ipsum is not
              simply random text. It has roots in a piece of classical Latin literature
              from 45 BC, making it over 2000 years old. It has roots in a piece of classical Latin literature
              from 45 BC, making it over 2000 years old.'  
       />

        <ReverseColumn 
           img="https://images.pexels.com/photos/3912477/pexels-photo-3912477.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
       head='We provide Flexible Design.'
       firstPara='Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.' 
       secPara=' Contrary to popular belief, Lorem Ipsum is not
              simply random text. It has roots in a piece of classical Latin literature
              from 45 BC, making it over 2000 years old. It has roots in a piece of classical Latin literature
              from 45 BC, making it over 2000 years old.' 
      />
        <PriceTable />
      <Footer />
    </div>
  );
}

export default Service;
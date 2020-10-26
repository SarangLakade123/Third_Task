import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '../components/Header';
import FirstSection from '../components/section/Contact-first';
import Footer from '../components/Footer';


function Contact() {
  return (
    <div >
      <Header />
      <FirstSection />
      <Footer />
    </div>
  );
}

export default Contact;
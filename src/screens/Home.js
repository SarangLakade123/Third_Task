import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Feature from '../components/Features';
import Header from '../components/Header';
import Slider from '../components/Carousel';
import Blogs from '../components/Blogpost';
import Footer from '../components/Footer';


function Home() {
  return (
    <div >
      <Header />
      <Slider />
      <Feature />
      <Blogs />
      <Footer />
    </div>
  );
}

export default Home;
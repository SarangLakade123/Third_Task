import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '../components/Header';
import Footer from '../components/Footer';
import ImageGridList from '../components/section/Gallery-grid';

function Galary() {
  return (
    <div >
      <Header />
     <ImageGridList />
      <Footer />
    </div>
  );
}

export default Galary;
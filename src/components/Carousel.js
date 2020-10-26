import React from 'react';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Image ,Carousel, } from 'react-bootstrap';



const Slider =()=> {
  
    return (
      
      <Carousel>
        <Carousel.Item>
          <Image 
            src="https://cdn.pixabay.com/photo/2016/03/21/10/44/desert-1270345_1280.jpg"
            alt="First slide"
            style={{height: '500px', width: '100%', objectFit: 'cover'}} 
          />
          <Carousel.Caption>
            <h3 className= 'font'>First slide label</h3>
            <p className='fontPara'> Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <Image 
            src="https://cdn.pixabay.com/photo/2015/03/18/09/31/prairie-679014_1280.jpg"
            alt="Third slide"
            style={{height: '500px', width: '100%', objectFit: 'cover'}} 
          />
          <Carousel.Caption>
            <h3 className= 'font'>Second slide label</h3>
            <p className='fontPara'> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <Image 
            src="https://cdn.pixabay.com/photo/2018/04/28/22/03/dawn-3358468_1280.jpg"
            alt="Third slide"
            style={{height: '500px', width: '100%', objectFit: 'cover'}} 
          />
          <Carousel.Caption>
            <h3 className= 'font'>Third slide label</h3>
            <p className='fontPara'>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
     
    );
  
}

export default Slider;
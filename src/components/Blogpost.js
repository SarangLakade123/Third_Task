import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const Blogs = () =>{

    return(
        <div className="container-fluid blogPost">
        <div className="row row-cols-1 row-cols-lg-4 row-cols-md-2">
          <div className="col mb-3">
            <div className="myCard">
                <img className="img-fluid" src="https://cdn.pixabay.com/photo/2015/03/13/20/42/plug-672231_1280.jpg" classNameName="card-img-top" alt="..." />
                <h5 className="cardHead">Card title</h5>
                <p className="cardContent">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <a href="#" className="SubHeadingLinks" role="button" aria-pressed="true">Read More<ChevronRightIcon /></a>
            </div>
        
          </div>
          <div className="col mb-3">
            <div className="myCard">
                <img className="img-fluid" src="https://cdn.pixabay.com/photo/2017/08/02/19/09/people-2572972_1280.jpg" classNameName="card-img-top" alt="..." />
                <h5 className="cardHead">Card title</h5>
                <p className="cardContent">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <a href="#" className="SubHeadingLinks" role="button" aria-pressed="true">Read More<ChevronRightIcon /></a>
            </div>
          </div>
          <div className="col mb-3">
            <div className="myCard">
                <img className="img-fluid" src="https://cdn.pixabay.com/photo/2017/10/25/10/07/music-instruments-2887457_1280.jpg" classNameName="card-img-top" alt="..." />
                <h5 className="cardHead">Card title</h5>
                <p className="cardContent">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <a href="#" className="SubHeadingLinks" role="button" aria-pressed="true">Read More<ChevronRightIcon /></a>
            </div>
          </div>
          <div className="col mb-3">
            <div className="myCard">
                <img className="img-fluid" src="https://cdn.pixabay.com/photo/2015/03/13/20/42/plug-672231_1280.jpg" classNameName="card-img-top" alt="..." />
                <h5 className="cardHead">Card title</h5>
                <p className="cardContent">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <a href="#" className="SubHeadingLinks" role="button" aria-pressed="true">Read More<ChevronRightIcon /></a>
            </div>
          </div>
      
        </div>
      </div>
    );
}

export default Blogs;


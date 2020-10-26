import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ReverseColumn = props =>{
    return(
  <div className="container-lg text-center" style={{marginTop: '5rem', marginBottom: '5rem'}}>
  <div className="row mb-5">
    
    <div className="col-md-6 my-auto">
    <div className="alert alert-light text-center " role="alert">
            <h3 className="alert-heading fontPara"><strong>{props.head}</strong></h3>
            <p className='fontPara'>{props.firstPara}</p>
            <hr />
            <p className="mb-0 fontPara"> {props.secPara} </p>
            </div>
    </div>

    <div className="col-md-6 my-auto">
      <div>
        <img 
        className="rounded" 
        src={props.img}
        width="100%" 
        height="auto"
        alt='img' />
      </div>
    </div>
  </div>
</div>
    );
}

export default ReverseColumn;
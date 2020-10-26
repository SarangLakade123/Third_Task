import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const FirstSection = () =>{
    return(
        <div className="container-fluid p-5">
      <div className="row">
          <div className="col-sm-12 col-md-6">
            <div>
              <div className="form-header" style={{textAlign: "center"}}>
                <h3 className="mt-2"> Drop Us a Line</h3>
                <p className="dark-grey-text">We'll write rarely, but only the best content.</p>
                </div>            
              </div>
              <form noValidate autoComplete="off">
                <div>
                <TextField 
                id="standard-full-width" 
                label="Name" 
                fullWidth  
                />
                </div>
                <div>
                <TextField 
                id="standard-full-width" 
                label="Email" 
                fullWidth

                />
                </div>
                <div>
                <TextField id="standard-full-width" fullWidth   label="Subject" />
                </div>
                <div>
                <TextField id="standard-full-width" fullWidth   label="Message" />
                </div>
                <Button variant="contained" color="primary" style={{marginTop: '10px'}}>
                  Primary
                </Button>
              </form>
          </div>

          <div className="col-sm-12 col-md-6 align-middle">
          <Image className='align-middle' src="https://image.freepik.com/free-vector/young-people-standing-talking-each-other-speech-bubble-smartphone-girl-flat-vector-illustration-communication-discussion_74855-8741.jpg" fluid />
          </div>
       </div>
  </div>
    );
}

export default FirstSection;
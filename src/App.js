import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './screens/Home';
import AboutUs from './screens/AboutUs';
import Service from './screens/Service';
import Galary from './screens/Gallery';
import Contact from './screens/ContactUs';
import './App.css';

function App() {
  return (
    <div >
     <BrowserRouter>
            <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={AboutUs} />
          <Route path="/service" component={Service} />
          <Route path="/gallary" component={Galary} />
          <Route path="/contactus" component={Contact} />
        </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;

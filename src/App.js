import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './app.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Home from './components/homepage'
import IndiaStat from './components/indiaStat';
import DistrictData from './components/districtData';
import Hope from './components/hope';
import Bored from './components/bored';
import Contributer from './components/contributer';
import Footer from './components/footer';


const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <hr />
        <div className="container">
          <Route exact path="/" component={Home} />
          <Route exact path="/status/india" component={IndiaStat} />
          <Route exact path="/status/india/:dist_id" component={DistrictData} />
          <Route exact path="/hope" component={Hope} />
          <Route exact path="/bored" component={Bored} />
          <Route exact path="/contributer" component={Contributer} />
        </div>
        <hr />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
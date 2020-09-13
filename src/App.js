import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './components/css/app.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Status from './components/status'
import Hope from './components/hope'
import Bored from './components/bored'
import Contributer from './components/contributer'
import Home from './components/homepage'
import Footer from './components/footer';


const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/status" component={Status} />
        <Route exact path="/hope" component={Hope} />
        <Route exact path="/bored" component={Bored} />
        <Route exact path="/contributer" component={Contributer} />
        <hr />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
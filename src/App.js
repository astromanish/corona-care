import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './app.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/header';
import Footer from './components/footer';

import Home from './components/homepage'

import WorldStat from './components/worldStat'
import IndiaStat from './components/indiaStat';
import DistrictData from './components/districtData';

import Hope from './components/hope';

import CommunityForum from './components/discussion-forum';
import AnswerAll from "./components/DiscussionForum/answer-all";
import { QuestionProvider } from "./components/DiscussionForum/QuestionContext";
import { AnswerProvider } from "./components/DiscussionForum/AnswerContext";


import Bored from './components/bored';
import Contributer from './components/contributer';

const App = () => {
  return (
    <BrowserRouter>
        <Header />
        <hr />
        <div className="container">
          <Route exact path="/" component={Home} />
          <Route exact path="/status/world" component={WorldStat} />
          <Route exact path="/status/india" component={IndiaStat} />
          <Route exact path="/status/india/:dist_id" component={DistrictData} />
          <Route exact path="/hope" component={Hope} />
          <Route exact path="/bored" component={Bored} />
          <Route exact path="/contributer" component={Contributer} />
          <QuestionProvider>
            <AnswerProvider>
              <Route
                exact
                path="/community-forum"
                component={CommunityForum}
              />
              <Route
                exact
                path="/discussion-forum/:ques_id/answers"
                component={AnswerAll}
              />
            </AnswerProvider>
          </QuestionProvider>
        </div>
        <hr />
        <Footer />
    </BrowserRouter>
  );
}

export default App;
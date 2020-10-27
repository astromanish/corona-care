import React from 'react';

import './css/home.css';

import bhu from './img/vacc.jpg';

import fest from './img/vacc.jpg';
import academics from './img/vacc.jpg';
import gymkhana from './img/vacc.jpg';
import varanasi from './img/vacc.jpg';
import registration from './img/vacc.jpg';
import discussion from './img/vacc.jpg';


const Home = () => {
    return (
      <div className="body-container-full">
        <div className="home_main-image-container">
          <img src={bhu} alt="bhu"/>
          <h1>WELCOME TO IIT BHU</h1>
        </div>
        <div className="light-container">
            <h1 className="heading">
              Corona Info
            </h1>
            <p className="item-content">
              Today we are in a very desperate and vulnerable situation as the deadly pandemic Covid-19 hit the 
              world and turned our lives upside down. To deal with such a dismal situation, we need to have a 
              proper knowledge about the current scenario and take every step carefully. We need to take care of
               ourselves and our loved ones and at the same time ensure that everybody in the society is also 
               well as this is a highly contagious disease. Apart from fighting the current situation of the 
               pandemic and subsequent lockdown we need to simultaneously move on with our lives and not succumb
                to the mental torment that comes with such a dark phase in our lives. This is what we plan to do
                with this website. We aim to create a platform where everyone can be up to date with the current
                  situation and take necessary precautions in order to safeguard oneself from the pandemic.
            </p>
        </div>
        <div className="dark-container">
          <div className="site_item">
            <div className="site_item-body">
              <h1 className="heading">Community Forum</h1>
              <p className="site_item-content">Here you can post your queries and experiences that you think is helpful for others or just to have a friendly discussion and make new friends!</p>
            </div>
            <img className="site_item-image" src={registration}/>
          </div>
          <div className="site_item">
            <div className="site_item-body">
              <h1 className="heading">Information</h1>
              <p className="site_item-content">This tab contains all the important updates and information about the corona virus and the situation in hospitals. Everything about the prevention, symptoms and home remedies are mentioned to help you out.</p>
            </div>
            <img className="site_item-image" src={academics}/>
          </div>
          <div className="site_item item-inverse">
            <div className="site_item-body">
              <h1 className="heading">Bored</h1>
              <p className="site_item-content">This tab contains information about how ro utilise the large amount of time we have because of lockdown. It also contains information about the mental health conditions and how to stay fit mentally and how to take proper care of yourself during the pandemic. The role of people as a community and individual is also mentioned.</p>
            </div>
            <img className="site_item-image" src={fest}/>
          </div>
          <div className="site_item">
            <div className="site_item-body">
              <h1 className="heading">Status</h1>
              <p className="site_item-content" >All the statistics about the infection, deaths, cure can be found here. It covers international, national and state wise statistics so that you can know which are the major hotspots in your city, state and country. All the information here is real time data and keeps updated regularly.</p>
            </div>
            <img className="site_item-image" src={gymkhana}/>
          </div>
          <div className="site_item item-inverse">
            <div className="site_item-body">
              <h1 className="heading">About Us</h1>
              <p className="site_item-content">Perfect guidance for exploring the BHU or Varanasi in general. Every year
              students from different parts of india take admission in the college and don't know what city </p>
            </div>
            <img className="site_item-image" src={varanasi}/>
          </div>
        </div>
      </div>
    );
}

export default Home;
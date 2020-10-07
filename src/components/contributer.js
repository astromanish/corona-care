import React from 'react';
import './css/contributer.css';
import divyansh from './img/divyansh.jpeg';
import vikas from './img/vikas.jpeg';
import manish from './img/manish.jpeg';
import amogh from './img/user1.png';
const Contributer = () => {
    return (
        <div className="contributer-list">
            <div className="contri-item manish">
                <img src={manish} alt="manish" />
                <div className="contri-item-nametag">
                    <h3 className="contri-item-name">Manish Singh</h3>
                    <p className="contri-item-roll">@astromanish</p>
                </div>
                <div className="contri-item-connect">
                    <a href="#"><i className="fab fa-facebook"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-github"></i></a>
                    <a href="#"><i className="fab fa-linkedin"></i></a>
                </div>
            </div>
            <div className="contri-item divyansh">
                <img src={divyansh} alt="divyansh" />
                <div className="contri-item-nametag">
                    <h3 className="contri-item-name">Divyansh Raj</h3>
                    <p className="contri-item-roll">@divyansh.raj4</p>
                </div>
                <div className="contri-item-connect">
                    <a href="#"><i className="fab fa-facebook"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-github"></i></a>
                    <a href="#"><i className="fab fa-linkedin"></i></a>
                </div>
            </div>
            <div className="contri-item vikas">
                <img src={vikas} alt="vikas" />
                <div className="contri-item-nametag">
                    <h3 className="contri-item-name">Vikas Tiwary</h3>
                    <p className="contri-item-roll">@tiwari_vikas0</p>
                </div>
                <div className="contri-item-connect">
                    <a href="#"><i className="fab fa-facebook"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-github"></i></a>
                    <a href="#"><i className="fab fa-linkedin"></i></a>
                </div>
            </div>
            <div className="contri-item amogh">
                <img src={amogh} alt="amogh" />
                <div className="contri-item-nametag">
                    <h3 className="contri-item-name">Amogh raut</h3>
                    <p className="contri-item-roll">@amogh_raut</p>
                </div>
                <div className="contri-item-connect">
                    <a href="#"><i className="fab fa-facebook"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-github"></i></a>
                    <a href="#"><i className="fab fa-linkedin"></i></a>
                </div>
            </div>
        </div>
    );
}

export default Contributer;
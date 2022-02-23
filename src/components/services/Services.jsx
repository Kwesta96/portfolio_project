import React from 'react';
import './services.scss';

export const Services = () => {
  return (
    <div className='services' id='services'>
      <div className="slider">
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src="assets/mobile.png" alt="" />
                </div>
                <h2>Title</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                  Neque natus nam quia maxime blanditiis nulla omnis eos at sed et, tempore placeat?</p>
                <span>Projects</span>
              </div>
            </div>
            <div className="right"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

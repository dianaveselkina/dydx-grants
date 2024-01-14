import React from 'react';
import './index.css';
import { Button } from '../Button/Button';

export const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <h1 className="hero__title">
          Powering the future of dYdX through community grants
        </h1>
        <div className="hero__btn">
          <Button text="Discover RFPs" />
          <Button text="Apply for grant" />
        </div>
        <div className="hero__info">
          <div>
            <p className="hero__text">
              100+
              <br />
              <span>projects funded</span>
            </p>
          </div>
          <div>
            <p className="hero__text">
              $3+ milion
              <br />
              <span>awarded</span>
            </p>
          </div>
          <div>
            <p className="hero__text">
              400+
              <br />
              <span>projects funded</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

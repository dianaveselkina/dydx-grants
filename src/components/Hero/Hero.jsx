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
          <Button />
          <Button />
        </div>
        <div className="hero__info">
          <div>
            <p>100+</p>
            <p>projects funded</p>
          </div>
          <div>
            <p>$3+ milion</p>
            <p>awarded</p>
          </div>
          <div>
            <p>400+</p>
            <p>projects funded</p>
          </div>
        </div>
      </div>
    </div>
  );
};

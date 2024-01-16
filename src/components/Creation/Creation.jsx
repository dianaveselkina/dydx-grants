import React from 'react';
import './index.css';
import { Button } from '../Button/Button';

export const Creation = () => {
  return (
    <div className="creation">
      <div className="container">
        <div className="creation__block">
          <p>Have a project in mind?</p>
          <h2 className="creation__title">Let’s create something awesome.</h2>
          <div className="hero__btn">
            <Button text="Apply for grant" />
          </div>
        </div>
      </div>
    </div>
  );
};

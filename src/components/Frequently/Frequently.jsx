import React from 'react';
import './index.css';

export const Frequently = () => {
  return (
    <div className="frequently">
      <div className="container">
        <h2 className="frequently__title">Frequently asked questions</h2>
        <p className="frequently__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nulla
          risus, consectetur ut bibendum non, gravida non libero.
        </p>
        <div className="frequently__block">
          <div className="block__ask">
            <p>How do I apply?</p>
            <span>+</span>
          </div>
          <div className="block__ask">
            <p>Can I apply as a U.S. based person/company?</p>
            <span>+</span>
          </div>
          <div className="block__ask">
            <p>How will I be compensated?</p>
            <span>+</span>
          </div>
          <div className="block__ask">
            <p>What type of project will qualify for a Grant?</p>
            <span>+</span>
          </div>
          <div className="block__ask">
            <p>
              What is the application timeline? When can I expect to hear back?
            </p>
            <span>+</span>
          </div>
          <div className="block__ask">
            <p>How can I increase my chances of getting funded?</p>
            <span>+</span>
          </div>
          <div className="block__ask">
            <p>How often do you approve new Rounds of funding?</p>
            <span>+</span>
          </div>
        </div>
      </div>
    </div>
  );
};

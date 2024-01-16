import React from 'react';
import './index.css';

export const Process = () => {
  return (
    <div className="process">
      <div className="container">
        <h2 className="process__title">Application process</h2>
        <p className="process__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nulla
          risus, consectetur ut bibendum non, gravida non libero.
        </p>
        <div className="process__cards">
          <div className="process__card card1">
            <p className="process__number">1</p>
            <h3 className="process__caption">Apply</h3>
            <p className="process__description">
              Submit a complete application to the dYdX Grants Team including as
              many details as possible about the proposed idea and their
              background.
            </p>
          </div>
          <div className="process__card card2">
            <p className="process__number">2</p>
            <h3 className="process__caption">Interview</h3>
            <p className="process__description">
              If your application is selected, the dYdX Grants will conduct 1-2
              interviews to collect more information on the Applicant's
              background and the proposal.
            </p>
          </div>
          <div className="process__card card3">
            <p className="process__number">3</p>
            <h3 className="process__caption">Grant offer</h3>
            <p className="process__description">
              The dYdX Grants team will determine if the proposal fits into the
              grant program. A vesting schedule and timeline for product
              development reports will also be determined in the offer;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

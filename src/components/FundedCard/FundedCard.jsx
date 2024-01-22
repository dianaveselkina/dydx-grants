import React from 'react';
import './index.css';

export const FundedCard = () => {
  return (
    <div className="fundedcard__wrapper">
      <p className="fundedcard__text">Crowdfund</p>
      <h3>Funding rates page</h3>
      <p className="fundedcard__text">Funding amount: $5,000 - $6,000</p>
      <p className="fundedcard__info">
        Grant will be used to build a dedicated web app to give traders a view
        of all dYdX asset funding rates across multiple timeframes. The page
        will be interactive to include deep diving across different assets and
        historical analysis of changing rates. It will also include API
        functionalities to allow developer access.
      </p>
      <div className="fundedcard__avatar1"></div>
    </div>
  );
};

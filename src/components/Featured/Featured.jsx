import React from 'react';
import './index.css';
import { Button } from '../Button/Button';

export const Featured = () => {
  return (
    <div className="featured">
      <div className="container">
        <h2 className="featured__title">Projects built with grants</h2>
        <p className="featured__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nulla
          risus, consectetur ut bibendum non, gravida non libero.
        </p>
        <Button text="View all funded projects" />
        <div className="featured__cards">
          <div className="featured__card">
            <p>Crowdfund</p>
            <h3>Funding rates page</h3>
            <p>Funding amount: $5,000 - $6,000</p>
            <p>
              Grant will be used to build a dedicated web app to give traders a
              view of all dYdX asset funding rates across multiple timeframes.
              The page will be interactive to include deep diving across
              different assets and historical analysis of changing rates. It
              will also include API functionalities to allow developer access.
            </p>
            <div className="card__avatar">
              <img src="./img/Avatar1.png" alt="avatar"></img>
            </div>
          </div>
          <div className="featured__card">
            <p>Edition</p>
            <h3>Tradingview integration</h3>
            <p>Funding amount: $5,000 - $6,000</p>
            <p>
              The grant will be used to build a web application that integrates
              Tradingview strategies into a dYdX Trading account to execute
              trades directly through a strategy. Users will be able to tap into
              Tradingview resources and test out different ...
            </p>
            <div className="card__avatar">
              <img src="./img/Avatar2.png" alt="avatar"></img>
            </div>
          </div>
          <div className="featured__card">
            <p>Entry</p>
            <h3>Rewards optimization research and paper</h3>
            <p>Funding amount: $5,000 - $6,000</p>
            <p>
              The Grant will be used to write a full research report and code
              samples that will determine optimal trading strategies for rewards
              maximization. The paper will be marketed across several platforms
              and shared among trading circles to help readership.
            </p>
            <div className="card__avatar">
              <img src="./img/Avatar3.png" alt="avatar"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import './index.css';

export const Featured = () => {
  return (
    <div className="featured">
      <div className="container">
        <h2 className="featured__title">Projects built with grants</h2>
        <p className="featured__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nulla
          risus, consectetur ut bibendum non, gravida non libero.
        </p>
        <div className="hero__btn">
          <button className="featured__btn">
            <span>View all funded projects</span>
          </button>
        </div>
        <div className="featured__cards">
          <div className="featured__card">
            <p className="card__text">Crowdfund</p>
            <h3>Funding rates page</h3>
            <p className="card__text">Funding amount: $5,000 - $6,000</p>
            <p className="card__info">
              Grant will be used to build a dedicated web app to give traders a
              view of all dYdX asset funding rates across multiple timeframes.
              The page will be interactive to include deep diving across
              different assets and historical analysis of changing rates. It
              will also include API functionalities to allow developer access.
            </p>
            <div className="card__avatar1"></div>
          </div>
          <div className="featured__card">
            <div className="card__empty"></div>
            <div className="featured__wrapper">
              <p className="card__text">Edition</p>
              <h3>Tradingview integration</h3>
              <p className="card__text">Funding amount: $5,000 - $6,000</p>
              <p className="card__info">
                The grant will be used to build a web application that
                integrates Tradingview strategies into a dYdX Trading account to
                execute trades directly through a strategy. Users will be able
                to tap into Tradingview resources and test out different ...
              </p>
            </div>
            <div className="card__avatar2"></div>
          </div>
          <div className="featured__card">
            <p className="card__text">Entry</p>
            <h3>Rewards optimization research and paper</h3>
            <p className="card__text">Funding amount: $5,000 - $6,000</p>
            <p className="card__info">
              The Grant will be used to write a full research report and code
              samples that will determine optimal trading strategies for rewards
              maximization. The paper will be marketed across several platforms
              and shared among trading circles to help readership.
            </p>
            <div className="card__avatar3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

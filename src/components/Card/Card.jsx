import React from 'react';
import './index.css';
import { Button } from '../Button/Button';
export const Card = () => {
  return (
    <div className="card__wrapper">
      <div>
        <h3 className="card__title">Funding Rate Page</h3>
        <p className="card__description">
          Page that provides a live look at all funding rates with popular
          timeframes in annualized format
        </p>
        <span className="card__text">Funding amount: $25,000 - $40,000</span>
      </div>
      <Button />
    </div>
  );
};

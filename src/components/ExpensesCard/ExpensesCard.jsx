import React from 'react';
import { ReactComponent as Arrow } from './img/arrow-icon.svg';
import './index.css';

export const ExpensesCard = () => {
  return (
    <div className="expenses__card">
      <div className="expenses__selling">
        <h3 className="expenses__title">Airtable Yearly Subscription</h3>
        <span className="expenses__text">Vendor</span>
        <p className="expenses__description">
          Airtable is used to build the application form and store all
          application data.
        </p>
      </div>
      <div className="expenses__price">
        <span>$500.00</span>
        <Arrow />
      </div>
    </div>
  );
};

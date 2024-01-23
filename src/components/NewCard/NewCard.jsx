import React from 'react';
import './index.css';
export const NewCard = () => {
  return (
    <div className="news__card">
      <div className="new__image"></div>
      <div className="news__wrapper">
        <p className="news__text1">Funding round</p>
        <h3>Round 9 of approvals</h3>
        <p className="news__text1">January 1, 2022</p>
      </div>
    </div>
  );
};

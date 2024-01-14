import React from 'react';
import './index.css';

export const News = () => {
  return (
    <div className="news">
      <div className="container">
        <h2 className="news__title">What’s new?</h2>
        <p className="news__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nulla
          risus, consectetur ut bibendum non, gravida non libero.
        </p>
        <div className="hero__btn">
          <button className="featured__btn">
            <span>Read more on our blog</span>
          </button>
        </div>
        <div className="news__cards">
          <div className="news__card">
            <img src="./img/new-img1.png" alt="scheme"></img>
            <p className="news__text1">Funding round</p>
            <h3>Round 9 of approvals</h3>
            <p className="news__text">January 1, 2022</p>
          </div>
          <div className="news__card">
            <img src="./img/new-img2.png" alt="scheme"></img>
            <p className="news__text1">Funding round</p>
            <h3>Round 8 of approvals</h3>
            <p className="news__text">January 1, 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
};

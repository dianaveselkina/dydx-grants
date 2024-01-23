import React from 'react';
import './index.css';
import { NewCard } from '../NewCard/NewCard';

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
          <NewCard />
          <NewCard />
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { Header } from '../components/Header/Header';

import { Footer } from '../components/Footer/Footer';

import './index.css';

export const BlogPage = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <h1 className="discovers__title">Blog</h1>
        <div className="discovers__filter filter1">
          <button className="discovers__btn">Latest</button>
          <button className="discovers__btn">Funding round</button>
          <button className="discovers__btn">Spotlight</button>
          <button className="discovers__btn">News & updates</button>
        </div>
        <div className="discovers__cards expenses__cards"></div>
      </div>
      <Footer />
    </div>
  );
};

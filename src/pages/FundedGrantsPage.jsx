import React from 'react';
import { Header } from '../components/Header/Header';

import { Creation } from '../components/Creation/Creation';
import { Footer } from '../components/Footer/Footer';

import './index.css';
export const FundedGrantsPage = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <h1 className="funded__title">Funded grants</h1>

        <div className="funded__filter">
          <button className="funded__btn">All</button>
          <button className="funded__btn">Open</button>
          <button className="funded__btn">Funded</button>
          <button className="funded__btn">Completed</button>
        </div>

        <div className="funded__cards"></div>
      </div>
      <Creation />
      <Footer />
    </div>
  );
};

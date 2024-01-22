import React from 'react';
import { Header } from '../components/Header/Header';

import { Creation } from '../components/Creation/Creation';
import { Footer } from '../components/Footer/Footer';

import './index.css';
export const ExpensesPage = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <h1 className="discovers__title">Program expenses</h1>
        <div className="discovers__filter">
          <button className="discovers__btn">All</button>
          <button className="discovers__btn">Open</button>
          <button className="discovers__btn">Funded</button>
          <button className="discovers__btn">Completed</button>
        </div>

        <div className="discovers__cards"></div>
      </div>
      <Creation />
      <Footer />
    </div>
  );
};

import React from 'react';
import { Header } from '../components/Header/Header';

import { Footer } from '../components/Footer/Footer';
import { ExpensesCard } from '../components/ExpensesCard/ExpensesCard';
import './index.css';

export const ExpensesPage = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <h1 className="discovers__title">Program expenses</h1>
        <div className="discovers__filter filter1">
          <button className="discovers__btn">All</button>
          <button className="discovers__btn">Category</button>
          <button className="discovers__btn">Category</button>
          <button className="discovers__btn">Category</button>
          <button className="discovers__btn">Category</button>
        </div>
        <div className="discovers__cards expenses__cards">
          <ExpensesCard />
          <ExpensesCard />
          <ExpensesCard />
          <ExpensesCard />
          <ExpensesCard />
          <ExpensesCard />
          <ExpensesCard />
          <ExpensesCard />
          <ExpensesCard />
          <ExpensesCard />
        </div>
      </div>
      <Footer />
    </div>
  );
};

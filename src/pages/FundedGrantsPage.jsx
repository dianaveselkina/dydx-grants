import React from 'react';
import { Header } from '../components/Header/Header';

import { Creation } from '../components/Creation/Creation';
import { Footer } from '../components/Footer/Footer';

import './index.css';
import { FundedCard } from '../components/FundedCard/FundedCard';
export const FundedGrantsPage = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <h1 className="funded__title">Funded grants</h1>
        <div className="funded__filter">
          <button className="funded__btn">All</button>
          <button className="funded__btn">Technical / Tool Development</button>
          <button className="funded__btn">Governance</button>
          <button className="funded__btn">Growth / Marketing</button>
          <button className="funded__btn">Analytics</button>
          <button className="funded__btn">Third Party Provider</button>
        </div>
        <div className="funded__cards">
          <FundedCard />
          <FundedCard />
          <FundedCard />
          <FundedCard />
          <FundedCard />
          <FundedCard />
          <FundedCard />
          <FundedCard />
          <FundedCard />
        </div>
      </div>
      <Creation />
      <Footer />
    </div>
  );
};

import React from 'react';
import { Header } from '../components/Header/Header';

import { Creation } from '../components/Creation/Creation';
import { Footer } from '../components/Footer/Footer';
import { Card } from '../components/Card/Card';

export const DiscoversPage = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <h1 className="discovers__title">Discover initiatives (RFPs)</h1>
        <p className="discovers__text">
          The list below includes initial ideas that we think could make
          excellent Grants. This is a living list that will continue to update
          as ideas popup.
        </p>
        <div className="discovers__filter">
          <button className="discovers__btn">All</button>
          <button className="discovers__btn">Open</button>
          <button className="discovers__btn">Funded</button>
          <button className="discovers__btn">Completed</button>
        </div>

        <div className="discovers__cards">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <Creation />
      <Footer />
    </div>
  );
};

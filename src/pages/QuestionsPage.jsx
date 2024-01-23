import React from 'react';
import { Header } from '../components/Header/Header';

import { Footer } from '../components/Footer/Footer';
import './index.css';
import { Creation } from '../components/Creation/Creation';

export const QuestionsPage = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <h1 className="application__title">Frequently asked questions</h1>
      </div>
      <Creation />
      <Footer />
    </div>
  );
};

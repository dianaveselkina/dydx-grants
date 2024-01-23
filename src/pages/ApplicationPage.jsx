import React from 'react';
import { Header } from '../components/Header/Header';
import { Form } from '../components/Form/Form';
import { Footer } from '../components/Footer/Footer';
import './index.css';

export const ApplicationPage = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <h1 className="application__title">Apply for a grant</h1>
        <p className="application__text">
          Please complete the application below for Grant consideration! Learn
          more about the criteria used for selecting grants.
        </p>
        <Form />
      </div>
      <Footer />
    </div>
  );
};

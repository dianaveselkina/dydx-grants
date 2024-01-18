import React from 'react';
import { Header } from '../components/Header/Header';
import { Hero } from '../components/Hero/Hero';
import { Featured } from '../components/Featured/Featured';
import { News } from '../components/News/News';
import { Frequently } from '../components/Frequently/Frequently';
import { Process } from '../components/Process/Process';
import { Creation } from '../components/Creation/Creation';
import { Footer } from '../components/Footer/Footer';

export const HomePage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Featured />
      <News />
      <Frequently />
      <Process />
      <Creation />
      <Footer />
    </div>
  );
};

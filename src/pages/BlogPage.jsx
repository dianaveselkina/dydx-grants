import React from 'react';
import { Header } from '../components/Header/Header';
import { NewCard } from '../components/NewCard/NewCard';
import { Footer } from '../components/Footer/Footer';
import './index.css';

export const BlogPage = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <h1 className="blog__title">Blog</h1>
        <div className="blog__filter">
          <button className="blog__btn">Latest</button>
          <button className="blog__btn">Funding round</button>
          <button className="blog__btn">Spotlight</button>
          <button className="blog__btn">News & updates</button>
        </div>
        <div className="blog__cards">
          <NewCard />
          <NewCard />
          <NewCard />
          <NewCard />
          <NewCard />
          <NewCard />
        </div>
        <div className="blog__loading">
          <button className="blog__btn">Load more posts</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

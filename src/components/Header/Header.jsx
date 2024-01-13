import React from 'react';
import { ReactComponent as Logo } from './img/Logo.svg';
import { Button } from '../Button/Button';

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Logo />
          <nav className="header__nav">
            <ul class="nav__list">
              <li>
                <a href="/">Discover initiatives</a>
              </li>
              <li>
                <a href="/">Funded grants</a>
              </li>
              <li>
                <a href="/">Program expenses</a>
              </li>
              <li>
                <a href="/">Blog</a>
              </li>
              <li>
                <a href="/">FAQ</a>
              </li>
            </ul>
          </nav>
          <Button />
        </div>
      </div>
    </header>
  );
};

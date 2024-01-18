import React from 'react';
import { ReactComponent as Logo } from './img/Logo.svg';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';

import './index.css';

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Link to="/">
            <Logo />
          </Link>
          <nav className="header__nav">
            <ul class="nav__list">
              <li>
                <Link to="/discovers">Discover initiatives</Link>
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
              <Button text="Apply for grant" />
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

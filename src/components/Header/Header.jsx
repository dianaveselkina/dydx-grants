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
                <Link to="/funded">Funded grants</Link>
              </li>
              <li>
                <Link to="/expenses">Program expenses</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/questions">FAQ</Link>
              </li>
              <Link to="/application">
                <Button text="Apply for grant" />
              </Link>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

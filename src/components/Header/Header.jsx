import React from 'react';
import { ReactComponent as Logo } from './img/Logo.svg';
import { ReactComponent as Menu } from './img/menu-icon.svg';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './index.css';

export const Header = () => {
  const [open, SetOpen] = useState();
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Link to="/">
            <Logo />
          </Link>
          <nav className={`header__nav ${open ? 'active' : ''}`}>
            <ul className="nav__list">
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
          <button className="header__menu" onClick={() => SetOpen(!open)}>
            <Menu />
          </button>
        </div>
      </div>
    </header>
  );
};

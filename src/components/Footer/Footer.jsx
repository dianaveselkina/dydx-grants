import React from 'react';
import './index.css';
import { ReactComponent as LogoFooter } from './img/logo-footer.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <LogoFooter />
          <nav className="footer__nav">
            <ul class="nav__list">
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">FAQ</a>
              </li>
              <li>
                <a href="/">Brand assets</a>
              </li>
              <li>
                <a href="/">dYdX Foundation</a>
              </li>
              <li>
                <a href="/">dYdX trading</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="footer__social"></div>
      </div>
    </footer>
  );
};

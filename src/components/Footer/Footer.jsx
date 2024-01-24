import React from 'react';
import './index.css';
import { ReactComponent as LogoFooter } from './img/logo-footer.svg';
import { ReactComponent as Arrow } from './img/icon-arrow.svg';
import { ReactComponent as Twitter } from './img/twitter.svg';
import { ReactComponent as Discord } from './img/discord.svg';
export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__logo">
            <LogoFooter />
            <nav className="footer__nav">
              <ul className="nav__list-footer">
                <li>
                  <a className="footer__link" href="/">
                    About
                  </a>
                </li>
                <li className="footer__link">
                  <a href="/">FAQ</a>
                </li>
                <li className="footer__link">
                  <a href="/">Brand assets</a>
                </li>
                <li className="footer__link">
                  <a href="/">dYdX Foundation</a>
                  <Arrow />
                </li>
                <li className="footer__link">
                  <a href="/">dYdX trading</a>
                  <Arrow />
                </li>
              </ul>
            </nav>
          </div>
          <div className="footer__social">
            <Twitter />
            <Discord />
          </div>
        </div>
      </div>
    </footer>
  );
};

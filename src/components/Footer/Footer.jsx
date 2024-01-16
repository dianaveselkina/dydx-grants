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
                <a href="/">
                  dYdX Foundation
                  <Arrow />
                </a>
              </li>
              <li>
                <a href="/">
                  dYdX trading
                  <Arrow />
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="footer__social">
          <Twitter />
          <Discord />
        </div>
      </div>
    </footer>
  );
};

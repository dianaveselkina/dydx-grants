import React from 'react';
import './index.css';
export const Form = () => {
  return (
    <div className="form">
      <form>
        <div className="application__form">
          <label class="form__label">
            <span>Name *</span>
            <input class="create__input" type="text" name="name" />
          </label>
        </div>
        <div className="application__form">
          <label class="form__label">
            <span>Email *</span>
            <span>Primary contact if applying as a team/company</span>
            <input class="create__input" type="email" name="email" />
          </label>
        </div>
        <div className="application__form">
          <label class="form__label">
            <span>About you *</span>
            <span>Tell us about yourself and/or your tram</span>
            <textarea
              class="create__input"
              type="email"
              name="email"
            ></textarea>
          </label>
        </div>
        <div className="application__form">
          <label class="form__label">
            <span>Additional Links</span>
            <span>
              If helpful, please share any links about you (e.g Website, Github,
              Twitter)
            </span>
            <textarea class="form__label" type="text" name="message"></textarea>
          </label>
        </div>
      </form>
    </div>
  );
};

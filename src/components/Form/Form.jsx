import React from 'react';
import './index.css';
export const Form = () => {
  return (
    <div className="form">
      <form>
        <h2 className="form__title">Grant application</h2>
        <div className="application__forms">
          <div className="application__form">
            <label className="form__label"></label>
            <p className="form__text">Name *</p>
            <input className="create__input" type="text" name="name" />
          </div>
          <div className="application__form">
            <label className="form__label">
              <p className="form__text">Email *</p>
              <p className="form__text">
                Primary contact if applying as a team/company
              </p>
            </label>
            <input className="create__input" type="email" name="email" />
          </div>
          <div className="application__form">
            <label className="form__label">
              <p className="form__text">About you *</p>
              <p className="form__text">
                Tell us about yourself and/or your tram
              </p>
            </label>
            <textarea
              className="create__input"
              type="email"
              name="email"
            ></textarea>
          </div>
          <div className="application__form">
            <label className="form__label">
              <p className="form__text">Additional Links</p>
              <p className="form__text">
                If helpful, please share any links about you (e.g Website,
                Github, Twitter)
              </p>
            </label>
            <textarea
              className="create__input"
              type="text"
              name="message"
            ></textarea>
          </div>
        </div>
      </form>
    </div>
  );
};

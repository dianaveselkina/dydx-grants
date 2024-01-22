import React from 'react';
import './index.css';
export const Switch = () => {
  return (
    <>
      <label className="switch">
        <input type="checkbox" className="switch__input"></input>
        <span className="switch__slider"></span>
      </label>
    </>
  );
};

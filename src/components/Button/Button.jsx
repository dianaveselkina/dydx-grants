import React from 'react';
import './index.css';
export const Button = ({ ...props }) => {
  const { text = '' } = props;

  return <button className="button">{text}</button>;
};

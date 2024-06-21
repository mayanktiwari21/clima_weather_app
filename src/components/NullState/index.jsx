import React from 'react';

import NullStateImage from '../../assets/images/null-state.jpg';
import ErrorImage from '../../assets/images/error.jpg';

import './styles.css';

export const NullState = ({ message, isError }) => {
  return (
    <div className="null-state__wrapper">
      <img
        className="null-state__img"
        src={isError ? ErrorImage : NullStateImage}
        alt="Null State"
      />
      <p className={`null-state__message ${isError && 'null-state__message--error'}`}>{message}</p>
    </div>
  );
};

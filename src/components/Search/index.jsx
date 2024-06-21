import React from 'react';

import './styles.css';

const Search = ({ type, placeholder, onTextChange }) => {
  return (
    <input className="search" type={type} placeholder={placeholder} onChange={onTextChange}></input>
  );
};

export default Search;

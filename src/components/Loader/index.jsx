import React from 'react';

import LoaderGif from '../../assets/images/loader.svg';

import './styles.css';

const Loader = () => {
  return (
    <div>
      <img className='loader' src={LoaderGif} alt="Loader" />
    </div>
  );
};

export default Loader;

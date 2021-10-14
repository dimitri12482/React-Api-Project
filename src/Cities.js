/* Editing cities component */

import React from 'react';
import './Cities.css';

const Cities = ({
  name,
  city,
  country,
  volume,

}) => {

  /* I had a little difficulty to return classes and connect them to App.js file. */
  
  return (
    <div className='cities-container'>
      <div className='cities-row'>
        <div className='cities'>
          <h1>{name}</h1>
        </div>
        <div className='cities-data'>
          <p className='cities-country'>{country}</p>
          <p className='cities-volume'>{volume.toLocaleString()}</p>

        </div>
      </div>
    </div>
  );
};

export default Cities;
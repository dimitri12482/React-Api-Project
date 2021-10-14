/* Create React app and installed Axios */

import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './App.css';
import Cities from './Cities';

function App() {
 const [cities, setCities] = useState([])
 const [search, setSearch] = useState('');

 /* Getting the API Link */

  useEffect(() => {
  axios.get('https://docs.openaq.org/v2/cities?limit=100&page=1&offset=0&sort=asc&country_id=UK&order_by=city')
  .then(res => {
    setCities(res.data);
    console.log(res.data);
  })
  .catch(error => console.log(error));
}, []);

const handleChange = e => {
setSearch(e.target.value);
};

const filteredCities = cities.filter(cities =>
  cities.name.toLowerCase().includes(search.toLowerCase())
);

/* Mapping through API Data */

return (
  <div className='cities-app'>
    <div className='cities-search'>
      <h1 className='cities-text'>Search a city</h1>
      <form>
        <input
          className='cities-input'
          type='text'
          onChange={handleChange}
          placeholder='Search'
        />
      </form>
    </div>

    {filteredCities.map(cities => {
      return (
          <Cities
            key={cities.id}
            name={cities.name}
            city={cities.city}
            country={cities.country}
          />
        );
      })}
    </div>
  );
}

export default App;

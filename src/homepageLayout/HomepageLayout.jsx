import React, { useEffect, useState } from 'react';
import '../homepageLayout/homepageLayout.scss';
import getCountries from '../api/getCountries';

const HomepageLayout = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries().then(data => setCountries(data));
  }, []);

  console.log(countries);

  return (
    <div className="homepage">
      <div className="homepage__content"></div>
    </div>
  );
};

export default HomepageLayout;

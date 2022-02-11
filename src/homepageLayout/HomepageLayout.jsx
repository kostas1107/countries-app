import React, { useEffect, useState } from 'react';
import '../homepageLayout/homepageLayout.scss';
import getCountries from '../api/getCountries';
import CountryCard from '../countryCard/CountryCard';

const HomepageLayout = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries().then(data => setCountries(data));
  }, []);

  console.log(countries);

  return (
    <div className="homepage">
      <div className="homepage__content">
        <section className="homepage__cards">
          {countries.map(country => (
            <CountryCard
              countryFlag={country.flags.png}
              countryName={country.name.common}
              countryPopulation={country.population}
              countryRegion={country.region}
              countryCapital={country.capital}
            />
          ))}
        </section>
      </div>
    </div>
  );
};

export default HomepageLayout;

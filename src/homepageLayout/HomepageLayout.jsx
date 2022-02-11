import React, { useEffect, useState } from 'react';
import '../homepageLayout/homepageLayout.scss';
import getCountries from '../api/getCountries';
import CountryCard from '../countryCard/CountryCard';
import FilterDropdown from '../filterDropdown/FilterDropdown';

const HomepageLayout = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries().then(data => setCountries(data));
  }, []);

  console.log(countries);

  return (
    <div className="homepage">
      <div className="homepage__content">
        <section className="homepage__search-and-filter">
          <FilterDropdown
            items={[
              { value: 'Africa', id: 1 },
              { value: 'America', id: 2 },
              { value: 'Asia', id: 3 },
              { value: 'Europe', id: 4 },
              { value: 'Oceania', id: 5 }
            ]}
          />
        </section>
        <section className="homepage__cards">
          {countries.map(country => (
            <CountryCard
              key={country.name.common}
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

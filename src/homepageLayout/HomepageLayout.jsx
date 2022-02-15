import React, { useEffect, useState } from 'react';
import '../homepageLayout/homepageLayout.scss';
import getCountries from '../api/getCountries';
import CountryCard from '../countryCard/CountryCard';
import FilterDropdown from '../filterDropdown/FilterDropdown';
import SearchBar from '../searchBar/SearchBar';

const HomepageLayout = () => {
  const [countries, setCountries] = useState([]);
  const [initialCountries, setInitialCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    getCountries().then(data => setCountries(data));
  }, []);

  useEffect(() => {
    getCountries().then(data => setInitialCountries(data));
  }, []);

  return (
    <div className="homepage">
      <div className="homepage__content">
        <section className="homepage__search-and-filter">
          <SearchBar
            data={
              filteredCountries.length > 0
                ? filteredCountries
                : initialCountries
            }
            updateData={setCountries}
          />
          <FilterDropdown
            items={[
              { value: 'All', id: 1 },
              { value: 'Africa', id: 2 },
              { value: 'Americas', id: 3 },
              { value: 'Asia', id: 4 },
              { value: 'Europe', id: 5 },
              { value: 'Oceania', id: 6 }
            ]}
            initialCountries={initialCountries}
            setCountries={setCountries}
            setFilteredCountries={setFilteredCountries}
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

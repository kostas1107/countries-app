import { useState } from 'react';

const useFilterDropdown = () => {
  const [showItems, setShowItems] = useState(false);
  const [region, setRegion] = useState('All');

  const handleDropdown = () => {
    setShowItems(!showItems);
  };

  const filterRegion = (
    event,
    initialCountries,
    setCountries,
    setFilteredCountries
  ) => {
    let selectedRegion = event.target.innerText;
    setRegion(selectedRegion);
    if (selectedRegion !== 'All') {
      let filteredCountries = initialCountries.filter(
        country => country.region === selectedRegion
      );
      setCountries(filteredCountries);
      setFilteredCountries(filteredCountries);
    } else {
      setCountries(initialCountries);
      setFilteredCountries(initialCountries);
    }
    handleDropdown();
  };

  return {
    setShowItems,
    showItems,
    handleDropdown,
    filterRegion,
    region
  };
};

export default useFilterDropdown;

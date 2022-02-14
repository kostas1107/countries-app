import { useState } from 'react';

const useFilterDropdown = () => {
  const [showItems, setShowItems] = useState(false);

  const handleDropdown = () => {
    setShowItems(!showItems);
  };

  const filterRegion = (event, initialCountries, setCountries) => {
    let selectedRegion = event.target.innerText;
    if (selectedRegion !== 'All') {
      let filteredCountries = initialCountries.filter(
        country => country.region === selectedRegion
      );
      setCountries(filteredCountries);
    } else {
      setCountries(initialCountries);
    }
    handleDropdown();
  };

  return {
    setShowItems,
    showItems,
    handleDropdown,
    filterRegion
  };
};

export default useFilterDropdown;

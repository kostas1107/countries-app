import React from 'react';
import '../searchBar/searchBar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <FontAwesomeIcon
        className="search-bar__magnifying-glass-icon"
        icon={faMagnifyingGlass}
      />
      <input
        className="search-bar__input"
        placeholder="Search for a country..."
      ></input>
    </div>
  );
};

export default SearchBar;

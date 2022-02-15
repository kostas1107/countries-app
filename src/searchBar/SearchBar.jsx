import React from 'react';
import '../searchBar/searchBar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import useSearchBar from './useSearchBar';

const SearchBar = props => {
  const {
    handleChange,
    searchedText,
    searchedTextMatches,
    handleSearch,
    handleClear
  } = useSearchBar();
  return (
    <div className="search-bar">
      <FontAwesomeIcon
        className="search-bar__magnifying-glass-icon"
        icon={faMagnifyingGlass}
      />
      <input
        className="search-bar__input"
        placeholder="Search for a country..."
        onChange={e => {
          handleChange(e, props.data, props.updateData);
        }}
        value={searchedText}
      />
      {searchedText && (
        <FontAwesomeIcon
          className="search-bar__xmark-icon"
          icon={faXmark}
          onClick={e => {
            handleClear(props.data, props.updateData);
          }}
        />
      )}
      <div className="search-bar__matches-box">
        {searchedTextMatches.map(match => (
          <div
            key={match.name.common}
            className="search-bar__match"
            onClick={e => handleSearch(e, props.data, props.updateData)}
          >
            {match.name.common}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;

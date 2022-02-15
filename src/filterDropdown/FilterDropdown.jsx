import React from 'react';
import '../filterDropdown/filterDropdown.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import useFilterDropdown from './useFilterDropdown';

const FilterDropdown = props => {
  const { showItems, handleDropdown, filterRegion, region } =
    useFilterDropdown();
  const dropdownItems = props.items;

  return (
    <div className="filter">
      <button className="filter__dropdown-btn" onClick={handleDropdown}>
        <span>Filter by Region: {region}</span>
        <FontAwesomeIcon icon={showItems ? faAngleUp : faAngleDown} />
      </button>
      {showItems && (
        <div className="filter__dropdown-box">
          {dropdownItems.map(item => (
            <div
              className="filter__dropdown-option"
              key={item.id}
              onClick={e => {
                filterRegion(
                  e,
                  props.initialCountries,
                  props.setCountries,
                  props.setFilteredCountries
                );
              }}
            >
              {item.value}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;

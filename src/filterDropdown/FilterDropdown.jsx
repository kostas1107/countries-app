import React, { useState } from 'react';
import '../filterDropdown/filterDropdown.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const FilterDropdown = props => {
  const dropdownItems = props.items;
  const [showItems, setShowItems] = useState(false);

  const handleDropdown = () => {
    setShowItems(!showItems);
  };

  return (
    <div className="filter">
      <button className="filter__dropdown-btn" onClick={handleDropdown}>
        <span>Filter by Region</span>
        <FontAwesomeIcon icon={faAngleDown} />
      </button>
      <div
        style={{ display: showItems ? 'block' : 'none' }}
        className="filter__dropdown-box"
      >
        {dropdownItems.map(item => (
          <div className="filter__dropdown-option" key={item.id}>
            {item.value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterDropdown;

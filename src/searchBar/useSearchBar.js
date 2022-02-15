import { useState } from 'react';

const useSearchBar = () => {
  const [searchedText, setSearchedText] = useState('');
  const [searchedTextMatches, setSearchedTextMatches] = useState([]);

  const handleChange = (event, data) => {
    const searchInputText = event.target.value;
    setSearchedText(searchInputText);
    const sortedData = data.filter(value => {
      return value.name.common
        .toLowerCase()
        .includes(searchInputText.toLowerCase());
    });
    if (searchInputText === '') {
      setSearchedTextMatches([]);
    } else {
      setSearchedTextMatches(sortedData);
    }
  };

  return { handleChange, searchedText, searchedTextMatches };
};

export default useSearchBar;

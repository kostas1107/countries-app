import { useState } from 'react';

const useSearchBar = () => {
  const [searchedText, setSearchedText] = useState('');
  const [searchedTextMatches, setSearchedTextMatches] = useState([]);

  const handleChange = (event, data, updateData) => {
    const searchInputText = event.target.value;
    setSearchedText(searchInputText);
    const sortedData = data.filter(value => {
      return value.name.common
        .toLowerCase()
        .includes(searchInputText.toLowerCase());
    });
    if (searchInputText === '') {
      setSearchedTextMatches([]);
      updateData(data);
    } else {
      setSearchedTextMatches(sortedData);
    }
  };

  const handleSearch = (event, data, updateData) => {
    const selectedMatch = event.target.textContent;
    setSearchedText(selectedMatch);
    setSearchedTextMatches([]);
    const filteredByWord = data.filter(value => {
      return value.name.common === selectedMatch;
    });
    updateData(filteredByWord);
  };

  const handleClear = (data, updateData) => {
    setSearchedText('');
    setSearchedTextMatches([]);
    updateData(data);
  };

  return {
    handleChange,
    searchedText,
    searchedTextMatches,
    handleSearch,
    handleClear,
    setSearchedText
  };
};

export default useSearchBar;

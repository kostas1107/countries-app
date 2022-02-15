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

  const handleSearch = (event, data, updateData) => {
    const selectedMatch = event.target.textContent;
    setSearchedText(selectedMatch);
    setSearchedTextMatches([]);
    const filteredByWord = data.filter(value => {
      return value.name.common === selectedMatch;
    });
    updateData(filteredByWord);
  };

  return { handleChange, searchedText, searchedTextMatches, handleSearch };
};

export default useSearchBar;

import React, { useState, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';
import * as Hangul from 'hangul-js';
import { useDispatch } from 'react-redux';
import {
  fetchMockData,
  filterBrands,
  filterProducts,
  getBrandsList,
  rollbackProducts,
} from '../../store/searchList';

function SearchBar() {
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const valueLength = Hangul.disassemble(value).length;
    const searchValueLength = Hangul.disassemble(searchValue).length;

    // 입력값을 추가할때
    if (valueLength > searchValueLength) {
      dispatch(filterProducts(value));
    } else if (valueLength < searchValueLength) {
      dispatch(rollbackProducts(value));
    }

    dispatch(filterBrands(value));
    setSearchValue(value);
    console.log('value', value, 'searchValue', searchValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  //나중에 index로 분리
  useEffect(() => {
    const test = async () => {
      const res = await fetch('http://localhost:3000/api/mockData');
      const data = await res.json();
      dispatch(fetchMockData(data));
      dispatch(getBrandsList());
    };
    test();
  }, [dispatch]);

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Search..." onChange={handleChange} />
      <button type="submit">
        <FiSearch />
      </button>
    </form>
  );
}

export default SearchBar;

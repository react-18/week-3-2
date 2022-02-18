import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import * as Hangul from 'hangul-js';
import { useDispatch } from 'react-redux';
import {
  filterBrands,
  filterProducts,
  rollbackProducts,
} from '../../store/searchList';
import * as S from './styled';

function SearchBar() {
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const valueLength = Hangul.disassemble(value).length;
    const searchValueLength = Hangul.disassemble(searchValue).length;

    if (valueLength > searchValueLength) {
      dispatch(filterProducts(value));
    } else if (valueLength < searchValueLength) {
      dispatch(rollbackProducts(value));
    }

    dispatch(filterBrands(value));
    setSearchValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.Input type="text" placeholder="Search..." onChange={handleChange} />
      <button type="submit">
        <FiSearch size="30" />
      </button>
    </S.Form>
  );
}

export default SearchBar;

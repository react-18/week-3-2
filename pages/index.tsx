import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import ResultView from '../components/ResultView';
import SearchBar from '../components/SearchBar';
import { API_URL } from '../constants';
import { fetchMockData, getBrandsList } from '../store/searchList';
import { searchInfo } from '../store/types';

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(API_URL);
      const data: searchInfo[] = await res.json();

      dispatch(fetchMockData(data));
      dispatch(getBrandsList());
    };

    fetchData();
  }, []);

  return (
    <Wrap>
      <Content>
        <SearchBar />
        <ResultView />
      </Content>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  width: 550px;
  height: 600px;
`;

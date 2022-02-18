import React from 'react';
import { useSelector } from 'react-redux';
import { PRODUCT_NAME } from '../../constants';
import { RootState } from '../../store/store';
import BrandBtn from './BrandBtn';
import ProductItem from './ProductItem';
import * as S from './styled';

function ResultView() {
  const { products, brands } = useSelector(
    (state: RootState) => state.searchList.filterList,
  );
  if (!products.length && !brands.length) return null;

  return (
    <S.Wrap>
      <S.QuickButtonWrap>
        <S.QuickButtonContainer>
          {brands.length ? (
            brands.map((brand, i) => <BrandBtn key={i} brandName={brand} />)
          ) : (
            <p style={{ color: 'gray' }}> 브랜드 검색 결과 없음</p>
          )}
        </S.QuickButtonContainer>
      </S.QuickButtonWrap>
      <S.SearchResultWrap>
        <S.SearchResultContainer>
          {products.length ? (
            products.map((product, i) => (
              <ProductItem key={i} productName={product[PRODUCT_NAME]} />
            ))
          ) : (
            <p style={{ margin: '10px', color: 'gray' }}>제품 검색 결과 없음</p>
          )}
        </S.SearchResultContainer>
      </S.SearchResultWrap>
    </S.Wrap>
  );
}

export default ResultView;

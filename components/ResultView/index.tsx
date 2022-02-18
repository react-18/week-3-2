import React from 'react';
import BrandBtn from './BrandBtn';
import ProductItem from './ProductItem';
import * as S from '../../styles/resultView.styled';

function ResultView() {
  const brands = [] as string[];
  const products = [] as string[];
  return (
    <S.Wrapper>
      <S.QuickButtonWrapper>
        <S.QuickButtonContainer>
          {brands.map((brand, i) => (
            <BrandBtn key={i} brandName={brand} />
          ))}
        </S.QuickButtonContainer>
      </S.QuickButtonWrapper>
      <S.SearchResultWrapper>
        <S.SearchResultContainer>
          {products.map((product, i) => (
            <ProductItem key={i} productName={product} />
          ))}
        </S.SearchResultContainer>
      </S.SearchResultWrapper>
    </S.Wrapper>
  );
}

export default ResultView;

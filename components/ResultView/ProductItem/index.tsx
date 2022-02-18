import React from 'react';
import * as S from './styled';

function ProductItem({ productName }: { productName: string }) {
  return (
    <S.ProductNameContainer>
      <S.ProductName>{productName}</S.ProductName>
    </S.ProductNameContainer>
  );
}

export default ProductItem;

import React from 'react';
import * as S from './styled';

function BrandBtn({ brandName }: { brandName: string }) {
  return <S.BrandButton type="button">{brandName}</S.BrandButton>;
}

export default BrandBtn;

import React from 'react';
import BrandBtn from './BrandBtn';
import ProductItem from './ProductItem';

function ResultView() {
  const brands = [] as string[];
  const products = [] as string[];
  return (
    <div>
      <div>
        {brands.map((brand, i) => (
          <BrandBtn key={i} brandName={brand} />
        ))}
      </div>
      <div>
        {products.map((product, i) => (
          <ProductItem key={i} productName={product} />
        ))}
      </div>
    </div>
  );
}

export default ResultView;

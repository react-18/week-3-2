import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { searchInfo } from './types';
import * as Hangul from 'hangul-js';
import { BRAND_NAME, PRODUCT_NAME } from '../constants';

const initialState = {
  mockdata: [] as searchInfo[],
  brandList: [] as string[],
  filterList: {
    products: [] as searchInfo[],
    brands: [] as string[],
  },
};

const filterProduct = ({
  targetList,
  searchValue,
}: {
  targetList: searchInfo[];
  searchValue: string;
}) =>
  targetList.filter((item) => {
    const modifiedMockData = item[PRODUCT_NAME].replaceAll(
      ' ',
      '',
    ).toLowerCase();
    const modifiedSearchValue = searchValue.replaceAll(' ', '').toLowerCase();

    if (Hangul.search(modifiedMockData, modifiedSearchValue) < 0) {
      return false;
    } else {
      return true;
    }
  });

const getBrandsInData = (array: searchInfo[]) =>
  array.reduce((brands, item) => {
    if (item[BRAND_NAME] && !brands.includes(item[BRAND_NAME])) {
      brands.push(item[BRAND_NAME]);
    }

    return brands;
  }, []);

const findBrandinBrands = ({
  brandList,
  searchValue,
}: {
  brandList: string[];
  searchValue: string;
}) =>
  brandList.filter((item) => {
    const modifiedMockData = item.replaceAll(' ', '').toLowerCase();
    const modifiedSearchValue = searchValue.replaceAll(' ', '').toLowerCase();
    if (Hangul.search(modifiedMockData, modifiedSearchValue) < 0) {
      return false;
    } else {
      return true;
    }
  });

const SearchSlice = createSlice({
  name: 'searchState',
  initialState,
  reducers: {
    fetchMockData(state, action: PayloadAction<searchInfo[]>) {
      state.mockdata = action.payload;
    },
    getBrandsList(state) {
      state.brandList = getBrandsInData(state.mockdata);
    },
    filterBrands(state, action: PayloadAction<string>) {
      const isEmptyValue = action.payload.trim();
      if (!isEmptyValue) {
        state.filterList.brands = [];
      } else {
        state.filterList.brands = findBrandinBrands({
          brandList: state.brandList,
          searchValue: action.payload,
        });
      }
    },
    // 두번째 키워드가 진행됨에 따라 mockdata가 아닌 products에서 필터링하는 처리 필요
    //입력
    filterProducts(state, action: PayloadAction<string>) {
      const isEmptyValue = action.payload.trim();
      if (!isEmptyValue) {
        state.filterList.products = [];
      } else {
        const isProduct =
          state.filterList.products.length === 0
            ? state.mockdata
            : state.filterList.products;

        state.filterList.products = filterProduct({
          targetList: isProduct,
          searchValue: action.payload,
        });
      }
    },
    rollbackProducts(state, action: PayloadAction<string>) {
      const isEmptyValue = action.payload.trim();
      if (!isEmptyValue) {
        state.filterList.products = [];
      } else {
        state.filterList.products = filterProduct({
          targetList: state.mockdata,
          searchValue: action.payload,
        });
      }
    },
  },
});

export const {
  fetchMockData,
  filterProducts,
  rollbackProducts,
  getBrandsList,
  filterBrands,
} = SearchSlice.actions;
export default SearchSlice.reducer;

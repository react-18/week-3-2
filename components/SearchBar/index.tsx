import Reat, { useEffect, useState } from 'react';
import * as Hangul from 'hangul-js';

function SearchBar() {
  const [inputRealText, setInputRealText] = useState<string>('');
  const [toggleDetailView, setToggleDetailView] = useState<boolean>(false);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filteredBrands, setFilteredBrands] = useState([]);
  const [filteredBrand, setFilteredBrand] = useState([]);

  function onChangeText(e) {
    const text = e.target.value;
    setInputRealText(text);
  }

  function onToggleView(e) {
    if (e.target.nodeName === 'DIV') {
      setToggleDetailView(false);
    } else if (e.target.nodeName === 'INPUT') {
      setToggleDetailView(true);
    }
  }

  function getBrandsInData(data: Array): void {
    const brands = [];
    data.forEach((item) => {
      if (item.브랜드 && !brands.includes(item.브랜드)) {
        brands.push(item.브랜드);
      }
    });
    setFilteredBrands(brands);
  }

  function findBrandinBrands(): string {
    const filteredBr = filteredBrands.filter((item) => {
      const lowerInputText = inputRealText.replace(' ', '').toLowerCase();
      if (Hangul.search(item, lowerInputText) < 0) {
        return false;
      } else {
        return true;
      }
    });
    setFilteredBrand(filteredBr);
  }

  useEffect(() => {
    if (inputRealText.length === 0) {
      setFilteredData([]);
    } else {
      const filteredData = data.filter((item) => {
        const removeSpace = item.제품명.replace(' ', '').toLowerCase();
        const lowerInputText = inputRealText.replace(' ', '').toLowerCase();
        if (Hangul.search(removeSpace, lowerInputText) < 0) {
          return false;
        } else {
          return true;
        }
      });
      setFilteredData(filteredData);
      findBrandinBrands();
    }
  }, [inputRealText]);

  useEffect(() => {
    async function getData() {
      const data = await fetch('http://localhost:3000/api').then((res) =>
        res.json(),
      );
      setData(data.returnData);
      getBrandsInData(data.returnData);
    }
    getData();
  }, []);

  return (
    <div onClick={(e) => onToggleView(e)}>
      <input
        type="text"
        placeholder="Search..."
        value={inputRealText}
        onChange={(e) => onChangeText(e)}
        onClick={(e) => onToggleView(e)}
      />
      {toggleDetailView && filteredData.length > 0 && (
        <div style={{ width: '200px', backgroundColor: 'red' }}>
          <div>영양제 리스트</div>
          {filteredData.map((item) => (
            <h3>{item.제품명}</h3>
          ))}
        </div>
      )}
      {toggleDetailView && filteredBrand.length > 0 && (
        <div style={{ width: '200px', backgroundColor: 'red' }}>
          <div>브랜드 리스트</div>
          {filteredBrand.map((item) => (
            <button key={item} type="button">
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchBar;

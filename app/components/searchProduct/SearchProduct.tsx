import { useState } from 'react';
import './searchProduct.scss';
import axios from 'axios';

type Search = {
  keywordSearch: string,
  setKeywordSearch: any,
  setIsLoading: any
}

const SearchProduct = ({ keywordSearch, setKeywordSearch, setIsLoading }: Search) => {

  const [querySearch, setQuerySearch] = useState("");
  // const [isLoading, setIsLoading] = useState(true);
  const [results, setResult] = useState([]);

  const getSearch = async () => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_PRODUCT_SEARCH}?search_query=${querySearch}`);
    setTimeout(() => {
      setResult(response.data.result);
      console.log(results);
      setIsLoading(false);
    }, 1000)
  }
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setQuerySearch(e.target.value);
    setKeywordSearch(e.target.value);
    setIsLoading(true);
    getSearch();
  }
  return (
    <>
      <section className="searchProduct">
        <input type="text" placeholder='Search products here...' value={keywordSearch} onChange={handleSearch} />
        <div className="btnFilter">
          <button> Bubuk Minuman</button>
          <button> Topping</button>
          <button> Coffee</button>
          <button> Matcha</button>
          <button> Sample</button>
        </div>
      </section>
    </>
  );
}

export default SearchProduct;
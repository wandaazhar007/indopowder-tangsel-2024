import './searchProduct.scss';

type Search = {
  keywordSearch: string,
  setKeywordSearch: any
}
const SearchProduct = ({ keywordSearch, setKeywordSearch }: Search) => {
  return (
    <section className="searchProduct">
      <input type="text" placeholder='Search products here...' value={keywordSearch} onChange={(e) => setKeywordSearch(e.target.value)} />
      <div className="btnFilter">
        <button> Bubuk Minuman</button>
        <button> Topping</button>
        <button> Coffee</button>
        <button> Matcha</button>
        <button> Sample</button>
      </div>
    </section>
  );
}

export default SearchProduct;
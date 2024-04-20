import './searchProduct.scss';

const SearchProduct = () => {
  return (
    <section className="searchProduct">
      <input type="text" placeholder='Search products here...' />
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
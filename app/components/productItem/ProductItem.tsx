// import './productItem.scss';
// import Image from 'next/image';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
// import { ProductsType } from '@/app/types/types';
// import { useContext, useState } from 'react';
// import { CartContext } from '@/app/context/CartContex';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { SearchContext } from '@/app/context/SearchContext';

// const ProductItem = ({ id, name, category, price, urlImage, handleModal, isLoading }: ProductsType) => {

//   const cart = useContext(CartContext);
//   const searchContext: any = useContext(SearchContext);
//   const querySearch = searchContext.querySearch;

//   const handleClick2 = (id: number, nameProduct: string, price: number) => {
//     cart.addOneToCart(id, nameProduct, price);
//     notify();
//   }

//   const notify = () => {
//     toast.success('Item has been added in the cart!', {
//       position: "top-center",
//       autoClose: 5000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "light",
//     });
//   }
//   return (
//     <>
//       {!querySearch ?
//         (<>
//           {isLoading &&
//             <div className="boxProductsItemPage">
//               <div className="skeleton imageProductSkeleton">
//                 {/* <Image src="" width={300} height={300} alt='indopowder tangsel' /> */}
//               </div>
//               <hr />
//               <p className="skeleton categorySkeleton"></p>
//               <h1 className="skeleton titleSkeleton"></h1>
//               <p className="skeleton priceSkeleton"></p>
//               <button className="skeleton buttonAddToCartSkeleton" ></button>
//             </div>
//           }

//           {!isLoading &&
//             <div className="boxProductsItemPage" key={id}>
//               <div className="imageProduct" onClick={() => handleModal(id)}>
//                 <Image src={urlImage} width={300} height={300} alt='indopowder tangsel' />
//               </div>
//               <hr />
//               <p className="category">{category}</p>
//               <h1 className="title" onClick={() => handleModal(id)}>{name}</h1>
//               <p className="price">Rp. {price},-</p>
//               <button className="buttonAddToCart" onClick={() => handleClick2(id, name, price)}><FontAwesomeIcon icon={faCartArrowDown} className="icon" /> Add to cart</button>
//             </div>
//           }

//         </>
//         ) : ''}
//     </>
//   );
// }

// export default ProductItem;
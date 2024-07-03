'use client'
import { createContext, useEffect, useState } from "react";
import { ContexValueType, ProductsType } from "../types/types";

export const CartContext = createContext({
  items: [],
  getProductQuantity: () => { },
  addOneToCart: (id: number, name: string, price: number) => { },
  removeOneFromCart: (id: number) => { },
  deleteFromCart: (id: number) => { },
  getTotalCost: (): any => { return 0 }
});

export function CartProvider({ children }: any) {
  let cartFromLocalStorage = [];
  if (typeof window !== 'undefined') {
    const storedCart = localStorage.getItem('cart_kansha');
    cartFromLocalStorage = storedCart ? JSON.parse(storedCart) : [];

  }
  const [cartProducts, setCartProducts] = useState(cartFromLocalStorage || []);



  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cart_kansha', JSON.stringify(cartProducts));
    }
  }, [cartProducts]);

  function getProductQuantity(id: number) {
    const quantity = cartProducts.find((product: ProductsType) => product.id === id)?.quantity
    if (quantity === undefined) {
      return 0;
    }
    return quantity;
  }

  function addOneToCart(id: number, name: string, price: number) {
    const quantity = getProductQuantity(id);
    if (quantity === 0) {
      setCartProducts([...cartProducts, { id: id, name: name, price: price, quantity: 1 }]);
    } else {
      setCartProducts(cartProducts.map((product: ProductsType) => product.id === id ? { ...product, quantity: product.quantity + 1 } : product));
    }
  }

  function removeOneFromCart(id: number) {
    const quantity = getProductQuantity(id);

    if (quantity == 1) {
      deleteFromCart(id);
    } else {
      setCartProducts(
        cartProducts.map((product: ProductsType) =>
          product.id === id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
      )
    }
  }

  function deleteFromCart(id: number) {
    // setCartProducts((cartProducts: ProductsType) => cartProducts.filter((currentProduct: ProductsType) => {
    //   return currentProduct.id != id;
    // }))
    setCartProducts(cartProducts.filter((currentProduct: ProductsType) => currentProduct.id !== id));
  }

  function getTotalCost() {
    let totalCost = 0;
    const amount = cartProducts.reduce((sum: string, product: ProductsType) => sum + (product.price * product.quantity), 0)

    totalCost += amount
    return totalCost;
  }


  const contextValue: ContexValueType = {
    items: cartProducts,
    getProductQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost
  }

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  )

}

export default CartProvider;
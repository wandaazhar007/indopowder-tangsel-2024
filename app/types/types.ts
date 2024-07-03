export type ProductsType = {
  id: number,
  name: string,
  category: string | any,
  price: number,
  urlImage: string,
  handleClick: any,
  // quantity: any,
  // filter: any,
  handleModal: any,
  isLoading: boolean
  quantity: number;
}

export type ContexValueType = {
  items: [],
  getProductQuantity: any,
  // addOneToCart: (number: any) => void,
  addOneToCart: (id: number, name: string, price: number) => void;
  removeOneFromCart: (number: any) => void,
  deleteFromCart: (number: any) => void,
  getTotalCost: any
}

export type openModalTypes = {
  openModal: boolean,
  closeModal: any,
  propId: number
}
export type ProductsType = {
  id: number,
  name: string,
  category: string | any,
  price: number,
  urlImage: string,
  handleClick: any,
  quantity: any,
  filter: any
}

export type ContexValueType = {
  items: [],
  getProductQuantity: any,
  addOneToCart: (number: any) => void,
  removeOneFromCart: (number: any) => void,
  deleteFromCart: (number: any) => void,
  getTotalCost: any
}
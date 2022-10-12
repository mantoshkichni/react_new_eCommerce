import { createContext, useReducer, useState } from "react";
import { products } from "./api";
import { reducer } from "./reducer";

export const ProductContext = createContext();

export const Context = ({ children }) => {
  const [cart, setcart] = useState([]);
  const [total, setTotal] = useState();
  const [state, dispatch] = useReducer(reducer, {
    products: products,
    cart: cart
  });
  console.log(products);
  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

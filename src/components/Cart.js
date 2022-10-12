import { useContext } from "react";
import { ProductContext } from "../Context";
import { CartCard } from "./CartCard";
export const Cart = () => {
  const { state } = useContext(ProductContext);
  console.log(state.cart);
  return (
    <div className="cartItem">
      <CartCard cart={state.cart} />
    </div>
  );
};

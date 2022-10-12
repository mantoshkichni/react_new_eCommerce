import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../Context";
export const CartCard = ({ cart }) => {
  const { state, dispatch } = useContext(ProductContext);
  const [total, setTotal] = useState();
  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);
  return (
    <div>
      <h1>Total Amount: $ {total}</h1>
      {cart.map((item) => {
        return (
          <div className="cart-Container">
            <div className="cartCard">
              <div className="image">
                <img src={item.image}></img>
              </div>
              <div className="price">
                <h1>$ {item.price * item.qty}</h1>
              </div>
              <div className="count">
                <button
                  onClick={() =>
                    dispatch({
                      type: "CHANGE_CART_QTY",
                      payload: {
                        id: item.id,
                        qty: item.qty - 1
                      }
                    })
                  }
                >
                  -
                </button>
                <h1>{item.qty}</h1>
                <button
                  onClick={() =>
                    dispatch({
                      type: "CHANGE_CART_QTY",
                      payload: {
                        id: item.id,
                        qty: item.qty + 1
                      }
                    })
                  }
                >
                  +
                </button>
              </div>
              <div className="del_button ">
                <button
                  className="btn"
                  onClick={() =>
                    dispatch({
                      type: "REMOVE_FROM_CART",
                      payload: item
                    })
                  }
                >
                  <i class="bi bi-trash3-fill"></i>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

import StarRatings from "react-star-ratings";
import { useContext, useReducer, useState } from "react";
import { ProductContext } from "../Context";
import ReactModal from "react-modal";
export const Cart = ({ item }) => {
  const [popup, setpopup] = useState([]);
  const [showpopup, setshowpopup] = useState(false);
  const {
    state: { cart },
    dispatch
  } = useContext(ProductContext);
  console.log(cart);
  console.log(popup);
  const getdata = (item) => {
    setpopup([item]);
    setshowpopup(!showpopup);
  };
  const closemodel = () => {
    setshowpopup(!showpopup);
  };
  return (
    <div
      class="card m-2 mt-4 col col-md-3 col-sm-4 col-6 col-xsm-6"
      style={{ width: "12rem", backgroundImage: `URL(${item.image})` }}
    >
      {/* <img src={item.image} class="card-img-top" alt="..."/> */}
      <button className="description" onClick={() => getdata(item)}>
        i
      </button>
      <div class="card-body">
        <div>
          <h3 class="card-title">{item.category}</h3>
          <h4>${item.price}</h4>

          <StarRatings
            rating={item.rating.rate}
            starRatedColor="red"
            starSpacing="3px"
            numberOfStars={5}
            starDimension="15px"
            name="rating"
          />
        </div>
        {cart.some((p) => p.id === item.id) ? (
          <div>
            <button
              onClick={() =>
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: item
                })
              }
              className="remove_from_cart"
            >
              -
            </button>
          </div>
        ) : (
          <div>
            <button
              onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload: item
                })
              }
              className="add_to_cart"
            >
              +
            </button>
          </div>
        )}
        {/* <div>
    <button className="add_to_cart">+</button>
  </div> */}
      </div>
      <div className="pop-up-container">
        <div className="pop-up-content">
          {popup.map((item) => {
            return (
              <ReactModal
                isOpen={showpopup}
                onRequestClose={closemodel}
                className="Modal"
                overlayClassName="Overlay"
              >
                <>
                  <button
                    className="btn btn-danger"
                    onClick={(showpopup) => setshowpopup(!showpopup)}
                  >
                    X
                  </button>
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
                  <p>$ {item.price}</p>
                  <p>Instock-{item.rating.count} pcs</p>
                </>
              </ReactModal>
            );
          })}
        </div>
      </div>
    </div>
  );
};

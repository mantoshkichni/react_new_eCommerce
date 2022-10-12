import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../Context";
export const Navbar = () => {
  const {
    state: { cart }
  } = useContext(ProductContext);
  return (
    <div className="navbar  sticky-top">
      <Link className="btn home" to="/">
        home
      </Link>

      <Link className="badges" to="/carts">
        <button type="button" class="btn btn-success position-relative ">
          <i class="bi bi-cart3"></i>
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger ">
            {cart.length}
            <span class="visually-hidden">unread messages</span>
          </span>
        </button>
      </Link>
    </div>
  );
};

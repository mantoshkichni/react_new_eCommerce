import { useContext, useReducer } from "react";
import "./styles.scss";
import { ProductContext } from "./Context";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { Cart } from "./components/Cart";

export default function App() {
  const { state } = useContext(ProductContext);
  console.log(state);
  return (
    <div className="App container">
      <Navbar />
      <div className="item1"></div>
      <div className="item2"></div>
      <div className="item3"></div>
      <div className="item4"></div>
      <div className="item5"></div>
      <Routes>
        <Route path="/" element={<Home products={state.products} />} />
        <Route path="/carts" element={<Cart />} />
      </Routes>
      {/* <Home products={state.products} /> */}
    </div>
  );
}

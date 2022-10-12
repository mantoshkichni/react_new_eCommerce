import { Cart } from "./Card";

export const Home = ({ products }) => {
  return (
    <div className="container">
      <div className="row">
        {products.map((item) => {
          return <Cart item={item} />;
        })}
      </div>
    </div>
  );
};

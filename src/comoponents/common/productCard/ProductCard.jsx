import { Link } from "react-router";
import "./ProductCard.css";

const ProductCard = ({ id, title, price, stock, imageUrl }) => {
  return (
    <div className="cardContainer">
      <img src={imageUrl} alt="" />
      <h3>{title}</h3>
      <h3>{price} eur</h3>
      <h3> Available: {stock}</h3>
      <Link to={`/itemDetail/${id}`}>
        <button>See detail</button>
      </Link>
    </div>
  );
};

export default ProductCard;

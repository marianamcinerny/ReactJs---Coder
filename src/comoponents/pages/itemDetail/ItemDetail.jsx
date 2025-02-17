import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { products } from "../../../products";
import Counter from "../../common/counter/Counter";
import "./ItemDetail.css";

const ItemDetail = () => {
  const { id } = useParams();

  const [item, setItem] = useState({});

  useEffect(() => {
    const product = products.find((product) => product.id === id);
    setItem(product);
  }, [id]);

  return (
    <div className="detail">
      <div className="img-container">
        <img src={item.imageUrl} alt="" />
      </div>
      <div className="info-container">
        <h2>{item.title}</h2>
        <h3>{item.price}</h3>
        <Counter stock={item.stock} />
      </div>
    </div>
  );
};

export default ItemDetail;

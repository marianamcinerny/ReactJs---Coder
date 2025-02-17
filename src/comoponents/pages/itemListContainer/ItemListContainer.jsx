import { useState, useEffect } from "react";
import { products } from "../../../products";
import { useParams } from "react-router";
import ProductCard from "../../common/productCard/ProductCard";
import "./ItemListContainer.css";

function ItemListContainer() {
  const { name } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    let filteredProducts = products.filter(
      (product) => product.category === name
    );

    const getProducts = new Promise((resolve, reject) => {
      let ok = true;
      if (ok) {
        resolve(name ? filteredProducts : products);
      } else {
        reject({ status: 400, message: "something went wrong" });
      }
    });

    getProducts
      .then((res) => setItems(res))
      .catch((error) => console.log(error));
  }, [name]);

  return (
    <div className="productContainer">
      {items.map((item) => {
        return <ProductCard key={item.id} {...item} />;
      })}
    </div>
  );
}

export default ItemListContainer;

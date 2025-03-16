import { useState, useEffect } from "react";
import { useParams } from "react-router";
import ProductCard from "../../common/productCard/ProductCard";
import "./ItemListContainer.css";
import ProductSkeleton from "../../common/productSkeleton/ProductSkeleton";
import { db } from "../../../firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";

function ItemListContainer() {
  const { name } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const productsCollection = collection(db, "products");
    let consult = productsCollection;

    if (name) {
      const filteredCollection = query(
        productsCollection,
        where("category", "==", name)
      );
      consult = filteredCollection;
    }
    const getProducts = getDocs(consult);
    getProducts.then((res) => {
      let products = res.docs.map((element) => {
        return { id: element.id, ...element.data() };
      });
      setItems(products);
    });
  }, [name]);

  return (
    <div>
      {items.length > 0 ? (
        <div className="productContainer">
          {items.map((item) => {
            return <ProductCard key={item.id} {...item} />;
          })}
        </div>
      ) : (
        <div className="skeleton">
          <ProductSkeleton />
          <ProductSkeleton />
          <ProductSkeleton />
          <ProductSkeleton />
          <ProductSkeleton />
        </div>
      )}
    </div>
  );
}

export default ItemListContainer;

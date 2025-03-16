import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Counter from "../../common/counter/Counter";
import "./ItemDetail.css";
import { db } from "../../../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";

const ItemDetail = () => {
  const { id } = useParams();

  const [item, setItem] = useState({});

  useEffect(() => {
    let productCollection = collection(db, "products");
    let refDoc = doc(productCollection, id);
    const getProduct = getDoc(refDoc);
    getProduct.then((res) => {
      setItem({ id: res.id, ...res.data() });
    });
  }, [id]);

  return (
    <div className="detail">
      <div className="img-container">
        <img src={item.imageUrl} alt="" />
      </div>
      <div className="info-container">
        <h2>{item.title}</h2>
        <h3>{item.price} eur</h3>
        <Counter item={item} />
      </div>
    </div>
  );
};

export default ItemDetail;

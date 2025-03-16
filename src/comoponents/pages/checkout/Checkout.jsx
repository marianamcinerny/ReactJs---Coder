import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { Link } from "react-router";
import { db } from "../../../firebaseConfig";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import "./Checkout.css";
import Button from "../../common/button/Button";

const Checkout = () => {
  const { cart, getTotalAmount, resetCart } = useContext(CartContext);
  const [isLoading, setIsLoading] = useState(false);

  const [user, setUser] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });
  const [orderID, setOrderID] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    let total = getTotalAmount();
    let order = {
      buyer: user,
      items: cart,
      total: total,
    };

    let refCollection = collection(db, "orders");
    const promiseResponse = addDoc(refCollection, order);
    promiseResponse
      .then((res) => {
        setOrderID(res.id);
        resetCart();
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });

    let productsCollection = collection(db, "products");
    order.items.forEach((item) => {
      let productRef = doc(productsCollection, item.id);
      updateDoc(productRef, { stock: item.stock - item.quantity });
    });
  };

  const handleChange = (evento) => {
    const { value, name } = evento.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div>
      {!isLoading && orderID && (
        <h3 id="loading">Thank you! Your purchase id numer is {orderID}</h3>
      )}

      {!isLoading && !orderID && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="name"
            name="name"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="email"
            name="email"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="phone number"
            name="phoneNumber"
            onChange={handleChange}
          />

          <div id="form-buttons">
            <Link to="/cart">Cancel</Link>
            <Button text="Buy"></Button>
          </div>
        </form>
      )}
      {isLoading && <h3 id="loading">Processing your purchase...</h3>}
    </div>
  );
};

export default Checkout;

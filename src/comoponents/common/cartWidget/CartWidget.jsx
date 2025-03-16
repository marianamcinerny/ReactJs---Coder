import { IoCartOutline } from "react-icons/io5";
import "./CartWidget.css";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

function CartWidget() {
  const { getTotalQuantity } = useContext(CartContext);

  const total = getTotalQuantity();
  return (
    <section className="cartwidget-container">
      <IoCartOutline size={30} />
      <p>{total}</p>
    </section>
  );
}

export default CartWidget;

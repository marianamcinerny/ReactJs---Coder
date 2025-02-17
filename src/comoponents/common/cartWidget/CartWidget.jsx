// import cart from "../assets/cart.png";
import { IoCartOutline } from "react-icons/io5";
import "./CartWidget.css";

function CartWidget() {
  return (
    <section className="cartwidget-container">
      <IoCartOutline size={30} />
      <p>(10)</p>
    </section>
  );
}

export default CartWidget;

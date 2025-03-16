import { useContext, useState } from "react";
import "./Counter.css";
import { CartContext } from "../../../context/CartContext";
import { Snackbar } from "@mui/material";
import Swal from "sweetalert2";

const Counter = ({ item }) => {
  const [counter, setCounter] = useState(1);
  const [state, setState] = useState({
    open: false,
    vertical: "bottom",
    horizontal: "right",
  });
  const { vertical, horizontal, open } = state;
  const { addToCart } = useContext(CartContext);

  const add = () => {
    counter < item.stock
      ? setCounter(counter + 1)
      : Swal.fire({
          icon: "warning",
          position: "center",
          title: `Only ${item.stock} available`,
          showConfirmButton: false,
          timer: 4000,
        });
  };

  const sub = () => {
    counter > 1 && setCounter(counter - 1);
  };

  const onAdd = () => {
    const product = { ...item, quantity: counter };
    addToCart(product);
    setState({ ...state, open: true });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  return (
    <div>
      <div className="counter-container">
        <button onClick={sub}>-</button>
        <h3>{counter}</h3>
        <button onClick={add}>+</button>
      </div>
      <div>
        <button onClick={onAdd}>Add to cart</button>
      </div>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        message="Added to cart"
      />
    </div>
  );
};

export default Counter;

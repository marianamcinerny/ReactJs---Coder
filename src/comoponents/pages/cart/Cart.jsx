import { useState, useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import "./Cart.css";
import { Snackbar } from "@mui/material";
import Swal from "sweetalert2";
import { Link } from "react-router";

const Cart = () => {
  const { cart, removeById, getTotalAmount, resetCart } =
    useContext(CartContext);
  const total = getTotalAmount();

  const [state, setState] = useState({
    open: false,
    vertical: "bottom",
    horizontal: "right",
  });

  const { vertical, horizontal, open } = state;

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const removeItem = (id) => {
    removeById(id);
    setState({ ...state, open: true });
  };

  const emptyCart = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: "success",
          position: "center",
          showConfirmButton: false,
          timer: 2000,
        });
        resetCart();
      }
    });
  };

  return (
    <div>
      {cart.length === 0 ? (
        <h3 id="empty-cart">Your cart is empty</h3>
      ) : (
        <div>
          {cart.map((product) => {
            return (
              <div key={product.id} id="cart-card">
                <img src={product.imageUrl} alt="" />
                <div id="product-info">
                  <p>{product.title}</p>
                  <p> Quantity: {product.quantity}</p>
                  <p> Price: {product.price} EUR</p>
                  <button
                    onClick={() => {
                      removeItem(product.id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
          <div id="amount-to-pay">
            <h3>Total</h3>
            <h3>{total} EUR</h3>
          </div>
          <div id="buttons">
            <button onClick={emptyCart}>Empty cart</button>
            <Link to="/checkout" id="checkout">
              Checkout
            </Link>
          </div>
        </div>
      )}
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        message="Removed from cart"
      />
    </div>
  );
};

export default Cart;

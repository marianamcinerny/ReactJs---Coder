import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    let isFound = cart.some((item) => item.id === product.id);

    if (isFound) {
      const newCart = cart.map((item) => {
        if (product.id === item.id) {
          return { ...item, quantity: product.quantity + item.quantity };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, product]);
    }
  };

  const resetCart = () => {
    setCart([]);
  };

  const removeById = (id) => {
    const newCart = cart.filter((product) => product.id !== id);
    setCart(newCart);
  };

  const getTotalAmount = () => {
    const total = cart.reduce((acc, product) => {
      return acc + product.quantity * product.price;
    }, 0);
    return total;
  };

  const getTotalQuantity = () => {
    const total = cart.reduce((acc, product) => {
      return acc + product.quantity;
    }, 0);
    return total;
  };

  const data = {
    cart,
    addToCart,
    resetCart,
    removeById,
    getTotalAmount,
    getTotalQuantity,
  };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;

import ItemListContainer from "./comoponents/pages/itemListContainer/ItemListContainer";
import NavBar from "./comoponents/layouts/navbar/NavBar";
import Cart from "./comoponents/pages/cart/Cart";
import ItemDetail from "./comoponents/pages/itemDetail/ItemDetail";
import Error from "./comoponents/pages/error/Error";
import { BrowserRouter, Routes, Route } from "react-router";
import CartContextProvider from "./context/CartContext";
import Checkout from "./comoponents/pages/checkout/Checkout";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:name" element={<ItemListContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/itemDetail/:id" element={<ItemDetail />} />
          <Route path="/checkout" element={<Checkout />} />

          <Route path="*" element={<Error />} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;

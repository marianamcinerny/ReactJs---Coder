import ItemListContainer from "./comoponents/pages/itemListContainer/ItemListContainer";
import NavBar from "./comoponents/layouts/navbar/NavBar";
import Cart from "./comoponents/pages/cart/cart";
import ItemDetail from "./comoponents/pages/itemDetail/ItemDetail";
import Error from "./comoponents/pages/error/error";
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    // <>
    //   <NavBar></NavBar>
    //   <ItemListContainer greeting="Welcome to Zadig & Voltaire´s online shop"></ItemListContainer>
    // </>

    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:name" element={<ItemListContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/itemDetail/:id" element={<ItemDetail />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

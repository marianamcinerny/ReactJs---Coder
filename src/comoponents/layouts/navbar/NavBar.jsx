import Button from "../../common/button/Button";
import CartWidget from "../../common/cartWidget/CartWidget";
import Brand from "../../common/brand/Brand";

import "./NavBar.css";
import { Link } from "react-router";

function NavBar() {
  return (
    <section className="navbar-container">
      <div className="logo-cointainer">
        <Brand></Brand>
      </div>

      <div className="left-container">
        <div className="button-container">
          <Link to="/">
            <Button text="Home"></Button>
          </Link>
          <Link to="/category/bags">
            <Button text="Bags"></Button>
          </Link>
          <Link to="/category/wallets">
            <Button text="Wallets"></Button>
          </Link>
          <Link to="/category/accesories">
            <Button text="Accesories"></Button>
          </Link>
        </div>

        <div className="cartwidget-container">
          <Link to="/cart">
            <CartWidget></CartWidget>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default NavBar;

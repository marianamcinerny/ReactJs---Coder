import { Link } from "react-router";
import logo from "../../../assets/zv-logo.svg";
import "./Brand.css";

function Brand() {
  return (
    <>
      <Link to="/">
        <img className="img-logo" src={logo} alt="logo" />
      </Link>
    </>
  );
}

export default Brand;

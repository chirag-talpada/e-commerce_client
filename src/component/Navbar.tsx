import { useState } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import "./style/Navbar.scss";
// import Cart from "../Cart/Cart";
// import { useSelector } from "react-redux";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const products = [];

  return (
    <div className="navbar bg-blue-700 text-white sticky top-0">
      <div className="wrapper">
        <div className="left">
          <div className="center">
            <Link className="link" to="/">
              ShopMart
            </Link>
          </div>
        </div>
        <div className="right">
          <div className="item">
            <Link className="link" to="/">
              Login
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              Register
            </Link>
          </div>

          <div className="icons">
            <div className="cartIcon text-white" onClick={() => setOpen(!open)}>
              <ShoppingCartOutlinedIcon />
              <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {/* {open && <Cart/>} */}
    </div>
  );
};

export default Navbar;

import React, { useContext, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import { TiShoppingCart } from "react-icons/ti";

const Navbar = () => {
  const [menu, setmenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color === true ? "navbar active-navbar" : "navbar"}>
      {/* logo */}
      <Link
        to="/"
        onClick={() => {
          setmenu("shop");
          window.scrollTo(0, 0);
        }}
      >
        <div className="nav-logo">
          <p>
            style<span>sync.</span>
          </p>
        </div>
      </Link>

      <ul className="nav-menu">
        <li
          onClick={() => {
            setmenu("shop");
            window.scrollTo(0, 0);
          }}
        >
          <Link to={"/"} style={{ textDecoration: "none" }}>
            Shop
          </Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setmenu("men");
            window.scrollTo(0, 0);
          }}
        >
          <Link to={"/mens"} style={{ textDecoration: "none" }}>
            Men
          </Link>
          {menu === "men" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setmenu("women");
            window.scrollTo(0, 0);
          }}
        >
          <Link to={"/womans"} style={{ textDecoration: "none" }}>
            womans
          </Link>

          {menu === "women" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setmenu("kids");
            window.scrollTo(0, 0);
          }}
        >
          <Link to={"/kids"} style={{ textDecoration: "none" }}>
            Kids
          </Link>
          {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <TiShoppingCart className="cart-btn" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;

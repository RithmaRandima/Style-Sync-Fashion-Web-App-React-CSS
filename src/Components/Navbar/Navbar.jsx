import React, { useContext, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import { TiShoppingCart } from "react-icons/ti";
import { HiOutlineBarsArrowDown } from "react-icons/hi2";

const Navbar = () => {
  const [menu, setmenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);

  const [color, setColor] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
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

      <ul className="hidden md:flex nav-menu gap-[50px] ">
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

      <div className="flex justify-between items-center gap-[25px]">
        <div className="nav-login-cart">
          <Link to="/login">
            <button>Login</button>
          </Link>
          <Link to="/cart">
            <TiShoppingCart className="cart-btn" />
          </Link>
          <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>

        <div
          onClick={() => {
            setMobileMenu(!mobileMenu);
          }}
        >
          <HiOutlineBarsArrowDown className="cart-btn block md:hidden" />
        </div>
      </div>

      <ul
        className={
          mobileMenu === true
            ? "absolute bg-[#ff007bdd]  flex nav-menu flex-col gap-1 top-[75px] right-0 py-3 h-[220px] overflow-hidden opacity-1 duration-500"
            : "absolute bg-[#ff007bdd] nav-menu flex-col gap-1 top-[75px] right-0 py-3 h-[0%] overflow-hidden opacity-0 duration-500"
        }
      >
        <li
          onClick={() => {
            setmenu("shop");
            setMobileMenu(!mobileMenu);
            window.scrollTo(0, 0);
          }}
          className=" w-[100%]  px-14 py-2"
        >
          <Link to={"/"} style={{ textDecoration: "none" }}>
            Shop
          </Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setmenu("men");
            setMobileMenu(!mobileMenu);
            window.scrollTo(0, 0);
          }}
          className=" w-[100%]  px-14 py-2"
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
            setMobileMenu(!mobileMenu);
          }}
          className=" w-[100%]  px-14 py-2"
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
            setMobileMenu(!mobileMenu);
          }}
          className=" w-[100%]  px-14 py-2"
        >
          <Link to={"/kids"} style={{ textDecoration: "none" }}>
            Kids
          </Link>
          {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

import React, { useEffect } from "react";
import CartItems from "../Components/CartItems/CartItems";
import PagesHero from "../Components/PagesHero/PagesHero";
import img1 from "../Assets/blog-6.jpeg";

const Cart = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <PagesHero title={"Items Cart"} img={img1} />
      <CartItems />
    </div>
  );
};

export default Cart;

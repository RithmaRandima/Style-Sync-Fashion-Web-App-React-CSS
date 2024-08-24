import React, { useContext, useEffect } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../Components/Breadcrum/Breadcrum";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import Descriptionbox from "../Components/DescriptionBox/Descriptionbox";
import RelatedProduct from "../Components/RelatedProduct/RelatedProduct";
import PagesHero from "../Components/PagesHero/PagesHero";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  return (
    <div>
      <PagesHero title="Shop Product" />
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <Descriptionbox />
      <RelatedProduct />
    </div>
  );
};

export default Product;

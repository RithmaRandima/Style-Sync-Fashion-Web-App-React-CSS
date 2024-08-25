import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Footer from "./Components/Footer/Footer";

import mens_banner from "./Assets/mens_banner.jpg";
import womens_banner from "./Assets/womens_banner.jpg";
import kids_banner from "./Assets/kids_banner.jpg";
import NewsLetter from "./Components/NewsLetter/NewsLetter";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/mens"
            element={
              <ShopCategory
                banner_name="Men's Item"
                banner_image={mens_banner}
                category="men"
                discount={20}
              />
            }
          />
          <Route
            path="/womans"
            element={
              <ShopCategory
                banner_name="Woman's Item"
                banner_image={womens_banner}
                category="women"
                discount={50}
              />
            }
          />
          <Route
            path="/kids"
            element={
              <ShopCategory
                banner_name="Kid's Item"
                banner_image={kids_banner}
                category="kid"
                discount={80}
              />
            }
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>

        <NewsLetter />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

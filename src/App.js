import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import mens_banner from "./Assets/mens_banner.jpeg";
import womens_banner from "./Assets/womens_banner.jpeg";
import kids_banner from "./Assets/kids_banner.jpeg";

const Shop = lazy(() => import("./Pages/Shop"));
const ShopCategory = lazy(() => import("./Pages/ShopCategory"));
const Product = lazy(() => import("./Pages/Product"));
const Cart = lazy(() => import("./Pages/Cart"));
const LoginSignup = lazy(() => import("./Pages/LoginSignup"));

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />

        <Suspense fallback={<h1>Loading...</h1>}>
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
        </Suspense>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

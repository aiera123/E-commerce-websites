import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { useState } from "react";

import Home from "./pages/Home";
import Product from "./pages/Product";
import SearchAppBar from "./components/Navbar";
import Cart from "./pages/cart";
import ProductDetails from "./pages/ProductDetails";
export default function App() {
  const [search, setSearch] = useState("");

  return (
    <BrowserRouter>

      <SearchAppBar search={search} setSearch={setSearch} />

      {/* ✅ WRAP EVERYTHING THAT USES CART */}
      <CartProvider>
        <Routes>
          <Route path="/" element={<Home search={search} />} />
          <Route path="/products" element={<Product search={search} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </CartProvider>

    </BrowserRouter>
  );
}
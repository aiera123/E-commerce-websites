import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Product from "./pages/Product";
import SearchAppBar from "./components/SearchAppBar";

export default function App() {
  const [search, setSearch] = useState("");
  return (
    <BrowserRouter>
      <SearchAppBar search={search} setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<Home search={search} />} />
        <Route path="/products" element={<Product search={search} />} />
      </Routes>

    </BrowserRouter>
  );
}

// import { useNavigate } from "react-router-dom";

// export default function Product({ search = "" }) {

//   const navigate = useNavigate();

//   const products = [
//     { id: 1, name: "Lip Gloss", price: "Rs. 500" },
//     { id: 2, name: "Face Cream", price: "Rs. 800" },
//     { id: 3, name: "Perfume", price: "Rs. 1200" },
//     { id: 4, name: "Shampoo", price: "Rs. 600" },
//     { id: 5, name: "Body Lotion", price: "Rs. 700" },
//     { id: 6, name: "Foundation", price: "Rs. 900" },
//   ];

//   const filteredProducts = products.filter((item) =>
//     item.name.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">

//       <h1 className="text-3xl font-bold mb-6 text-center">
//         Our Products
//       </h1>

//       {/* No results message */}
//       {filteredProducts.length === 0 ? (

//         <p className="text-center text-gray-500">
//           No products found
//         </p>

//       ) : (

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

//           {filteredProducts.map((item) => (

//             <div
//               key={item.id}
//               className="bg-white p-4 shadow rounded-lg hover:shadow-lg transition"
//             >

//               <h2 className="font-semibold text-xl">
//                 {item.name}
//               </h2>

//               <p className="text-gray-600">
//                 {item.price}
//               </p>

//               <button
//                 onClick={() => navigate(`/products/${item.id}`)}
//                 className="mt-3 bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
//               >
//                 View Details
//               </button>

//             </div>

//           ))}

//         </div>

//       )}

//     </div>
//   );
// }
import { useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";
import FilterSidebar from "../components/FilterSidebar";
import SortBar from "../components/SortBar";

const allProducts = [
  { id: 1, name: "Lip Gloss",     price: 500,  category: "Makeup",      sub: "Lip Color",     brand: "Lakme",         rating: 4.2, skinType: null },
  { id: 2, name: "Face Cream",    price: 800,  category: "Skin",        sub: "Moisturizers",  brand: "CeraVe",        rating: 4.5, skinType: "Dry" },
  { id: 3, name: "Perfume",       price: 1200, category: "Fragrances",  sub: "Eau de Parfum", brand: "Neutrogena",    rating: 4.7, skinType: null },
  { id: 4, name: "Shampoo",       price: 600,  category: "Hair",        sub: "Shampoo",       brand: "Mamaearth",     rating: 4.0, skinType: null },
  { id: 5, name: "Body Lotion",   price: 700,  category: "Skin",        sub: "Moisturizers",  brand: "Cetaphil",      rating: 3.8, skinType: "Normal" },
  { id: 6, name: "Foundation",    price: 900,  category: "Makeup",      sub: "Foundation",    brand: "Lakme",         rating: 4.3, skinType: null },
];

const sortOptions = [
  { value: "featured",    label: "Featured" },
  { value: "price_asc",   label: "Price: Low to High" },
  { value: "price_desc",  label: "Price: High to Low" },
  { value: "rating",      label: "Top Rated" },
  { value: "newest",      label: "Newest First" },
];

export default function Product({ search = "" }) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const urlCategory = searchParams.get("category") || "";
  const urlSub      = searchParams.get("sub") || "";

  const [filters, setFilters] = useState({
    skinType: [],
    brand: [],
    rating: null,
    priceMax: 5000,
  });
  const [sortBy, setSortBy] = useState("featured");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // ── Apply all filters ──
  const filtered = allProducts.filter((p) => {
    if (search && !p.name.toLowerCase().includes(search.toLowerCase())) return false;
    if (urlCategory && p.category !== urlCategory) return false;
    if (urlSub && urlSub !== "all" && p.sub !== urlSub) return false;
    if (filters.skinType.length && !filters.skinType.includes(p.skinType)) return false;
    if (filters.brand.length && !filters.brand.includes(p.brand)) return false;
    if (filters.rating && p.rating < filters.rating) return false;
    if (p.price > filters.priceMax) return false;
    return true;
  });

  // ── Apply sort ──
  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === "price_asc")  return a.price - b.price;
    if (sortBy === "price_desc") return b.price - a.price;
    if (sortBy === "rating")     return b.rating - a.rating;
    if (sortBy === "newest")     return b.id - a.id;
    return 0;
  });

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Products</h1>

      {/* Mobile filter toggle */}
      <button
        onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
        className="mb-4 flex items-center gap-2 text-sm text-blue-600 font-medium border border-blue-200 bg-white rounded-lg px-3 py-2 md:hidden"
      >
        <span>⚙️</span>
        {mobileFilterOpen ? "Hide Filters" : "Show Filters"}
      </button>

      <div className="flex gap-6 items-start">
        {/* ── Filter sidebar ── */}
        <div className={`${mobileFilterOpen ? "block" : "hidden"} md:block`}>
          <FilterSidebar filters={filters} onChange={setFilters} />
        </div>

        {/* ── Main product area ── */}
        <div className="flex-1 min-w-0">
          {/* Sort bar */}
          <SortBar
            total={sorted.length}
            sortBy={sortBy}
            onSortChange={setSortBy}
            sortOptions={sortOptions}
            category={urlCategory}
            subcategory={urlSub}
          />

          {/* No results */}
          {sorted.length === 0 ? (
            <div className="text-center py-16 text-gray-400">
              <p className="text-5xl mb-3">🔍</p>
              <p className="font-medium text-gray-500">No products found.</p>
              <button
                onClick={() => setFilters({ skinType: [], brand: [], rating: null, priceMax: 5000 })}
                className="mt-3 text-sm text-blue-500 hover:underline"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {sorted.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-4 shadow rounded-lg hover:shadow-lg transition"
                >
                  {/* Product image placeholder */}
                  <div className="bg-gray-100 rounded-lg h-32 flex items-center justify-center text-4xl mb-3">
                    🧴
                  </div>

                  <h2 className="font-semibold text-xl">{item.name}</h2>
                  <p className="text-gray-500 text-sm">{item.brand}</p>

                  <div className="flex items-center gap-1 my-1">
                    <span className="text-yellow-400 text-sm">{"★".repeat(Math.round(item.rating))}</span>
                    <span className="text-xs text-gray-400">({item.rating})</span>
                  </div>

                  <p className="text-blue-600 font-semibold">Rs. {item.price.toLocaleString()}</p>

                  <button
                    onClick={() => navigate(`/products/${item.id}`)}
                    className="mt-3 bg-black text-white px-4 py-2 rounded hover:bg-gray-800 w-full"
                  >
                    View Details
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
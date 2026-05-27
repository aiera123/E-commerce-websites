import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import lipgloss from "../assets/lipgloss.jpg";
import facecream from "../assets/facecream.jpg";
import perfume from "../assets/perfume.jpg";

export default function Home() {
   const { addToCart, cart } = useCart();
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Hero Section */}
      <div className="text-center py-16 bg-white text-black">
        <h1 className="text-4xl font-bold">Welcome to My Shop</h1>
        <p className="mt-2 text-gray-600">
          Best products at affordable prices
        </p>

        <Link
          to="/products"
          className="mt-6 inline-block bg-black text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-800 transition"
        >
          Shop Now
        </Link>
      </div>

      {/* Featured Section */}
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-6">Featured Products</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Lip Gloss */}
          <div className="bg-white p-4 shadow rounded-xl text-center 
                          hover:shadow-xl hover:scale-105 transition duration-300">

            <img
              src={lipgloss}
              alt="Lip Gloss"
              className="w-40 h-40 object-cover rounded mx-auto"
            />
    <h3 className="text-xl font-semibold mt-3">Lip Gloss</h3>
            <p className="text-gray-500 mt-1">Shiny & long lasting</p>

            <button className="mt-4 bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition">
              Add to Cart 
            </button>
          </div>

          {/* Face Cream */}
          <div className="bg-white p-4 shadow rounded-xl text-center 
                          hover:shadow-xl hover:scale-105 transition duration-300">
<img src={facecream} alt="Face Cream" className="w-40 h-40 object-cover rounded mx-auto" />
            <h3 className="text-xl font-semibold">Face Cream</h3>
            <p className="text-gray-500 mt-1">Soft & glowing skin</p>

            <button className="mt-4 bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition">
              Add to Cart 
            </button>
          </div>

          {/* Perfume */}
          <div className="bg-white p-4 shadow rounded-xl text-center 
                          hover:shadow-xl hover:scale-105 transition duration-300">
<img src={perfume} alt="Perfume" className="w-40 h-40 object-cover rounded mx-auto" />        
            <h3 className="text-xl font-semibold">Perfume</h3>
            <p className="text-gray-500 mt-1">Long lasting fragrance</p>

            <button className="mt-4 bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition">
              Add to Cart 
            </button>
          </div>

        </div>
      </div>

    </div>
  );
}
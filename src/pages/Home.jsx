import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import lipgloss from "../assets/lipgloss.jpg";
import facecream from "../assets/facecream.jpg";
import perfume from "../assets/perfume.jpg";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";
import banner4 from "../assets/banner4.jpg";

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
      {/* Carousel Section */}
<div className="p-6">

  <Swiper
    modules={[Navigation, Autoplay]}
    navigation
    autoplay={{ delay: 3000 }}
    spaceBetween={20}
    slidesPerView={1}
    loop={true}
  >

    <SwiperSlide>
      <div className="flex justify-center items-center bg-pink-50 h-[400px] rounded-2xl shadow-md">
      <img
        src={banner1}
        alt="Banner 1"
        className="h-[350px] object-cover"
      />
      </div>
    </SwiperSlide>

    <SwiperSlide>
      <div className="flex justify-center items-center bg-pink-50 h-[400px] rounded-2xl shadow-md">
      <img
        src={banner2}
        alt="Banner 2"
        className="h-[350px] object-cover"
        />
        </div>
    </SwiperSlide>

    <SwiperSlide>
      <div className="flex justify-center items-center bg-pink-50 h-[400px] rounded-2xl shadow-md">
      <img
        src={banner3}
        alt="Banner 3"
        className="h-[350px] object-cover"
        />
        </div>
      
    </SwiperSlide>

    <SwiperSlide>
      <div className="flex justify-center items-center bg-pink-50 h-[400px] rounded-2xl shadow-md">
      <img
        src={banner4}
        alt="Banner 4"
        className="h-[350px] object-cover" 
      />
      </div>
    </SwiperSlide>

  </Swiper>
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

        <button
  onClick={() =>
    addToCart({
      name: "Lip Gloss",
      price: 499,
      image: lipgloss
    })
  }
  className="mt-4 bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition"
>
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
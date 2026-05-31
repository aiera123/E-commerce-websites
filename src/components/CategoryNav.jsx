import { useState } from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    name: "Skin",
    items: [
      { label: "Moisturizers", icon: "✨" },
      { label: "Sunscreen", icon: "☀️" },
      { label: "Serums", icon: "💧" },
      { label: "Eye Creams", icon: "👁️" },
      { label: "Face Masks", icon: "🌿" },
      { label: "Cleansers", icon: "🫧" },
    ],
  },
  {
    name: "Hair",
    items: [
      { label: "Shampoo", icon: "🚿" },
      { label: "Conditioner", icon: "💆" },
      { label: "Hair Oils", icon: "🫙" },
      { label: "Styling", icon: "💇" },
      { label: "Hair Masks", icon: "🌸" },
      { label: "Growth Serums", icon: "🧪" },
    ],
  },
  {
    name: "Lifestyle",
    items: [
      { label: "Supplements", icon: "💊" },
      { label: "Wellness", icon: "🧘" },
      { label: "Sleep Care", icon: "🌙" },
      { label: "Nutrition", icon: "🍎" },
    ],
  },
  {
    name: "Fragrances",
    items: [
      { label: "Eau de Parfum", icon: "🌹" },
      { label: "Eau de Toilette", icon: "💫" },
      { label: "Body Mists", icon: "🌬️" },
      { label: "Scented Candles", icon: "🕯️" },
    ],
  },
  {
    name: "Makeup",
    items: [
      { label: "Foundation", icon: "🎨" },
      { label: "Eye Makeup", icon: "👁️" },
      { label: "Lip Color", icon: "💄" },
      { label: "Highlighter", icon: "⭐" },
      { label: "Brushes", icon: "🖌️" },
      { label: "Remover", icon: "🧴" },
    ],
  },
  {
    name: "Kid's Fashion",
    items: [
      { label: "Tops & Tees", icon: "👕" },
      { label: "Bottoms", icon: "👖" },
      { label: "Dresses", icon: "👗" },
      { label: "Accessories", icon: "🎒" },
    ],
  },
  {
    name: "Gadgets",
    items: [
      { label: "Skin Devices", icon: "🔌" },
      { label: "Hair Tools", icon: "💈" },
      { label: "Massagers", icon: "🎯" },
      { label: "Accessories", icon: "🎧" },
    ],
  },
];

export default function CategoryNav() {
  const [activeCategory, setActiveCategory] = useState(null);
  const navigate = useNavigate();

  const handleClick = (catName, itemLabel) => {
    setActiveCategory(null);
    navigate(`/products?category=${encodeURIComponent(catName)}&sub=${encodeURIComponent(itemLabel)}`);
  };

  return (
    <div className="bg-white border-b border-gray-200 shadow-sm">
      <div className="flex items-center overflow-x-auto px-2" style={{ scrollbarWidth: "none" }}>
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="relative flex-shrink-0"
            onMouseEnter={() => setActiveCategory(cat.name)}
            onMouseLeave={() => setActiveCategory(null)}
          >
            {/* Tab button */}
            <button
              className={`px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-all duration-150 ${
                activeCategory === cat.name
                  ? "text-blue-600 border-blue-600"
                  : "text-gray-600 border-transparent hover:text-blue-500 hover:border-blue-300"
              }`}
            >
              {cat.name} <span className="text-xs opacity-50">▾</span>
            </button>

            {/* Dropdown */}
            {activeCategory === cat.name && (
              <div className="absolute top-full left-0 bg-white border border-gray-200 rounded-xl shadow-xl p-3 min-w-[230px] z-50">
                {/* Arrow tip */}
                <div className="absolute -top-[7px] left-6 w-3 h-3 bg-white border-l border-t border-gray-200 rotate-45" />

                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-2 pb-2 mb-1 border-b border-gray-100">
                  {cat.name}
                </p>

                <div className="grid grid-cols-2 gap-0.5">
                  {cat.items.map((item) => (
                    <button
                      key={item.label}
                      onClick={() => handleClick(cat.name, item.label)}
                      className="flex items-center gap-2 px-2 py-2 rounded-lg text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors text-left w-full"
                    >
                      <span>{item.icon}</span>
                      <span>{item.label}</span>
                    </button>
                  ))}
                </div>

                <div className="mt-2 pt-2 border-t border-gray-100">
                  <button
                    onClick={() => handleClick(cat.name, "all")}
                    className="w-full text-center text-xs text-blue-500 hover:text-blue-700 font-medium py-1"
                  >
                    View all {cat.name} →
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
import { useState } from "react";

const skinTypes = ["Oily", "Dry", "Combination", "Sensitive", "Normal"];
const brands    = ["CeraVe", "La Roche-Posay", "Neutrogena", "Cetaphil", "Lakme", "Mamaearth"];

export default function FilterSidebar({ filters, onChange }) {
  const update = (newFilters) => onChange(newFilters);

  const toggleArray = (key, value) => {
    const arr = filters[key];
    update({
      ...filters,
      [key]: arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value],
    });
  };

  const resetAll = () =>
    onChange({ skinType: [], brand: [], rating: null, priceMax: 5000 });

  const activeCount =
    filters.skinType.length + filters.brand.length +
    (filters.rating ? 1 : 0) + (filters.priceMax < 5000 ? 1 : 0);

  return (
    <aside className="w-52 flex-shrink-0 space-y-3">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-gray-800">Filter</h3>
        {activeCount > 0 && (
          <button
            onClick={resetAll}
            className="text-xs text-blue-500 hover:text-blue-700 font-medium"
          >
            Reset ↺
          </button>
        )}
      </div>

      {/* Active chips */}
      {activeCount > 0 && (
        <div className="flex flex-wrap gap-1">
          {filters.skinType.map((v) => (
            <span
              key={v}
              onClick={() => toggleArray("skinType", v)}
              className="inline-flex items-center gap-1 bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded-full cursor-pointer hover:bg-blue-100"
            >
              {v} ×
            </span>
          ))}
          {filters.brand.map((v) => (
            <span
              key={v}
              onClick={() => toggleArray("brand", v)}
              className="inline-flex items-center gap-1 bg-pink-50 text-pink-600 text-xs px-2 py-1 rounded-full cursor-pointer hover:bg-pink-100"
            >
              {v} ×
            </span>
          ))}
          {filters.rating && (
            <span
              onClick={() => update({ ...filters, rating: null })}
              className="inline-flex items-center gap-1 bg-yellow-50 text-yellow-600 text-xs px-2 py-1 rounded-full cursor-pointer"
            >
              {filters.rating}★+ ×
            </span>
          )}
        </div>
      )}

      {/* Skin type */}
      <FilterGroup title="Skin Type">
        {skinTypes.map((type) => (
          <CheckboxRow
            key={type}
            label={type}
            checked={filters.skinType.includes(type)}
            onChange={() => toggleArray("skinType", type)}
          />
        ))}
      </FilterGroup>

      {/* Brand */}
      <FilterGroup title="Brand">
        {brands.map((brand) => (
          <CheckboxRow
            key={brand}
            label={brand}
            checked={filters.brand.includes(brand)}
            onChange={() => toggleArray("brand", brand)}
          />
        ))}
      </FilterGroup>

      {/* Price */}
      <FilterGroup title="Price Range">
        <input
          type="range"
          min={0} max={5000} step={100}
          value={filters.priceMax}
          onChange={(e) => update({ ...filters, priceMax: Number(e.target.value) })}
          className="w-full accent-blue-500"
        />
        <div className="flex justify-between text-xs text-gray-400 mt-1">
          <span>Rs. 0</span>
          <span className="text-blue-600 font-medium">Rs. {filters.priceMax.toLocaleString()}</span>
          <span>Rs. 5,000</span>
        </div>
      </FilterGroup>

      {/* Rating */}
      <FilterGroup title="Rating">
        {[5, 4, 3].map((r) => (
          <button
            key={r}
            onClick={() => update({ ...filters, rating: filters.rating === r ? null : r })}
            className={`flex items-center gap-1 w-full text-left px-2 py-1.5 rounded-lg text-sm transition-colors ${
              filters.rating === r
                ? "bg-yellow-50 text-yellow-700 font-medium"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            <span className="text-yellow-400">{"★".repeat(r)}{"☆".repeat(5 - r)}</span>
            <span className="text-xs ml-1">{r === 5 ? "5 stars" : `${r}+ stars`}</span>
          </button>
        ))}
      </FilterGroup>
    </aside>
  );
}

function FilterGroup({ title, children }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-3 py-2.5 bg-gray-50 hover:bg-gray-100 transition-colors"
      >
        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{title}</span>
        <span className={`text-gray-400 text-xs transition-transform ${open ? "rotate-180" : ""}`}>▾</span>
      </button>
      {open && <div className="px-3 py-2 space-y-0.5">{children}</div>}
    </div>
  );
}

function CheckboxRow({ label, checked, onChange }) {
  return (
    <label className="flex items-center gap-2 py-1.5 cursor-pointer group">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="w-3.5 h-3.5 accent-blue-500"
      />
      <span className={`text-sm ${checked ? "text-blue-600 font-medium" : "text-gray-600 group-hover:text-gray-800"}`}>
        {label}
      </span>
    </label>
  );
}
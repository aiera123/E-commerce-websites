export default function SortBar({ total = 0, sortBy, onSortChange, sortOptions = [], category, subcategory }) {
  return (
    <div className="flex items-center justify-between mb-4 bg-white rounded-xl px-4 py-3 border border-gray-200 flex-wrap gap-3">
      {/* Left: breadcrumb + count */}
      <div>
        {category && (
          <p className="text-xs text-gray-400 mb-0.5">
            Home › <span>{category}</span>
            {subcategory && subcategory !== "all" && <> › <span className="text-gray-600">{subcategory}</span></>}
          </p>
        )}
        <p className="text-sm text-gray-600">
          <span className="font-semibold text-gray-800">{total}</span> products
        </p>
      </div>

      {/* Right: sort */}
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-500 hidden sm:block">Sort by:</span>
        <div className="relative">
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="appearance-none bg-white border border-gray-200 rounded-lg pl-3 pr-8 py-2 text-sm text-gray-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-300 hover:border-blue-400 transition-colors"
          >
            {sortOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
          <span className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 text-xs">▾</span>
        </div>
      </div>
    </div>
  );
}
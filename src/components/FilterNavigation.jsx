export default function FilterNavigation({
  selectedPrice,
  setSelectedPrice,
  selectedCategory,
  setSelectedCategory,
  categoryOptions,
  showOpenNow,
  setShowOpenNow,
}) {
  return (
    <div className="flex flex-col sm:flex-row  sm:justify-between gap-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center  gap-4">
        <p className="font-medium">Filter by:</p>

        <div className="border-b border-blue-950 py-1">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={showOpenNow}
              onChange={() => setShowOpenNow(!showOpenNow)}
              className="appearance-none w-4 h-4 rounded-full border border-gray-400 accent-blue-950"
            />
            <span>Open Now</span>
          </label>
        </div>

        <div className="border-b border-blue-950 py-1">
          <label htmlFor="price">Price</label>
          <select
            id="price"
            value={selectedPrice}
            onChange={(e) => setSelectedPrice(e.target.value)}
          >
            <option></option>
            <option>$</option>
            <option>$$</option>
            <option>$$$</option>
          </select>
        </div>

        <div className="border-b border-blue-950 py-1">
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option></option>
            {categoryOptions.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <button
          onClick={() => {
            setSelectedPrice('');
            setSelectedCategory('');
            setShowOpenNow(false);
          }}
          className="border px-4 py-2 text-sm hover:bg-gray-100 transition"
        >
          Clear All
        </button>
      </div>
    </div>
  );
}

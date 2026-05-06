import { useDispatch, useSelector } from "react-redux";

import {
  setSearchText,
  setSelectedCategory,
  toggleViewMode,
} from "./productSlice";

function ProductFilters() {
  const dispatch = useDispatch();

  const {items,searchText,selectedCategory,viewMode} = useSelector((state) => state.products);

  const categories = [
    "all",
    ...new Set(items.map((item) => item.category)),
  ];

  return (
    <div className="filters">
      <input
        type="text"
        placeholder="Search products..."
        value={searchText}
        onChange={(e) =>
          dispatch(setSearchText(e.target.value))
        }
      />

      <select
        value={selectedCategory}
        onChange={(e) =>
          dispatch(setSelectedCategory(e.target.value))
        }
      >
        {categories.map((category) => (
          <option
            key={category}
            value={category}
          >
            {category}
          </option>
        ))}
      </select>
      <button onClick={() => dispatch(toggleViewMode())}>
        {viewMode === "grid" ? "List View" : "Grid View"}
      </button>
    </div>
  );
}

export default ProductFilters;
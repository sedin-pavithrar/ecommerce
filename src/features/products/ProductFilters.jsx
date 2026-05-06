import { useDispatch, useSelector } from "react-redux";

import {
  setSearchText,
  setSelectedCategory,
} from "./productSlice";

function ProductFilters() {
  const dispatch = useDispatch();

  const {items,searchText,selectedCategory,} = useSelector((state) => state.products);

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
    </div>
  );
}

export default ProductFilters;
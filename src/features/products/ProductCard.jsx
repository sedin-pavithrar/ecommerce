// import React from "react";
// import { getStockStatus } from "../../utils/stockStatus";
// import { Link } from "react-router-dom";


// // display individual product details in a card format
// function ProductCard({product,viewMode}){
//     const dispatch = useDispatch();
//     const stockStatus = getStockStatus(product.stock);
//     const stockClass = stockStatus.replaceAll(" ", "-");

//     return(
//         <div className = {`product-card ${viewMode}`}>
//            <Link to={`/product/${product.id}`} ClassName="product-link">
//            <img src={product.image} alt={product.title}/> 
//         <h3>{product.title}</h3>
//  </Link>
//             <div className="product-info">
//             <p className="category">{product.category}</p>
//             <p className="price">${product.price.toFixed(2)}</p>
//             <p className="stock-status">{getStockStatus(product.stock)}</p>
//             <div className="actions">
//             {/* <Link to={`/product/${product.id}`}>
//               <button className="secondary-btn">View Details</button>
//             </Link> */}
//             <button disabled={product.stock === 0}>Add to Cart</button>
//             </div>
//         </div>
//     {/* ) */}
//             </div>
//         // </div>

//     )
// }
// export default ProductCard;

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../cart/cartSlice";
import { getStockStatus } from "../../utils/stockStatus";

function ProductCard({ product, viewMode }) {
  const dispatch = useDispatch();

  const stockStatus = getStockStatus(product.stock);

  const stockClass = stockStatus.replaceAll(" ", "-");

  return (
    <div className={`product-card ${viewMode}`}>
      <Link
        to={`/product/${product.id}`}
        className="product-link"
      >
        <img
          src={product.image}
          alt={product.title}
        />

        <h3>{product.title}</h3>
      </Link>

      <div className="product-info">
        <p className="category">
          {product.category}
        </p>

        <p className="price">
          ${product.price.toFixed(2)}
        </p>

        <span
          className={`stock-badge ${stockClass}`}
        >
          {stockStatus}
        </span>

        <div className="actions">
          <Link to={`/product/${product.id}`}>
            <button className="secondary-btn">
              View Details
            </button>
          </Link>

          <button
            disabled={product.stock === 0}
            onClick={() =>
              dispatch(addToCart(product))
            }
          >
            {product.stock === 0
              ? "Unavailable"
              : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
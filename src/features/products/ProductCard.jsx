import React from "react";
import { getStockStatus } from "../../utils/stockStatus";
import { Link } from "react-router-dom";


// display individual product details in a card format
function ProductCard({product,viewMode}){
    return(
        <div className = {`product-card ${viewMode}`}>
           <Link to={`/product/${product.id}`}>
 <img src={product.image} alt={product.title}/> 
 <h3>{product.title}</h3>
 </Link>
            
            <p className="category">{product.category}</p>
            <p className="price">${product.price.toFixed(2)}</p>
            <p className="stock-status">{getStockStatus(product.stock)}</p>

        </div>

    )
}
export default ProductCard;
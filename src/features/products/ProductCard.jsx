import React from "react";
import { getStockStatus } from "../../utils/stockStatus";


// display individual product details in a card format
function ProductCard({product}){
    return(
        <div className = "product-card">
            <img src={product.image} alt={product.title}/>
            <h3>{product.title}</h3>
            <p className="category">{product.category}</p>
            <p className="price">${product.price.toFixed(2)}</p>
            <p className="stock-status">{getStockStatus(product.stock)}</p>

        </div>

    )
}
export default ProductCard;
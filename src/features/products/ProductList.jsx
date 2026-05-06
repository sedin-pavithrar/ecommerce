import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./productThunks";
import ProductCard from "./ProductCard";

function ProductList(){
    const dispatch = useDispatch();
    const {items,loading,error} = useSelector((state)=>state.products);
    useEffect(()=>{
        dispatch(fetchProducts());
    },[dispatch]);

    if(loading){
        return <div>Loading...</div>;
    }
    if(error){
        return <div>{error}</div>;
    }
    return(
        
        <div>
            <h2>Products</h2>
            <div className="product-grid">
            {items.map((product)=>(
                <ProductCard 
                key={product.id} 
                product={product} 
                />
            ))}
            </div>
        </div>
    );

}
export default ProductList;
                

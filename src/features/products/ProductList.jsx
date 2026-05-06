import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./productThunks";

function ProductList(){
    const dispatch = useDispatch();
    const {items,loading,error} = useSelector((state)=>state.products);
    useEffect(()=>{
        dispatch(fetchProducts());
    },dispatch);

    if(loading){
        return <div>Loading...</div>;
    }
    if(error){
        return <div>{error}</div>;
    }
    return(
        
        <div>
            <h2>Products</h2>
            {items.map((product)=>(
                <div key={product.id} style={{border:"1px solid #ccc",padding:"10px",margin:"10px"}}>
                    <img src = {product.image} alt = {product.title} width = "100" />
                    <h3>{product.title}</h3>
                    <p>${product.price.toFixed(2)}</p>
                    <p>Stock:{product.stock}</p>
                </div>
            ))}
        </div>
    );

}
export default ProductList;
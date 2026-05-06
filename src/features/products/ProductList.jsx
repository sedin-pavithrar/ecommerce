import { useEffect,useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./productThunks";
import ProductCard from "./ProductCard";
import ProductFilters from "./ProductFilters";

function ProductList(){
    const dispatch = useDispatch();
    const {items,
        loading,
        error,
        searchText,
        selectedCategory,

    } = useSelector((state)=>state.products);
    useEffect(()=>{
        dispatch(fetchProducts());
    },[dispatch]);

    const filteredProducts = useMemo(() => {
        return items.filter((product) => {
            const matchesSearch = product.title.toLowerCase().includes(searchText.toLowerCase());
            const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });
    }, [items, searchText, selectedCategory]);

    if(loading){
        return <div>Loading...</div>;
    }
    if(error){
        return <div>{error}</div>;
    }
    

    return(
        
        <div>
            <h2>Products</h2>
            <ProductFilters/>
            <div className="product-grid">
            {filteredProducts.map((product)=>(
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
                

import { useEffect,useMemo , useState , useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./productThunks";
import ProductCard from "./ProductCard";
import ProductFilters from "./ProductFilters";
import { useInfiniteScroll } from "../../hooks/useInfiniteScroll";

function ProductList(){
    const dispatch = useDispatch();
    const {
        items,
        loading,
        error,
        searchText,
        selectedCategory,
        viewMode,

    } = useSelector((state)=>state.products);
    const [visibleCount, setVisibleCount] = useState(6);
    const [prevFilters, setPrevFilters] = useState({ searchText, selectedCategory });

    if (prevFilters.searchText !== searchText || prevFilters.selectedCategory !== selectedCategory) {
        setPrevFilters({ searchText, selectedCategory });
        setVisibleCount(6);
    }

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

    const visibleProducts = filteredProducts.slice(0, visibleCount);

const hasMore = visibleCount < filteredProducts.length;

const loadMore = useCallback(() => {
  setVisibleCount((prev) => prev + 4);
}, []);

const loaderRef = useInfiniteScroll(loadMore, hasMore);

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
            <div className={`product-grid ${viewMode}`}>
            {visibleProducts.map((product)=>(
                <ProductCard 
                key={product.id} 
                product={product} 
                viewMode={viewMode}
                />
            ))}
            </div>
            {hasMore && (
                <div ref={loaderRef} className="loading-sentinel">
                    {loading ? "Loading more..." : "Scroll for more"}
                </div>
            )}
        </div>
    );

}
export default ProductList;
                

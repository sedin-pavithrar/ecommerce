
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./productThunks";
import { addToCart } from "../cart/cartSlice";
import StockBadge from "../../components/StockBadge";

function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { items, loading } = useSelector((state) => state.products);

  const product = items.find((item) => item.id === Number(id));

  useEffect(() => {
    if (items.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, items.length]);

  if (loading || !product) {
    return <p className="center">Loading product...</p>;
  }

  return (
    <main className="container detail-page">
      <Link to="/">← Back to Products</Link>

      <div className="detail-card">
        <img src={product.image} alt={product.title} />

        <div>
          <h2>{product.title}</h2>

          <p className="category">{product.category}</p>

          <p>{product.description}</p>

          <h3>₹{product.price.toFixed(2)}</h3>

          <p>Rating: {product.rating?.rate}</p>

          <StockBadge stock={product.stock} />

          <br />

          <button
            disabled={product.stock === 0}
            onClick={() => dispatch(addToCart(product))}>
            {product.stock === 0 ? "Unavailable" : "Add to Cart"}
          </button>
        </div>
      </div>
    </main>
  );
}

export default ProductDetail;
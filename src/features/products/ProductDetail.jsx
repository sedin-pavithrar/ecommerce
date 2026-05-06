import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function ProductDetail() {
  const { id } = useParams();

  const { items } = useSelector(
    (state) => state.products
  );

  const product = items.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="detail-page">
      <Link to="/">← Back</Link>

      <div className="detail-card">
        <img
          src={product.image}
          alt={product.title}
        />

        <div>
          <h2>{product.title}</h2>

          <p>{product.description}</p>

          <h3>₹{product.price}</h3>

          <p>
            Category: {product.category}
          </p>

          <p>
            Rating: {product.rating.rate}
          </p>

          <p>
            Stock: {product.stock}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
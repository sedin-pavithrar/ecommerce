import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const cartCount = useSelector((state) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  return (
    <header className="header">
      <Link to="/" className="logo">
        E-Commerce Browser
      </Link>

      <nav>
        <Link to="/" className="nav-link">
          Home
        </Link>

        <Link to="/cart" className="nav-link">
          Cart ({cartCount})
        </Link>
      </nav>
    </header>
  );
}

export default Header;
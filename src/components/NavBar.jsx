import { Link } from "react-router-dom";
import { CartIcon } from "./CartIcon";
import "../styles/NavBar.scss";

function NavBar() {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <Link to="/" className="nav__link">
            <h1 className="nav__title">Shopping cart</h1>
          </Link>
        </li>
        <li className="nav__item">
          <CartIcon />
        </li>
      </ul>
    </nav>
  );
}

export { NavBar };

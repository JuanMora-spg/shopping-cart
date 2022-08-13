import { CartIcon } from "./CartIcon";
import "../styles/NavBar.scss";

function NavBar() {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <h1 className="nav__link nav__link--title">Shopping cart</h1>
        </li>
        <li className="nav__item">
          <CartIcon />
        </li>
      </ul>
    </nav>
  );
}

export { NavBar };

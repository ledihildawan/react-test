import { Link } from "react-router-dom";

import "./NavigationMenu.scss";

export default function NavigationMenu() {
  return (
    <nav className="main-nav">
      <ul className="main-nav__list">
        <li className="main-nav__list-item">
          <Link to="/">Home</Link>
        </li>
        <li className="main-nav__list-item">
          <Link to="/movies">Movies</Link>
        </li>
        <li className="main-nav__list-item">
          <Link to="/movies">TV Shows</Link>
        </li>
      </ul>
    </nav>
  );
}

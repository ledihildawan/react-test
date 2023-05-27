import "./MobileNavigationMenu.scss";

import { useDispatch } from "react-redux";
import { toggleShowMenuMobile } from "../../store/slices/appSlice";
import { Link, useNavigate } from "react-router-dom";

import CloseIcon from "../common/CloseIcon";
import menus from "../../constants/menus";

export default function MobileNavigationMenu() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleNavigation(menu: string) {
    dispatch(toggleShowMenuMobile());

    switch (menu) {
      case "Movies":
        return navigate("/movies");
      case "TV Shows":
        return navigate("/tv-shows");
      case "Home":
        return navigate("/");
    }
  }

  return (
    <nav className="mobile-nav">
      <CloseIcon
        onClick={() => dispatch(toggleShowMenuMobile())}
        className="icon mobile-nav__close"
      />

      <ul className="mobile-nav__list">
        {menus.map((menu, idx) => (
          <li
            key={`mobile-navigation-${idx}`}
            className="mobile-nav__list-item"
          >
            <span onClick={() => handleNavigation(menu)}>{menu}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

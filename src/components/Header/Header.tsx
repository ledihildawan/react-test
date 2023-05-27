import "./Header.scss";

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  toggleShowMenuMobile,
  toggleShowSearchMobile,
} from "../../store/slices/appSlice";

import Logo from "./../Logo/Logo";
import NavigationMenu from "./../NavigationMenu";

export default function Header() {
  const dispatch = useDispatch();

  return (
    <header className="main-header">
      <div className="container main-header__container">
        <svg
          onClick={() => dispatch(toggleShowMenuMobile())}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon main-header__menu-icon"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>

        <Link to="/">
          <Logo />
        </Link>

        <NavigationMenu />

        <div className="main-header__extra">
          <svg
            onClick={() => dispatch(toggleShowSearchMobile())}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-search"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </div>
      </div>
    </header>
  );
}

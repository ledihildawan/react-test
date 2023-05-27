import "./MobileSearch.scss";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleShowSearchMobile } from "../../store/slices/appSlice";
import { useSearchByKeywordsQuery } from "../../services/movies";

import ItemType from "./components/ItemType";
import ItemTitle from "./components/ItemTitle";
import ItemPoster from "./components/ItemPoster";
import CloseIcon from "../common/CloseIcon";

export default function MobileSearch() {
  const dispatch = useDispatch();

  const [query, setQuery] = useState("");

  const { data: items, isLoading } = useSearchByKeywordsQuery(query);

  return (
    <div className="mobile-search">
      <CloseIcon
        onClick={() => dispatch(toggleShowSearchMobile())}
        className="icon mobile-search__close"
      />

      <input
        type="text"
        className="mobile-search__input"
        placeholder="Enter keywords..."
        onChange={(e) => setQuery(e.currentTarget.value.trim())}
      />

      {isLoading && <div className="mobile-search__info">Loading...</div>}

      {items && !isLoading && (
        <ul className="mobile-search__result">
          {items.map((item) => (
            <li className="mobile-search__result-item">
              <ItemPoster item={item} />
              <div className="mobile-search__result-info">
                <ItemTitle item={item} />
                <ItemType item={item} />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

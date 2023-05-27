import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleShowSearchMobile } from "../../../store/slices/appSlice";

type Props = {
  item: any;
};

export default function ItemTitle({ item }: Props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleLink() {
    const link = item.release_date ? `/movies/${item.id}` : `/tv/${item.id}`;

    navigate(link);
    dispatch(toggleShowSearchMobile());
  }

  return (
    <span className="mobile-search__result-title" onClick={handleLink}>
      {item.original_name || item.original_title} - {item.id}
    </span>
  );
}

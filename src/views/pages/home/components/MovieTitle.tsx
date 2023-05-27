import { Link } from "react-router-dom";

type Props = {
  data: any;
};

export default function MovieTitle({ data }: Props) {
  let menu = data.release_date ? "movies" : "tv-shows";

  return (
    <h3 className="movie-card__title">
      <Link to={`/${menu}/${data.id}`}>{data.title || data.name}</Link>
    </h3>
  );
}

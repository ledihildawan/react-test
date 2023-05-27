import moviePosterPlaceholder from "./../../../../assets/images/placeholders/film-poster-placeholder.png";

type Props = {
  data: any;
};

export default function MoviePoster({ data }: Props) {
  if (!data.poster_path) {
    return (
      <img
        src={moviePosterPlaceholder}
        alt={`${data.title} Poster`}
        className="movie-card__poster"
      />
    );
  }

  return (
    <img
      src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
      alt={`${data.title} Poster`}
      className="movie-card__poster"
    />
  );
}

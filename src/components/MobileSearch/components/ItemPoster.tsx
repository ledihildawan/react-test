import moviePosterPlaceholder from "./../../../assets/images/placeholders/film-poster-placeholder.png";

type Props = {
  item: any;
};

export default function ItemPoster({ item }: Props) {
  if (!item.poster_path) {
    return (
      <img
        src={moviePosterPlaceholder}
        alt={`${item.title} Poster`}
        className="mobile-search__result-poster"
      />
    );
  }

  return (
    <img
      className="mobile-search__result-poster"
      alt={`${item.title} Poster`}
      src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
    />
  );
}

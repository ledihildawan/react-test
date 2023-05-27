import MoviePoster from "./MoviePoster";
import MovieYear from "./MovieYear";
import MovieTitle from "./MovieTitle";

type Props = {
  data: any;
};

export default function MovieCard({ data }: Props) {
  return (
    <article className="movie-card">
      <header className="movie-card__header">
        <MoviePoster data={data} />
        <MovieTitle data={data} />
      </header>
      <footer className="movie-card__meta">
        <div className="movie-card__year-duration">
          <MovieYear data={data} />
        </div>
        <div className="movie-card__type">
          <span>{data.release_date ? "Movie" : "TV"}</span>
        </div>
      </footer>
    </article>
  );
}

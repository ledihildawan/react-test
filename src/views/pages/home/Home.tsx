import {
  useGetTrendingQuery,
  useGetLatestMoviesQuery,
  useGetComingSoonMoviesQuery,
  useGetLatestTvShowsQuery,
} from "../../../services/movies";

import MainLayout from "../MainLayout";
import Section from "./components/Section";
import MovieCard from "./components/MovieCard";

export default function HomePage() {
  const {
    data: trending,
    isLoading: isLoadingTrending,
    isError: isErrorTrending,
  } = useGetTrendingQuery({ type: "all", page: 1 });
  const {
    data: latestMovies,
    isLoading: isLoadingLatestMovies,
    isError: isErrorLatestMovies,
  } = useGetLatestMoviesQuery();
  const {
    data: latestTvShows,
    isLoading: isLoadingLatestTvShows,
    isError: isErrorLatestTvShows,
  } = useGetLatestTvShowsQuery();
  const {
    data: comingSoonMovies,
    isLoading: isLoadingComingSoonMovies,
    isError: isErrorComingSoonMovies,
  } = useGetComingSoonMoviesQuery();

  return (
    <MainLayout>
      <Section
        title="🔥 Trending"
        link="/trending"
        loading={isLoadingTrending}
        error={isErrorTrending}
      >
        {trending && (
          <div className="movie-cards">
            {trending.results.map((item) => (
              <MovieCard key={item.id} data={item} />
            ))}
          </div>
        )}
      </Section>

      <Section
        title="🎞️ Latest Movies"
        link="/movies"
        loading={isLoadingLatestMovies}
        error={isErrorLatestMovies}
      >
        {latestMovies && (
          <div className="movie-cards">
            {latestMovies.results.map((item) => (
              <MovieCard key={item.id} data={item} />
            ))}
          </div>
        )}
      </Section>

      <Section
        title="📺 Latest TV Shows"
        link="/tv-shows"
        loading={isLoadingLatestTvShows}
        error={isErrorLatestTvShows}
      >
        {latestTvShows && (
          <div className="movie-cards">
            {latestTvShows.results.map((item) => (
              <MovieCard key={item.id} data={item} />
            ))}
          </div>
        )}
      </Section>

      <Section
        title="🎥 Coming Soon"
        link="/coming-soon"
        loading={isLoadingComingSoonMovies}
        error={isErrorComingSoonMovies}
      >
        {comingSoonMovies && (
          <div className="movie-cards">
            {comingSoonMovies.results.map((item) => (
              <MovieCard key={item.id} data={item} />
            ))}
          </div>
        )}
      </Section>
    </MainLayout>
  );
}

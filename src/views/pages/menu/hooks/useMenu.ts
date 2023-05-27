import {
  useGetLatestMoviesQuery,
  useGetLatestTvShowsQuery,
  useGetTrendingQuery,
} from "../../../../services/movies";

export default function useMenu(menu, { page = 1, type = "all" }) {
  switch (menu) {
    case "trending":
      return useGetTrendingQuery({ type, page });
    case "movies":
      return useGetLatestMoviesQuery(page);
    case "tv-shows":
      return useGetLatestTvShowsQuery(page);
    case "coming-soon":
      return useGetLatestTvShowsQuery(page);
  }
}

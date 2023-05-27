import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toTitleCase } from "../../../utils";
import {
  ERROR as errorMsg,
  LOADING as loadingMsg,
  FETCHING as fetchingMsg,
} from "../../../constants/message";

import useMenu from "./hooks/useMenu";
import MainLayout from "../MainLayout";
import Info from "../../../components/common/Info";
import MovieCard from "../home/components/MovieCard";

export default function Menu() {
  const { menu } = useParams();

  const title = toTitleCase(menu, true);
  const [page, setPage] = useState(1);
  const { data, isError, isLoading, isFetching } = useMenu(menu, {
    type: "all",
    page,
  });

  useEffect(() => {
    const onScroll = () => {
      const height = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      );

      if (document.documentElement.scrollTop + 657 >= height) {
        setPage(page + 1);
      }
    };

    document.addEventListener("scroll", onScroll);

    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, [page]);

  return (
    <MainLayout>
      <section className="section">
        <div className="container">
          <header className="section__header">
            <h2 className="section__title">{title}</h2>
          </header>
          <div className="section__content">
            {isError && <Info message={errorMsg} />}
            {isLoading && <Info message={loadingMsg} />}
            {data && (
              <div className="movie-cards">
                {data.results.map((item) => (
                  <MovieCard key={item.id} data={item} />
                ))}
              </div>
            )}
            {isFetching && !isLoading && (
              <Info message={fetchingMsg} textPosition="center" />
            )}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

import "./Details.scss";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetDetailsQuery } from "../../../services/movies";
import { removeTrailingS } from "../../../utils";

import MainLayout from "../MainLayout";
import Info from "../../../components/common/Info";
import {
  ERROR as errorMsg,
  LOADING as loadingMsg,
} from "../../../constants/message";

export default function Details() {
  const { menu, id } = useParams();

  const type = menu === "movies" ? "movie" : "tv";

  const { data, isError, isLoading } = useGetDetailsQuery({ type, id });

  return (
    <MainLayout>
      <article className="details">
        <header className="details-header">
          <div className="container details-header__container">
            {isError && <Info message={errorMsg} />}
            {isLoading && <Info message={loadingMsg} />}
            {data && (
              <>
                <figure className="details__poster">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                    alt=""
                  />
                </figure>
                <div className="details__info">
                  <h1 className="details__title">
                    {data.title || data.original_name}
                  </h1>
                  <p className="details__overview">{data.overview}</p>

                  <p className="details__date">
                    {`Released: ${
                      menu === "movies"
                        ? data.release_date
                        : data.first_air_date
                    }`}
                  </p>
                  <p className="details__categories">
                    Genres: {data.genres.flatMap(({ name }) => name).join(", ")}
                  </p>
                  <p className="details__productions">
                    {`Productions:
                ${data.production_companies
                  .flatMap(({ name }) => name)
                  .join(", ")}`}
                  </p>
                </div>
              </>
            )}
          </div>
        </header>
      </article>

      {/* <pre>Detail: {JSON.stringify(data, null, 2)}</pre> */}
    </MainLayout>
  );
}

type Props = {
  data: any;
};

export default function MovieYear({ data }: Props) {
  if (!data.release_date) {
    return (
      !!data.first_air_date && (
        <span className="movie-card__year">
          {new Date(data.first_air_date).getFullYear()}
        </span>
      )
    );
  }

  return (
    !!data.release_date && (
      <span className="movie-card__year">
        {new Date(data.release_date).getFullYear()}
      </span>
    )
  );
}

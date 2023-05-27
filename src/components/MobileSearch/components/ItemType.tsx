type Props = {
  item: any;
};

export default function ItemType({ item }: Props) {
  return (
    <span className="mobile-search__result-type">
      {item.release_date ? "Movie" : "TV"}
    </span>
  );
}

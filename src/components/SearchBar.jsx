import { useTripContext } from "../contexts/TripContext";

export default function SearchBar() {
  const { searchQuery, setSearchQuery } = useTripContext();

  return (
    <form className="w-100 d-flex justify-content-center" role="search">
      <input
        className="form-control w-50"
        type="search"
        placeholder="Cerca..."
        aria-label="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </form>
  );
}
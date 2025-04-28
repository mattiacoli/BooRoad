import { useTripContext } from "../contexts/TripContext";

export default function SearchBar() {
    const { searchQuery, setSearchQuery } = useTripContext();

    return (
        <form className="d-flex ms-auto" role="search">
            <input
                className="form-control me-2"
                type="search"
                placeholder="Cerca viaggi"
                aria-label="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
        </form>
    );
}
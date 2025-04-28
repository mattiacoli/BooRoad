import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function Header() {

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark rounded-bottom">
      {/* Logo */}
      <Link to="/" className="navbar-brand ms-3">
        <img src="src/assets/logo.png" style={{ width: "100px", maxHeight: '80px' }} alt="Logo" />
      </Link>

      {/* SearchBar */}
      <SearchBar />

    </nav>
  );
}
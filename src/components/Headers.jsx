import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function Header() {

  return (
    <nav className="navbar navbar-dark bg-dark rounded-bottom d-flex align-item-center justify-content-between" id="header">
      {/* Logo */}
      <div className="logo">

        <Link to="/" className="navbar-brand ms-3 ">
          <img src="src/assets/logo.png" style={{ width: "100px", maxHeight: '80px' }} alt="Logo" />
        </Link>
      </div>

      {/* SearchBar */}
      <div className="searchbar w-80  flex-grow-1">

        <SearchBar />
      </div>

    </nav>
  );
}
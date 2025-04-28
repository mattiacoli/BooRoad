import { NavLink, Link } from "react-router-dom"

export default function Header() {
  return (
    <>
      <nav
        className="navbar navbar-expand-md navbar-dark bg-dark rounded-bottom"
      >
        {/* Logo */}
        <Link to='/' className="navbar-brand ms-3">
          <img src="src/assets/logo.png" style={{ width: '80px' }} alt="" />
        </Link>

        {/* collapse button */}
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Mettere SerachBar */}

      </nav>

    </>
  )
}
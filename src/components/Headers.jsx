import { NavLink, Link } from "react-router-dom"

export default function Header() {
  return (
    <>
      <nav
        className="navbar navbar-expand-sm navbar-light bg-light"
      >
        {/* Logo */}
        <Link to='/' className="navbar-brand mx-4">
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

        {/* nav link */}
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav d-flex gap-4 ">
            <li className="nav-item">
              <NavLink className="menu_item" to={'/'}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="menu_item" to={'/'}>
                Elenco Utenti
              </NavLink>
            </li>
          </ul>
        </div>

      </nav>

    </>
  )
}
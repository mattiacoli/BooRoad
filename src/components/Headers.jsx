import { NavLink, Link } from "react-router-dom"

export default function Header() {
  return (
    <>
      <nav
        className="navbar navbar-expand-sm navbar-light bg-light"
      >


        <Link to='/' className="navbar-brand mx-4" href="#">Boo<b>Road</b></Link>
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
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav me-auto d-flex gap-2 align-item-center">
            <li className="nav-item">
              <NavLink className="menu_item" to={'/'}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="menu_item" to={'/'}>
                Users
              </NavLink>
            </li>
          </ul>
        </div>

      </nav>

    </>
  )
}
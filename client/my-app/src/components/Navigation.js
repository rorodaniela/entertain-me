import { NavLink } from "react-router-dom"


function Navigation() {
    return (
        <nav
            className="navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
        >
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                    Entertain Me{" "}
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <span
                                className="nav-link dropdown-toggle"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Categories
                            </span>
                            <ul
                                className="dropdown-menu"
                                aria-labelledby="navbarDropdown"
                            >
                                <li>
                                    <NavLink to="/" className="dropdown-item navbar-link" >
                                        All
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/movies" className="dropdown-item navbar-link" >
                                        Movie
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/series"
                                        className="dropdown-item navbar-link"
                                    >
                                        Series
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <span
                                className="nav-link dropdown-toggle"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Add More
                            </span>
                            <ul
                                className="dropdown-menu"
                                aria-labelledby="navbarDropdown"
                            >
                                <li>
                                    <NavLink
                                        to="/add/Movies"
                                        className="dropdown-item navbar-link"
                                    >
                                        Movie
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/add/Series"
                                        className="dropdown-item navbar-link"
                                    >
                                        Series
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className="navbar-link"
                                to="/favorites"
                            >
                                Favorites
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <form className="d-flex">
                <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                />
                <button className="btn btn-outline-light" type="submit">
                    Search
                </button>
            </form>
        </nav>
    );
}

export default Navigation
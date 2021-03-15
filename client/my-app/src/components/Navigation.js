import { NavLink } from "react-router-dom"


function Navigation() {
    return (
        <nav
            class="navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
        >
            <div class="container-fluid">
                <NavLink class="navbar-brand" to="/">
                    Entertain Me{" "}
                </NavLink>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div
                    class="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item dropdown">
                            <span
                                class="nav-link dropdown-toggle"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Categories
                            </span>
                            <ul
                                class="dropdown-menu"
                                aria-labelledby="navbarDropdown"
                            >
                                <li>
                                    <NavLink to="/" class="dropdown-item">
                                        All
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/movies" class="dropdown-item">
                                        Movie
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/tvseries"
                                        class="dropdown-item"
                                    >
                                        Series
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <span
                                class="nav-link dropdown-toggle"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Add More
                            </span>
                            <ul
                                class="dropdown-menu"
                                aria-labelledby="navbarDropdown"
                            >
                                <li>
                                    <NavLink
                                        to="/add/movies"
                                        class="dropdown-item"
                                    >
                                        Movie
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/add/tvseries"
                                        class="dropdown-item"
                                    >
                                        Series
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <NavLink
                                class="nav-link active"
                                aria-current="page"
                                to="/favorites"
                            >
                                Favorites
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <form class="d-flex">
                <input
                    class="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                />
                <button class="btn btn-outline-light" type="submit">
                    Search
                </button>
            </form>
        </nav>
    );
}

export default Navigation
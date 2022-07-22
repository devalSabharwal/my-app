import React from "react";

export default function NavBar1(props) {
  const setColorPallet = (colorPallet) => {
    if (colorPallet === "primary") {
      props.changeColorMode("#198754");
    } else if (colorPallet === "success") {
      props.changeColorMode("#0d6efd");
    } else if (colorPallet === "warning") {
      props.changeColorMode("#ffc107");
    }
  };
  return (
    <nav
      className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Navbar
        </a>
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                {props.aboutText}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Link
              </a>
            </li>
            <button
              className="btn btn-primary mx-2"
              onClick={setColorPallet("primary")}
            >
              Primary
            </button>
            <button
              className="btn btn-success mx-2"
              onClick={setColorPallet("success")}
            >
              Success
            </button>
            <button
              className="btn btn-warning mx-2"
              onClick={setColorPallet("warning")}
            >
              Warning
            </button>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />

            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

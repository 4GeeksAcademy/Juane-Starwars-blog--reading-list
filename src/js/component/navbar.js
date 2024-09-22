import React, { useState, useContext } from "react";
import logo from "../../img/starwar_logo.png";
import { Context } from "../store/appContext";
import { useNavigate, Link } from "react-router-dom";


export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  return (
    <div className="container-fluid navbar-light bg-light">
      <nav className="container navbar">
        <Link to="/">
          <img src={logo} style={{ width: "100px" }} alt="star wars logo" />
        </Link>
        <div className="d-flex flex-row">
          <form className="input-group me-3">
            <div className="input-group-prepend">
            </div>
          </form>
          <div className="dropdown">
            <button
              className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Favorites{" "}
              <span className="badge bg-secondary">
                {store.favorites.length}
              </span>
            </button>
            <ul
              className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              {store.favorites && store.favorites.length > 0 ? (store.favorites.map((fav, index) => (
                <li key={fav}>
                  <a className="dropdown-item d-flex justify-content-between" onClick={() => actions.removeFavorites(index)}>
                    {fav}
                    <i className="fas fa-trash mt-1"></i>
                  </a>
                </li>))) : (
                <li className="text-center">(empty)</li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

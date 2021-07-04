import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./css/Nav.css";
import logo from "./assets/jainflix_logo.png";

function Nav() {
  const [show, handleshow] = useState(false);
  const history = useHistory();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? handleshow(true) : handleshow(false);
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src={logo}
        alt="Jainflix Logo"
        onClick={() => history.push("/")}
      />
      <ul className="nav_menu">
        <li className="nav_menu_items">Home</li>
        <li className="nav_menu_items">Series</li>
        <li className="nav_menu_items">Movies</li>
        <li className="nav_menu_items">My List</li>
      </ul>
      <img
        className="nav_avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Avatar"
      />
    </div>
  );
}

export default Nav;

import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  return (
    <nav style={{ display: "flex", padding: "1.5em" }}>
      <Link to={"/"}>
        <h1 style={{ margin: "0", color: "#366ed0" }}>MoviePlay</h1>
      </Link>
      <div style={{ marginLeft: "auto" }}>
        <button className="login">Login</button>
        <button className="singUp">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;

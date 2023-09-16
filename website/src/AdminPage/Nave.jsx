import React, { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

import "./Nave.css";
import { Link, useNavigate } from "react-router-dom";

function Nave() {
  const navigate = useNavigate();
  return (
    <section id="Nave">
      <nav className="nav">
        <div className="logo">
          <h2>motta maadi music</h2>
        </div>
        <ul className="ms-auto">
          <button type="" className="m-2 btn btn-warning">
            <Link to={"/MMM_Admin_login"}>Login</Link>
          </button>
          <button type="" className="m-2 btn btn-warning">
            <Link to={"/"}>Home</Link>
          </button>
        </ul>
      </nav>
    </section>
  );
}

export default Nave;

import React from "react";
import "./Admin.css";
import Nave from "./Nave";
import Users from "./Users";
import Slidebar from "./Slidebar";

function Admin() {
  return (
    <section className="container-fluid">
      <div className="row">
        <Nave />
        <div className="col-2 col-lg-2 col-sm-2 col-md-2">
          <Slidebar />
        </div>
        <div
          className="container-fluid col-10 col-lg-10 col-sm-10 col-md-10 bg-body-secondary min-vh-100"
          id="Admin"
        >
          <Users />
        </div>
      </div>
    </section>
  );
}

export default Admin;

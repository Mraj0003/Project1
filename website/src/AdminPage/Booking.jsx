import "./Booking.css";

import React from "react";

import { MdPersonRemove } from "react-icons/md";

import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import axios from "axios";
import Nave from "./Nave";
import Slidebar from "./Slidebar";

//view product
function Booking() {
  const [addata, setData] = useState([]);

  const loadData = async () => {
    const response = await axios.get("http://localhost:5003/Booking");
    setData(response.data);
  };
  useEffect(() => {
    loadData();
  }, []);

  //Delete product
  const deleteContact = (Id) => {
    if (window.confirm("")) {
      axios.delete(`http://localhost:5003/Booking/remove/${Id}`);
      setTimeout(() => loadData(), 500);
    }
  };

  return (
    <div className="row">
      <Nave />
      <div className="col-2 col-lg-2 col-sm-2 col-md-2">
        <Slidebar />
      </div>
      <div className="container-fluid col-10 col-lg-10 col-sm-10 col-md-10 bg-body-secondary min-vh-100">
        <div className="" id="Booking">
          <h5>
            <i class="bi bi-journal-text"></i> Booking
          </h5>
          <div>
            <Link to="/AddBooking" className="btn btn-primary">
              Add Booking
            </Link>
          </div>
        </div>
        <div className="mt-3 table-responsive" id="Table">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>S.No</th>

                <th>Name</th>
                <th>Organization</th>
                <th>Number</th>
                <th>Address</th>
                <th>Email</th>
                <th>Date/time</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {addata.map((user, index) => (
                <tr key={index}>
                  <th scope="row">{user.Id}</th>
                  <td>{user.Name}</td>
                  <td>{user.Organization}</td>
                  <td>{user.Number}</td>
                  <td>{user.Address}</td>
                  <td>{user.Email}</td>
                  <td>{user.Datetime}</td>

                  <td className=" justify-content-around">
                    <Link>
                      {" "}
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteContact(user.Id)}
                      >
                        <MdPersonRemove />
                      </button>{" "}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default Booking;

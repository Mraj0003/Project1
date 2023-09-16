import React from "react";

import "./Schedule.css";

import { MdPersonRemove } from "react-icons/md";

import { useEffect, useState } from "react";
import { BiEdit } from "react-icons/bi";

import { Link } from "react-router-dom";

import axios from "axios";
import Nave from "./Nave";
import Slidebar from "./Slidebar";

function Schedule() {
  //view Schedule

  const [Schedule, setSchedule] = useState([]);

  const loadData = async () => {
    const response = await axios.get("http://localhost:5003/Schedule");
    setSchedule(response.data);
  };
  useEffect(() => {
    loadData();
  }, []);

  //Delete Schedule
  const deleteContact = (Id) => {
    if (window.confirm("")) {
      axios.delete(`http://localhost:5003/Schedule/remove/${Id}`);
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
            <i class="bi bi-journal-text"></i> Schedule
          </h5>
          <div>
            <Link to="/AddSchedule" className="btn btn-primary">
              Add Schedule
            </Link>
          </div>
        </div>
        <div className="mt-3 table-responsive" id="Table">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>S.No</th>

                <th>Name</th>
                <th>Description</th>
                <th>Number</th>
                <th>Date</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {Schedule.map((user, index) => (
                <tr key={index}>
                  <th scope="row">{user.Id}</th>
                  <td>{user.Name}</td>
                  <td>{user.Description}</td>
                  <td>{user.Number}</td>
                  <td>{user.Date}</td>

                  <td className="d-flex justify-content-around">
                    <Link to={`/Updateusers/${user.Id}`}></Link>
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

export default Schedule;

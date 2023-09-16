import React from "react";
import "./Feedback.css";

import { MdPersonRemove } from "react-icons/md";

import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import axios from "axios";
import Nave from "./Nave";
import Slidebar from "./Slidebar";

function Feedbackview() {
  //view Feedback

  const [Feedback, setFeedback] = useState([]);

  const loadData = async () => {
    const response = await axios.get("http://localhost:5003/Feedback");
    setFeedback(response.data);
  };
  useEffect(() => {
    loadData();
  }, []);

  //Delete Feedback
  const deleteContact = (Id) => {
    if (window.confirm("")) {
      axios.delete(`http://localhost:5003/Feedback/remove/${Id}`);
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
        <div className="" id="Feedback">
          <h5>Feedback</h5>
          <div>
            <Link to="/Admin" className="btn btn-primary">
              Back
            </Link>
          </div>
        </div>
        <div className="mt-3 table-responsive" id="Table">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Feedback</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {Feedback.map((user, index) => (
                <tr key={index}>
                  <th scope="row">{user.Id}</th>

                  <td>{user.FeedbackName}</td>
                  <td>{user.Feedback}</td>

                  <td className="d-flex justify-content-around">
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

export default Feedbackview;

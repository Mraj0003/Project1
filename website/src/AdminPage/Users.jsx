import "./Users.css";
import React, { useEffect, useState } from "react";
import { BiEdit } from "react-icons/bi";
import { MdPersonRemove } from "react-icons/md";
import { Link } from "react-router-dom";
import axios from "axios";

function Users() {
  const [addata, setData] = useState([]);

  const loadData = async () => {
    try {
      const response = await axios.get("http://localhost:5003/Users");
      setData(response.data);
    } catch (error) {
      console.error("Error loading data:", error);
    }
  };

  const deleteContact = async (Id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await axios.delete(`http://localhost:5003/Users/remove/${Id}`);
        setTimeout(loadData, 500);
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="px-3">
      <div className="row">
        <div className="" id="Users">
          <h5>
            <i className="bi bi-journal-text"></i> Users Account
          </h5>
          <div>
            <Link to="/Register" className="btn btn-primary">
              New User
            </Link>
          </div>
        </div>
        <div className="mt-3 table-responsive" id="Table">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Username</th>
                <th>Number</th>
                <th>Password</th>
                <th>mail</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {addata.map((user, index) => (
                <tr key={index}>
                  <th scope="row">{user.Id}</th>
                  <td>{user.Username}</td>
                  <td>{user.Number}</td>
                  <td>{user.Password}</td>
                  <td>{user.mail}</td>
                  <td className="d-flex justify-content-around">
                    <Link to={`/Updateusers/${user.Id}`}></Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteContact(user.Id)}
                    >
                      <MdPersonRemove />
                    </button>
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

export default Users;

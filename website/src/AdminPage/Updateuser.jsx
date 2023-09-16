import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdateUsers() {
  const { Id } = useParams();
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    Username: "",
    Number: "",
    Password: "",
    mail: "",
  });

  useEffect(() => {
    // Fetch user data by their ID
    axios
      .get(`http://localhost:5003/Register/${Id}`)
      .then((res) => {
        // Set user data in the state
        setUserData(res.data);
      })
      .catch((error) => console.log(error));
  }, [Id]);

  const handleChange = (e) => {
    // Update the user data when form fields change
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send a PUT request to update user data
    axios
      .put(`http://localhost:5003/Register/${Id}`, userData)
      .then((res) => {
        alert("Data updated");
        navigate("/"); // Redirect to the homepage or another page
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="container-fluid" id="UpdateUsers">
      <div className="container mt-5 pt-5">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-8">
            <div className="card">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="text-center">
                    <h1>Update User</h1>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="Username">Name</label>
                    <input
                      className="form-control"
                      type="text"
                      name="Username"
                      placeholder="Enter a Name"
                      value={userData.Username}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="Number">Number</label>
                    <input
                      className="form-control"
                      type="text"
                      name="Number"
                      placeholder="E-mail or Number"
                      value={userData.Number}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="Password">Password</label>
                    <input
                      className="form-control"
                      type="password"
                      name="Password"
                      placeholder="Enter a password"
                      value={userData.Password}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="mail">E-mail</label>
                    <input
                      className="form-control"
                      type="text"
                      name="mail"
                      placeholder="Reenter a password"
                      value={userData.mail}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="text-center mb-3">
                    <a href="/">Login</a>
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-success">
                      Update
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateUsers;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Loginpg.css";

const Loginpg = () => {
  const [values, setValues] = useState({
    Username: "",
    Password: "",
  });

  const [errors, setError] = useState({});
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationError = {};

    if (!values.Username.trim()) {
      validationError.Username = "Username is required";
    }
    if (!values.Password.trim()) {
      validationError.Password = "Password is required";
    }
    setError(validationError);

    if (Object.keys(validationError).length === 0) {
      axios
        .post("http://localhost:5003/login", values)
        .then((res) => {
          if (res.data.login) {
            navigate("/Admin");
          } else {
            alert("Login failed! Please check your credentials.");
          }
          console.log(res);
        })
        .catch((err) => {
          // Handle error here, e.g., display an error message.
          console.error(err);
        });

      // Reset input fields
      setValues({
        Username: "",
        Password: "",
      });
    }
  };

  return (
    <div className="container-fluid" id="Loginpg">
      <div className=" mt-5 pt-5">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div className="mb-3">
                  <label htmlFor="Username">Username</label>
                  <input
                    className=""
                    type="text"
                    name="Username"
                    placeholder="Username"
                    value={values.Username}
                    onChange={handleChange}
                  />
                  {errors.Username && <span>{errors.Username}</span>}
                </div>
                <div className="mb-3">
                  <label htmlFor="Password">Password</label>
                  <input
                    className=""
                    type="password"
                    name="Password"
                    placeholder="Enter a password"
                    value={values.Password}
                    onChange={handleChange}
                  />
                  {errors.Password && <span>{errors.Password}</span>}
                </div>

                <div className="mb-3">
                  <button
                    type="submit"
                    className="btn btn-success"
                    onSubmit={handleSubmit}
                  >
                    Sign In
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loginpg;

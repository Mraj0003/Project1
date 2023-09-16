import axios from "axios";
import "./Register.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register() {
  const [userdata, setdata] = useState({
    Username: "",
    Number: "",
    Password: "",
    mail: "",
  });

  const [errors, setError] = useState({});
  const navigate = useNavigate();

  const handlechange = (event) => {
    setdata({ ...userdata, [event.target.name]: event.target.value });
  };

  const saveUser = async (event) => {
    event.preventDefault();
    const validationError = {};

    if (!userdata.Username.trim()) {
      validationError.Username = "Username is required";
    }
    if (!userdata.mail.trim()) {
      validationError.mail = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(userdata.mail)) {
      validationError.mail = "Email is not valid";
    }
    if (!userdata.Password.trim()) {
      validationError.Password = "Password is required";
    } else if (userdata.Password.length < 6) {
      validationError.Password = "Password must be at least 6 characters";
    }
    if (!userdata.Number.trim()) {
      validationError.Number = "Number is required";
    } else if (userdata.Number.length !== 10) {
      validationError.Number = "Number must be 10 digits";
    }

    setError(validationError);

    if (Object.keys(validationError).length === 0) {
      axios
        .post(`http://localhost:5003/Register/`, userdata)
        .then((res) => {
          console.log(res);
          setdata({
            Username: "",
            Number: "",
            Password: "",
            mail: "",
          });
          toast("Wow so easy!");

          //  navigate("/Login"); // Redirect after successful registration
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <div className="container-fluid" id="Register">
      <div className="container mt-5 pt-5">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-8">
            <div className="card">
              <div className="card-body">
                <form onSubmit={saveUser}>
                  <div className="text-center">
                    <h1>Register</h1>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="login">Name</label>
                    <input
                      className="form-control"
                      type="text"
                      name="Username"
                      placeholder="Enter a Name"
                      onChange={handlechange}
                      value={userdata.Username}
                    />
                    {errors.Username && <span>{errors.Username}</span>}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="login">Number</label>
                    <input
                      className="form-control"
                      type="text"
                      name="Number"
                      placeholder="E-mail or Number"
                      onChange={handlechange}
                      value={userdata.Number}
                    />
                    {errors.Number && <span>{errors.Number}</span>}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="login">Password</label>
                    <input
                      className="form-control"
                      type="password"
                      name="Password"
                      placeholder="Enter a password"
                      onChange={handlechange}
                      value={userdata.Password}
                    />
                    {errors.Password && <span>{errors.Password}</span>}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password">E-mail</label>
                    <input
                      className="form-control"
                      type="text"
                      name="mail"
                      placeholder="Reenter a password"
                      onChange={handlechange}
                      value={userdata.mail}
                    />
                    {errors.mail && <span>{errors.mail}</span>}
                  </div>
                  <div className="text-center mb-3">
                    <a href="/">Login</a>
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-success">
                      Save
                    </button>
                  </div>
                  <ToastContainer />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;

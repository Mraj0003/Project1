import React, { useRef } from "react";

import { useEffect, useState } from "react";

import "./AddBooking.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";
import { toHaveFormValues } from "@testing-library/jest-dom/matchers";

function AddBooking() {
  //Add Booking

  const [Booking, setBooking] = useState({
    Name: "",
    Organization: "",
    Number: "",
    Address: "",
    Email: "",
    Datetime: "",
  });

  const formbooking = useRef({
    Name: "",
    Organization: "",
    Number: "",
    Address: "",
    Email: "",
    Datetime: "",
  });
  const submitBooking = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5003/AddBooking", Booking)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
    toast("Wow so easy!");
    formbooking.current.reset();
  };

  useEffect(() => {
    window.localStorage.setItem("success", JSON.stringify(toHaveFormValues));
  });
  return (
    <div className="row" id="AddBooking">
      <form ref={formbooking} onSubmit={submitBooking}>
        <div className="Title">
          <h5>
            <i class="bi bi-file-earmark-plus-fill"></i>Concert Booking{" "}
          </h5>
          <hr />
        </div>
        <br />
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
            <label className="form-label" for="name">
              Name
            </label>
            <input
              className="form-control"
              type="text"
              name="Name"
              id="Name"
              placeholder="Enter  Name"
              onChange={(e) => setBooking({ ...Booking, Name: e.target.value })}
            />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
            <label className="form-label" for="name">
              Organization
            </label>
            <input
              className="form-control"
              type="text"
              name="Organization"
              id="Organization"
              placeholder="Enter  Name"
              onChange={(e) =>
                setBooking({ ...Booking, Organization: e.target.value })
              }
            />
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <label className="form-label" for="name">
              Number
            </label>
            <input
              className="form-control"
              type="text"
              name="Number"
              id="Number"
              placeholder="Enter  Number"
              onChange={(e) =>
                setBooking({ ...Booking, Number: e.target.value })
              }
            />
          </div>
        </div>
        <br />
        <div className="col-12 col-md-6 col-lg-4">
          <label className="form-label" for="name">
            Address
          </label>
          <textarea
            className="form-control"
            style={{ resize: "none" }}
            rows={10}
            cols={10}
            type="text"
            name="Address"
            id="Address"
            placeholder="Enter  Name"
            onChange={(e) =>
              setBooking({ ...Booking, Address: e.target.value })
            }
          />
        </div>
        <br />
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
            <label className="form-label">Mail-Id</label>
            <input
              className="form-control"
              type="Email"
              name="Email"
              id="Productimg"
              placeholder="Enter mail"
              onChange={(e) =>
                setBooking({ ...Booking, Email: e.target.value })
              }
            />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
            <label className="form-label" for="name">
              Date / Time
            </label>
            <input
              className="form-control"
              type="date"
              name="Datetime"
              id="Datetime"
              placeholder="Enter Name"
              onChange={(e) =>
                setBooking({ ...Booking, Datetime: e.target.value })
              }
            />
          </div>
        </div>
        <div
          className="col-3 col-md-3 col-lg-3 mt-5 d-flex justify-content-between"
          id="Button"
        >
          <button
            type="submit"
            className="btn btn-success "
            disabled={
              !Booking.Name ||
              !Booking.Organization ||
              !Booking.Number ||
              !Booking.Address ||
              !Booking.Email ||
              !Booking.Datetime
            }
          >
            Save Product
          </button>
          <ToastContainer />
          <button type="reset" className="btn btn-danger">
            Clear All
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddBooking;

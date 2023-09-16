import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Addschedule.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";
import { toHaveFormValues } from "@testing-library/jest-dom/matchers";

//Add product
function AddSchedule() {
  const [Schedule, setSchedule] = useState({
    Name: "",
    Description: "",
    Number: "",
    Date: "",
  });

  const navigate = useNavigate();

  const submitSchedule = async (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5003/AddSchedule", Schedule)
      .then((res) => {
        console.log(res);
        setSchedule({
          Name: "",
          Description: "",
          Number: "",
          Date: "",
        });
      })
      .catch((err) => console.log(err));
    toast("Wow so easy!");
    navigate("/Schedule");
    fromschedul.current.reset();
  };
  const fromschedul = useRef({
    Name: "",
    Description: "",
    Number: "",
    Date: "",
  });

  useEffect(() => {
    window.localStorage.setItem("success", JSON.stringify(toHaveFormValues));
  });

  return (
    <div className="row col-auto" id="Addschedule">
      <div className="">
        <h5>
          <i class="bi bi-file-earmark-plus-fill"></i> Add schedule{" "}
        </h5>
        <hr />
      </div>

      <form ref={fromschedul} onSubmit={submitSchedule}>
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
              onChange={(e) =>
                setSchedule({ ...Schedule, Name: e.target.value })
              }
            />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
            <label className="form-label" for="name">
              Description
            </label>
            <textarea
              className="form-control"
              style={{ resize: "none" }}
              defaultValue="What Program!"
              rows={5}
              cols={5}
              type="text"
              name="Description"
              id="Description"
              placeholder="Enter  Name"
              onChange={(e) =>
                setSchedule({ ...Schedule, Description: e.target.value })
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
                setSchedule({ ...Schedule, Number: e.target.value })
              }
            />
          </div>
        </div>
        <br />

        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
            <label className="form-label" for="name">
              Date
            </label>
            <input
              className="form-control"
              type="date"
              name="Date"
              id="Date"
              placeholder="Enter Name"
              onChange={(e) =>
                setSchedule({ ...Schedule, Date: e.target.value })
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
            onSubmit={submitSchedule}
            disabled={
              !Schedule.Name ||
              !Schedule.Number ||
              !Schedule.Description ||
              !Schedule.Date
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

export default AddSchedule;

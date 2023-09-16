import React, { useState } from "react";
import { FcBusinessman } from "react-icons/fc";
import { FcCalendar } from "react-icons/fc";
import { FcCustomerSupport } from "react-icons/fc";
import { FcFeedback } from "react-icons/fc";
import { FcConferenceCall } from "react-icons/fc";
import "./Slidebar.css";

function Slidebar() {
  return (
    <div className="" id="Slidebar">
      <div className="list-group list-group-flush " id="Slidebar_container">
        <a
          href="/Users"
          className="list-group-item list-group-item-action my-2"
        >
          <i>
            {" "}
            <FcBusinessman />{" "}
          </i>{" "}
          <span>Users</span>
        </a>
        <a
          href="/Booking"
          className="list-group-item list-group-item-action my-2"
        >
          <i>
            <FcCustomerSupport />{" "}
          </i>{" "}
          <span>Booking</span>
        </a>
        <a
          href="/Schedule"
          className="list-group-item list-group-item-action my-2"
        >
          <i>
            <FcCalendar />
          </i>{" "}
          <span>Schedule</span>
        </a>
        <a
          href="/Feedbackview"
          className="list-group-item list-group-item-action my-2"
        >
          <i>
            <FcFeedback />{" "}
          </i>{" "}
          <span>Feedback</span>
        </a>
        <a
          href="/Register"
          className="list-group-item list-group-item-action my-2"
        >
          <i>
            <FcConferenceCall />
          </i>{" "}
          <span>New User</span>
        </a>
      </div>
    </div>
  );
}

export default Slidebar;

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"; // Importing Routes
import Home from "./Home";
import Loginpg from "./Loginpg/Loginpg";
import Booking from "./AdminPage/Booking";
import Schedule from "./AdminPage/Schedule";
import Admin from "./AdminPage/Admin";
import AddSchedule from "./AdminPage/Addschedule";
import Users from "./AdminPage/Users";
import Updateusers from "./AdminPage/Updateuser";
import Feedbackview from "./AdminPage/Feedback";
import AddBooking from "./AdminPage/AddBooking";
import Register from "./AdminPage/Register";
import HomeFeedback from "./Contact/HomeFeedback";

function App() {
  return (
    <div>
      <div className="container-fluid" id="container">
        <div className="row">
          <div className="col-12">
            <BrowserRouter>
              <Routes>
                {" "}
                {/* Use Routes instead of Route */}
                <Route path="/" element={<Home />} />
                <Route path="/MMM_Admin_login" element={<Loginpg />} />
                <Route path="/Booking" element={<Booking />} />
                <Route path="/Schedule" element={<Schedule />} />
                <Route path="/Admin" element={<Admin />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/users" element={<Users />} />
                <Route path="/Updateusers/:Id" element={<Updateusers />} />
                <Route path="/AddSchedule" element={<AddSchedule />} />
                <Route path="/Feedbackview" element={<Feedbackview />} />
                <Route path="/HomeFeedback" element={<HomeFeedback />} />
                <Route path="/AddBooking" element={<AddBooking />} />
              </Routes>
            </BrowserRouter>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

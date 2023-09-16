const cookieParser = require("cookie-parser");
const express = require("express");
const server = express();
const mysql = require("mysql2");
const cors = require("cors");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  port: 3333, // Remove the quotes around 3333
  password: "1523",
  database: "stock",
});

server.use(cors());
server.use(express.json());
server.use(cookieParser());

db.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("mysql connected");
  }
});

server.get("/", (req, res) => {
  res.send("server");
});

//Login Pages
//add Users

server.post("/Register/", (req, res) => {
  const sqlinsert =
    "INSERT INTO loginpage (Username, Number, Password, mail) VALUES (?, ?, ? ,?)";
  const userdata = [
    req.body.Username,
    req.body.Number,
    req.body.Password,
    req.body.mail,
  ];
  db.query(sqlinsert, userdata, (error, data) => {
    if (error) {
      return res.json(error);
    }
    return res.json(data);
  });
});

//login
server.post("/login", (req, res) => {
  const sqlQuery =
    "SELECT * FROM loginpage WHERE Username = ? AND Password = ?";

  db.query(sqlQuery, [req.body.Username, req.body.Password], (err, result) => {
    if (err) {
      return res.json("login error");
    }
    if (result.length > 0) {
      return res.json({ login: true });
    } else {
      return res.json({ login: false });
    }
  });
});

//New users display
server.get("/Users", (req, res) => {
  const sqlGet = "SELECT * FROM loginpage";
  db.query(sqlGet, (error, result) => {
    if (error) {
      console.log(error);
    }
    res.send(result);
  });
});

//Delete Users
server.delete("/Users/remove/:Id", (req, res) => {
  const { Id } = req.params;
  const sqlRemove = "DELETE FROM loginpage WHERE Id = ?";
  db.query(sqlRemove, Id, (err, result) => {
    if (err) {
      console.log("error", err);
    } else {
      console.log("result", result);
    }
  });
});

// Update Users

//Booking
//Booking display
server.get("/Booking", (req, res) => {
  const sqlGet = "SELECT * FROM Booking";
  db.query(sqlGet, (error, result) => {
    if (error) {
      console.log(error);
    }
    res.send(result);
  });
});

//Add Booking
server.post("/AddBooking", (req, res) => {
  const { Name, Organization, Number, Address, Email, Datetime } = req.body;
  const sqlInsert =
    "INSERT INTO Booking (Name, Organization, Number,Address,Email, Datetime) VALUES (?,?,?,?,?,?)";
  db.query(
    sqlInsert,
    [Name, Organization, Number, Address, Email, Datetime],
    (err, result) => {
      if (err) {
        console.log("error", err);
      } else {
        console.log("result", result);
      }
    }
  );
});

//Delete Booking
server.delete("/Booking/remove/:Id", (req, res) => {
  const { Id } = req.params;
  const sqlRemove = "DELETE FROM Booking WHERE Id = ?";
  db.query(sqlRemove, Id, (err, result) => {
    if (err) {
      console.log("error", err);
    } else {
      console.log("result", result);
    }
  });
});
//Schedule
//Schedule display
server.get("/Schedule", (req, res) => {
  const sqlGet = "SELECT * FROM Schedule";
  db.query(sqlGet, (error, result) => {
    if (error) {
      console.log(error);
    }
    res.send(result);
  });
});

//Add Schedule
server.post("/AddSchedule", (req, res) => {
  const { Name, Description, Number, Date } = req.body;
  const sqlInsert =
    "INSERT INTO Schedule (Name, Description, Number, Date) VALUES (?,?,?,?)";
  db.query(sqlInsert, [Name, Description, Number, Date], (err, result) => {
    if (err) {
      console.log("error", err);
    } else {
      console.log("result", result);
    }
  });
});

//Delete Schedule
server.delete("/Schedule/remove/:Id", (req, res) => {
  const { Id } = req.params;
  const sqlRemove = "DELETE FROM Schedule WHERE Id = ?";
  db.query(sqlRemove, Id, (err, result) => {
    if (err) {
      console.log("error", err);
    } else {
      console.log("result", result);
    }
  });
});

//Feedback
//Feedback display
server.get("/Feedback", (req, res) => {
  const sqlGet = "SELECT * FROM Feedbacks";
  db.query(sqlGet, (error, result) => {
    if (error) {
      console.log(error);
    }
    res.send(result);
  });
});

//Add Feedback
server.post("/AddFeedback", (req, res) => {
  const { FeedbackName, Feedback } = req.body;
  const sqlInsert =
    "INSERT INTO Feedbacks (FeedbackName,Feedback) VALUES (?,?)";
  db.query(sqlInsert, [FeedbackName, Feedback], (err, result) => {
    if (err) {
      console.log("error", err);
    } else {
      console.log("result", result);
    }
  });
});

//Delete Feedback
server.delete("/Feedback/remove/:Id", (req, res) => {
  const { Id } = req.params;
  const sqlRemove = "DELETE FROM Feedbacks WHERE Id = ?";
  db.query(sqlRemove, Id, (err, result) => {
    if (err) {
      console.log("error", err);
    } else {
      console.log("result", result);
    }
  });
});

server.listen(5003, () => {
  console.log("server connect");
});

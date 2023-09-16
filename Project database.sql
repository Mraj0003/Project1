
create database stock;
 use stock;
 
create table Booking
(
Id int primary key auto_increment,
Name varchar(50),
Organization varchar(50),
Number varchar(50),
Address varchar(250),
Email varchar(50),
Datetime varchar(100)
);

create table Schedule
(
  Id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
Name varchar(50),
Description varchar(50),
Number varchar(50),
Date varchar(100)
);

CREATE TABLE loginpage (
  Id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  Username VARCHAR(255),
  Number VARCHAR(255),
  Password VARCHAR(255),
  mail varchar(255)
);

CREATE TABLE Feedback(
  Id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  FeedbackName varchar(250),
Feedback varchar(250)
);

select * from Schedule;
select * from Booking;
select * from Feedback;
select * from loginpage;


INSERT INTO Feedback values ("7","good","bad");
INSERT INTO Schedule (Name, Description, Number, Date)
VALUES ('John Doe', 'Meeting with clients', '1234567890', '2023-08-15');

INSERT INTO Booking (Name, Organization,Address, Number, Email, Datetime) VALUES
('John Doe', 'Company A','ajay', '1234567890', 'john.doe@example.com', '2023-08-19 10:30:00'),
('Jane Smith', 'Company B','ajay', '9876543210', 'jane.smith@example.com', '2023-08-19 11:45:00');








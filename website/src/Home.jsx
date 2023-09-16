import React, { useEffect, useState } from "react";
import axios from "axios";
import Fade from "react-reveal/Fade";

import img1 from "./Image/About _ Instrument _ Redefining brands and experiences (1).jpg";
import img2 from "./Image/About _ Instrument _ Redefining brands and experiences (2).jpg";
import img3 from "./Image/About _ Instrument _ Redefining brands and experiences (3).jpg";
import img4 from "./Image/About _ Instrument _ Redefining brands and experiences.jpg";
import img5 from "./Image/Person 4.jpg";
import img7 from "./Image/imageHome/img7.jpg";
import img8 from "./Image/imageHome/img8.jpg";
import img9 from "./Image/imageHome/img9.jpg";
import img10 from "./Image/imageHome/img10.jpg";
import img11 from "./Image/imageHome/img11.jpg";
import img12 from "./Image/imageHome/img12.jpg";
import img13 from "./Image/imageHome/img13.jpg";
import img14 from "./Image/imageHome/img14.jpg";
import img15 from "./Image/imageHome/img15.jpg";

import { Carousel } from "react-bootstrap";

import { Navbar, Container, Nav } from "react-bootstrap";

import { useRef } from "react";
import emailjs from "@emailjs/browser";

import "./Home.css";
import "./About.css";
import "./Demo.css";
import "./Band.css";
import "./navebar/nave.css";
import "./Contact/Feedback.css";
import "./Footer/Footer.css";
import "./";

//Demo  Define the video array outside the video function
const video = [
  {
    id: 1,
    title: "video1",
    src: "https://www.youtube.com/embed/Al4ENfg8MYo",
    credit: "",
  },
  {
    id: 2,
    title: "video2",
    src: "https://www.youtube.com/embed/oal8sW_NhLw",
    credit: "",
  },
  {
    id: 3,
    title: "video3",
    src: "https://www.youtube.com/embed/3a_Hmbhlu5o",
    credit: "",
  },
];

function Home() {
  //circle
  useEffect(() => {
    const circletext = document.querySelector(".circletext");
    if (circletext) {
      const textContent = circletext.textContent;
      const transformedText = textContent.replace(
        /\S/g,
        "<span style='display: inline-block;'>$&</span>"
      );
      circletext.innerHTML = transformedText;

      const elements = document.querySelectorAll(".circletext span");
      elements.forEach((element, i) => {
        element.style.transform = `rotate(${+i * 20}deg)`;
      });
    }
  }, []);

  //Feedback
  const [Feedbacks, setFeedback] = useState({
    FeedbackName: "",
    Feedback: "",
  });

  const formfeed = useRef({
    FeedbackName: "",
    Feedback: "",
  });

  const submitFeedback = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5003/AddFeedback", Feedbacks)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.log(error));

    formfeed.current.reset();
  };

  //Contact

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4gqs9ng",
        "template_ftyi3ja",
        form.current,
        "OhAOueT52TrQgp5ZM"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
  };

  //

  return (
    <div className="col-12 col-lg-12 col-md-12 col-sm-12">
      <section id="Nave">
        <Navbar expand="lg" className="bg-body-tertiary menu">
          <Container>
            <Navbar.Brand href="#Home"> Motta Maadi Music</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto ">
                <Nav.Link href="#Nave">Home</Nav.Link>
                <Nav.Link href="#introduction">About</Nav.Link>
                <Nav.Link href="#Band"> Team</Nav.Link>
                <Nav.Link href="#Demo"> Concert</Nav.Link>
                <Nav.Link href="/HomeFeedback">Review</Nav.Link>
                <Nav.Link href="#Footer">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </section>

      <Fade top distance="50" duration={2000}>
        <section id="Home">
          <div className="row">
            <div className="col-12 col-lg-6 col-md-6 col-sm-8">
              <div className="text">
                {" "}
                We make your <br /> <span>celebration</span> <br />{" "}
                <span>unforgettable</span> <br />
              </div>
              <br />
              <div className="textpara">
                <h5> Welcome to Motta Maadi Music</h5>
                <br /> Where Music Comes to Life
                <br />
                Are you ready to immerse yourself in the world of music like
                never before? Look no further than Motta Maadi Music, your
                ultimate destination for unforgettable musical experiences. A
                harmonious spectacle where melodies weave dreams and emotions
                dance in the spotlight of sound.
              </div>
              <br />
              <button className="btn btn-light">
                <a href="/AddBooking"> Start Booking</a>
              </button>
            </div>
            <div className="slide col-12 col-lg-6 col-md-6 col-sm-8">
              <Carousel>
                <Carousel.Item>
                  <img src={img7} alt="" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={img8} alt="" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={img9} alt="" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={img10} alt="" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={img11} alt="" />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </section>

        <section id="About">
          <div className="row">
            <div className="anime col-12 col-lg-6 col-md-6 col-sm-8">
              {" "}
              <div className="circle">
                <div className="circletext">
                  <p>motta - maadi - music-</p>
                </div>
              </div>
            </div>
            <div
              className="col-12 col-lg-6 col-md-6 col-sm-8 "
              id="introduction"
            >
              <div className="text">our introduction</div>
              <div className="textpara">
                <p>
                  Motta Maadi Music is an enchanting musical ensemble that
                  transcends cultural boundaries and captivates audiences
                  worldwide. With its unique blend of traditional melodies and
                  contemporary rhythms, Motta Maadi Music delivers a
                  soul-stirring experience that leaves listeners mesmerized The
                  group comprises exceptionally talented musicians, each a
                  master in their own right, who harmoniously unite to create
                  symphonies that resonate with emotions and tell stories
                  without words. Their music effortlessly bridges the gap
                  between the past and the present, preserving the rich heritage
                  of ancient tunes while infusing them with modern arrangements.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="Band">
          <div className="text">Meet Our Musical Concert Team</div>

          <div className="imgs row ">
            <div className="img row ">
              <img src={img1} alt="" />
              <div className="title">
                <h2>picture</h2>
              </div>
            </div>
            <div className="img row">
              <img src={img2} alt="" />
              <div className="card-body">
                <div className="title">
                  <h2>picture</h2>
                </div>
              </div>
            </div>
            <div className="img row">
              <img src={img3} alt="" />
              <div className="card-body">
                <div className="title">
                  <h2>picture</h2>
                </div>
              </div>
            </div>
            <div className="img row">
              <img src={img4} alt="" />
              <div className="card-body">
                <div className="title">
                  <h2>picture</h2>
                </div>
              </div>
            </div>
            <div className="img row">
              <img src={img5} alt="" />
              <div className="card-body">
                <div className="title">
                  <h2>picture</h2>
                </div>
              </div>
            </div>
            <br />
            <div className="Bandtext">
              <h5>Join Us on This Musical Journey</h5>
              <p>
                We are more than a team; we are a family bound by our love for
                music. Together, we strive to create moments that resonate with
                your heart and soul. Join us at our next concert and let us
                share the magic of music with you.
              </p>
            </div>
          </div>
        </section>

        <section id="Demo">
          <div className="container ">
            <div className="video col-12 col-lg-12 col-md-12 col-sm-12">
              <Carousel>
                {video.map((videoObj) => {
                  return (
                    <Carousel.Item key={videoObj.id}>
                      <iframe
                        width="100%"
                        height="700"
                        src={videoObj.src}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </Carousel.Item>
                  );
                })}
              </Carousel>
            </div>
            <div className="textbtn col-12 col-lg-12 col-md-12 col-sm-12">
              <p>
                <h1> Melodic Maadi Moments</h1>
                motta maadi music concert
              </p>
              <button className="btn btn-light">
                <a href="https://www.youtube.com/@mottamaadimusic8511/videos">
                  {" "}
                  See more
                </a>
              </button>
            </div>
          </div>
        </section>

        <section id="FeedbackContact">
          <div className="container-fluid">
            <div className="row">
              <div
                className="col-12 col-lg-6 col-md-6 col-sm-8"
                id="Feedbackimg"
              >
                <Carousel>
                  <Carousel.Item>
                    <img src={img12} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={img13} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={img14} alt="" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={img15} alt="" />
                  </Carousel.Item>
                </Carousel>
              </div>
              <div className=" col-12 col-lg-6 col-md-6 col-sm-8" id="Feedback">
                <div className="text">
                  <p>Have Your Best Chats</p>
                </div>

                <div className="textpara">
                  <p>
                    {" "}
                    Your feedback may be used for improving our services and may
                    be shared anonymously for testimonials. We respect your
                    privacy and will not disclose personal information without
                    your consent.
                  </p>
                </div>

                <form ref={formfeed} onSubmit={submitFeedback}>
                  <label className="form-label" for="name">
                    Name
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    name="FeedbackName"
                    id="FeedbackName"
                    placeholder="Enter  Name"
                    onChange={(e) =>
                      setFeedback({
                        ...Feedbacks,
                        FeedbackName: e.target.value,
                      })
                    }
                  />
                  <label className="form-label" for="name">
                    Feedback
                  </label>
                  <textarea
                    className="form-control"
                    style={{ resize: "none" }}
                    rows={5}
                    cols={5}
                    name="Feedback"
                    id="Feedback"
                    placeholder="Enter Feedback"
                    onChange={(e) =>
                      setFeedback({ ...Feedbacks, Feedback: e.target.value })
                    }
                  />
                  <button
                    type="submit"
                    className=" "
                    onSubmit={submitFeedback}
                    disabled={
                      !Feedbacks.FeedbackName || !Feedbacks.FeedbackName
                    }
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </Fade>
      {/* Display the feedback text */}

      <section id="Footer">
        <div className="row">
          <div
            className="col-12 col-lg-4 col-md-8 col-sm-4 row"
            id="Footercontant"
          >
            <div className="col-12 col-lg-6 col-md-6 col-sm-6 service">
              <ul>
                <h5>Service</h5>
                <li>Special Performances</li>
                <li>Solo Performances</li>
                <li>Audience Interaction</li>
                <li>Instrumental Showcase</li>
              </ul>
            </div>
            <div className="col-12 col-lg-6 col-md-8 col-sm-6 address">
              <br />
              <h5>Address</h5>
              <a href="https://www.google.com/maps/dir/11.9504896,79.8031872/motta+maadi/@12.4669367,79.2800022,9z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3a526768b992f2c9:0xb7990d0ba13d08eb!2m2!1d80.1936868!2d12.9890827?entry=ttu">
                {" "}
                <p>
                  {" "}
                  No:14, 24th St, Thillaiganga Nagar, Nanganallur, Chennai,
                  Tamil Nadu 600061
                </p>
              </a>
            </div>
          </div>
          <div className="col-12 col-lg-4 col-md-8 col-sm-4" id="Footernave">
            {" "}
            <footer>
              <ul className="menu">
                <li className="nav-item">
                  <a href="#Nave" className="nav-link">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#introduction" className="nav-link">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#Band" className="nav-link">
                    Our Team
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#Demo" className="nav-link">
                    Our Moments
                  </a>
                </li>
              </ul>
              <p>motta maadi music chennai</p>
              <br />
            </footer>
          </div>
          <div className="anime col-12 col-lg-4 col-md-8 col-sm-4">
            {" "}
            <br />
            <h5>Contact Us</h5>
            <form ref={form} onSubmit={sendEmail}>
              <input
                type="Name"
                name="to_name"
                placeholder="Name"
                className="m-3"
              />

              <input
                type="email"
                name="from_name"
                placeholder="E-mail"
                className="m-3"
              />
              <input
                type="Name"
                name="from_number"
                placeholder="Number"
                className="m-3"
              />
              <input
                type="Thoughts"
                name="message"
                placeholder="Your Thoughts"
                className="m-3"
              />

              <button
                type="submit"
                value="Send"
                className="btn btn-primary m-2"
              >
                send
              </button>
            </form>
            <br />
          </div>

          <hr />
          <div className="col-12 col-lg-12 col-md-12 col-sm-12">
            <ul className="Footicon">
              <li>
                <a href="https://www.facebook.com/MottaMaadiMusic/">
                  <i class="fa-brands fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/mottamaadimusic/?hl=en">
                  <i class="fa-brands fa-instagram"></i>{" "}
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/channel/UCsZgnsl0eoVFXzy27LoY2Ug">
                  <i class="fa-brands fa-youtube"></i>{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

import React, { useState } from "react";
import "./landing.css";
// import { button } from "react-router-dom";
import { ReactComponent as TwitterIcon } from "../assets/ri_twitter-fill.svg";
import { ReactComponent as GithubIcon } from "../assets/ri_github-fill.svg";
import { ReactComponent as LinkedInIcon } from "../assets/ri_linkedin-fill.svg";
import { ReactComponent as DownloadIcon } from "../assets/material-symbols_download.svg";
import { ReactComponent as PhoneIcon } from "../assets/phone.svg";
import { ReactComponent as EmailIcon } from "../assets/openmail.svg";
import { ReactComponent as PinIcon } from "../assets/pin.svg";
import { ReactComponent as MentorIcon } from "../assets/mentor.svg";
import { ReactComponent as CodeIcon } from "../assets/code.svg";
import { ReactComponent as MoonIcon } from "../assets/moon.svg";

const Landing = () => {
  const [active, setActive] = useState(0);
  const [mode, setMode] = useState("day");
  return (
    <div className={`container ${mode}`}>
      <label>
        <strong>Joseph Osho</strong>
      </label>
      <div className="landCont">
        <div className="left_port">
          <div className="leftpane vert_flex">
            <img src={require("../assets/avatar.jpeg")} />
            <h2> Joseph Osho</h2>
            <h5>Full Stack Developer</h5>
            <div className="spread_flex">
              <button>
                <TwitterIcon />
              </button>
              <button>
                <GithubIcon />
              </button>
              <button>
                <LinkedInIcon />
              </button>
              <button>
                <EmailIcon />
              </button>
            </div>
            <div className="containerPill card vert_flex">
              <div className="spread_flex">
                {" "}
                <PhoneIcon />
                <div className="vert_flex">
                  <h6>Phone</h6>
                  <p>+2349134248820</p>
                </div>
              </div>
              <div className="spread_flex">
                {" "}
                <EmailIcon />
                <div className="vert_flex">
                  <h6>Email</h6>
                  <p>oshojoseph2@gmail.com</p>
                </div>
              </div>{" "}
              <div className="spread_flex">
                {" "}
                <PinIcon />
                <div className="vert_flex">
                  <h6> Location</h6>
                  <p>Lagos, Nigeria</p>
                </div>
              </div>
              <button className="grad_btn">
                <DownloadIcon /> Download Resume
              </button>
            </div>
            <div className="spread_flex"></div>
            <div className="spread_flex"></div>
            <div className="spread_flex"></div>
          </div>
        </div>
        <div className="right_port">
          {mode === "day" && (
            <MoonIcon className="modeTog" onClick={() => setMode("night")} />
          )}
          {mode === "night" && (
            <MoonIcon className="modeTog" onClick={() => setMode("day")} />
          )}
          <nav className="spread_flex">
            <button
              className={`${active === 0 && "active grad_btn"} vert_flex`}
              onClick={() => setActive(0)}
            >
              Home
            </button>{" "}
            <button
              className={`${active === 1 && "active grad_btn"} vert_flex`}
              onClick={() => setActive(1)}
            >
              Resume
            </button>{" "}
            <button
              className={`${active === 2 && "active grad_btn"} vert_flex`}
              onClick={() => setActive(2)}
            >
              Work
            </button>{" "}
            <button
              className={`${active === 3 && "active grad_btn"} vert_flex`}
              onClick={() => setActive(3)}
            >
              Contact
            </button>
          </nav>
          <div className="right_pane vert_flex ">
            <h1>About Me</h1>
            <p>
              A dedicated and efficient Full Stack Developer with 5+ years of
              experience in software application development (mobile and web).
              Certified in both Front-End and Back- End technologies and an
              astute learner seeking to further improve in technological skills
              and frameworks as future stack development comes into relevance.
              Proficient in AWS, Cloud Development, GIT Version Control,
              MongoDB, HTML, CSS, Tailwind,Typescript,Next js, React Native,
              Bootstrap, Postgresql, DynamoDB, Node JS, React JS, SQL,
              Serverless Applications, Software Design, and Web Development.
            </p>
            <h2>What i do</h2>
            <div className="spread_flex">
              <div className="card yellow">
                <h3>
                  <CodeIcon />
                  Web Development
                </h3>
                <p>
                  {" "}
                  As a developer i pride myself in not only creating
                  aesthetically pleasing web applications but with more focus on
                  the functionality aspects of it, making not only beautiful and
                  responsive but also smart web applications
                </p>
              </div>{" "}
              <div className="card purple">
                <h3>
                  <PhoneIcon /> App Development
                </h3>
                <p>
                  {" "}
                  As a developer i pride myself in not only creating
                  aesthetically pleasing web applications but with more focus on
                  the functionality aspects of it, making not only beautiful and
                  responsive but also smart web applications
                </p>
              </div>
            </div>
            <div className="spread_flex">
              <div className="card purple">
                {" "}
                <h3>Cloud Developer</h3>
                <p>
                  {" "}
                  As a developer i pride myself in not only creating
                  aesthetically pleasing web applications but with more focus on
                  the functionality aspects of it, making not only beautiful and
                  responsive but also smart web applications
                </p>
              </div>
              <div className="card yellow">
                <h3>
                  <MentorIcon /> Technical Mentorship
                </h3>
                <p>
                  {" "}
                  As a developer i pride myself in not only creating
                  aesthetically pleasing web applications but with more focus on
                  the functionality aspects of it, making not only beautiful and
                  responsive but also smart web applications
                </p>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Landing;

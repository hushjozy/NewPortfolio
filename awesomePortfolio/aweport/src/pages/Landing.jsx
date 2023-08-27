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
  const skills = [
    "Amazon Web Services (AWS)",
    "Bootstrap",
    "Cascading Style Sheets (CSS)",
    "Cloud Development",
    "Communication",
    "Computer Graphics",
    "Data Integration",
    "Data Processing",
    "DynamoDB",
    "Effective Communication",
    "Firebase",
    "Front End Web Development",
    "Git",
    "Heroku",
    "Hypertext Markup Language (HTML)",
    "JavaScript",
    "Mobile Application Development",
    "MongoDB",
    "Next.js",
    "Node.js",
    "NoSQL",
    "PostgreSQL",
    "React Native",
    "ReactJS",
    "Representational State Transfer (REST)",
    "Socket.IO",
    "Software Engineering",
    "SQL",
    "Tailwind CSS",
    "Web Application",
    "Web Development",
  ];
  const softSkills = [
    "Communication",
    "Teamwork",
    "Adaptability",
    "Problem Solving",
    "Time Management",
    "Critical Thinking",
    "Leadership",
    "Empathy",
    "Conflict Resolution",
    "Active Listening",
  ];
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
          {active === 0 && (
            <div className="right_pane vert_flex ">
              <h1>About Me</h1>
              <p>
                A dedicated and efficient Full Stack Developer with 5+ years of
                experience in software application development (mobile and web).
                Certified in both Front-End and Back- End technologies and an
                astute learner seeking to further improve in technological
                skills and frameworks as future stack development comes into
                relevance. Proficient in AWS, Cloud Development, GIT Version
                Control, MongoDB, HTML, CSS, Tailwind,Typescript,Next js, React
                Native, Bootstrap, Postgresql, DynamoDB, Node JS, React JS, SQL,
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
                    aesthetically pleasing web applications but with more focus
                    on the functionality aspects of it, making not only
                    beautiful and responsive but also smart web applications
                  </p>
                </div>{" "}
                <div className="card purple">
                  <h3>
                    <PhoneIcon /> App Development
                  </h3>
                  <p>
                    {" "}
                    As a developer i pride myself in not only creating
                    aesthetically pleasing web applications but with more focus
                    on the functionality aspects of it, making not only
                    beautiful and responsive but also smart web applications
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
                    aesthetically pleasing web applications but with more focus
                    on the functionality aspects of it, making not only
                    beautiful and responsive but also smart web applications
                  </p>
                </div>
                <div className="card yellow">
                  <h3>
                    <MentorIcon /> Technical Mentorship
                  </h3>
                  <p>
                    {" "}
                    As a developer i pride myself in not only creating
                    aesthetically pleasing web applications but with more focus
                    on the functionality aspects of it, making not only
                    beautiful and responsive but also smart web applications
                  </p>
                </div>
              </div>{" "}
            </div>
          )}
          {active === 1 && (
            <div className="right_pane vert_flex ">
              <h1>Resume</h1>
              <div className="spread_flex spread_half">
                <h2>Education</h2>
                <h2>Experience</h2>
              </div>
              <div className="spread_flex spread_half">
                <div className="card yellow">
                  <h5>2014-2019</h5>
                  <p>
                    <strong> Computer Engineering</strong>
                  </p>
                  <p>
                    <strong> Moshood Abiola Polytechnic</strong>
                  </p>
                </div>{" "}
                <div className="vert_flex">
                  <div className="card yellow">
                    <h5>2022-2023</h5>
                    <p>
                      <strong> Snr Frontend Developer</strong>
                    </p>
                    <p>
                      <strong>Robosys Labs Workstation</strong>
                    </p>
                  </div>{" "}
                  <div className="card yellow">
                    <h5>2019-2021</h5>
                    <p>
                      <strong> Full Stack Developer</strong>
                    </p>
                    <p>
                      <strong>Technokraft Solutions</strong>
                    </p>
                  </div>
                </div>
              </div>
              <div className="spread_flex spread_half">
                <h2>Certifications</h2>
              </div>{" "}
              <div className="spread_flex spread_half">
                <div className="card yellow">
                  <h5>2022-2022</h5>
                  <p>
                    <strong> Cloud Development Nanodegree</strong>
                  </p>
                  <p>
                    <strong> Udacity/ALX</strong>
                  </p>
                </div>{" "}
                <div className="vert_flex">
                  <div className="card yellow">
                    <h5>2021-2021</h5>
                    <p>
                      <strong> Frontend Development with React</strong>
                    </p>
                    <p>
                      <strong>
                        University of Science and Technology Hong-Kong
                        (Coursera)
                      </strong>
                    </p>
                  </div>{" "}
                </div>
              </div>
              <div className="spread_flex spread_half ">
                <div className="vert_flex work_spread">
                  <h2>Work Skills</h2>
                  <div className="spread_flex wrap">
                    {skills?.map((skill) => {
                      return <button> {skill}</button>;
                    })}
                  </div>
                </div>
                <div className="vert_flex soft_spread">
                  <h2>Soft Skills</h2>
                  <div className="spread_flex wrap">
                    {softSkills?.map((skill) => {
                      return <button> {skill}</button>;
                    })}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Landing;

import React, { useState } from "react";
import "./landing.css";
import "./animate.css";
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
import { ReactComponent as SunIcon } from "../assets/sun.svg";
import { ReactComponent as Menu } from "../assets/menuOpen.svg";
import { ReactComponent as Close } from "../assets/close.svg";
import { ReactComponent as MiddleDecor } from "../assets/middledec.svg";
import { ReactComponent as GitMob } from "../assets/git.svg";
import { ReactComponent as AtMail } from "../assets/at.svg";
import { ReactComponent as LinkedMob } from "../assets/linked.svg";
import WorkCard from "./WorkCard";

const Landing = () => {
  const [active, setActive] = useState(0);
  const [mode, setMode] = useState("day");
  // const [mode, setMode] = useState("day");
  const [menuOpen, setMenuOpen] = useState(false);
  const handleDownloadClick = () => {
    // Replace 'your-file-url' with the actual URL of the file you want to download
    const url = "https://oshojoseph.onrender.com/assets/josephs_resume.pdf";
    // Create a temporary anchor element
    const anchor = document.createElement("a");
    anchor.href = anchor.target = "_blank"; // Open in a new tab
    anchor.download = "josephs_resume" + ".pdf"; // Set the desired filename

    // Trigger a fake click event
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };
  const skills = [
    "Amazon Web Services (AWS)",
    "Bootstrap",
    "Cascading Style Sheets (CSS)",
    "Cloud Development",
    "Docker",
    "Redux",
    "Redux Toolkit",
    "DynamoDB",
    "Typescript",
    "Firebase",
    "Git",
    "Heroku",
    "HTML5",
    "JavaScript",
    "Mobile Application Development",
    "MongoDB",
    "Next.js",
    "Node.js",
    "NoSQL",
    "PostgreSQL",
    "React Native",
    "ReactJS",
    "REST API Integration",
    "Websockets",
    "Software Engineering",
    "SQL",
    "Tailwind CSS",
    "Web Application Development",
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
  const portfolioWorks = [
    {
      name: "Hairmarket.ng",
      link: "https://hairmarket.ng",
      img: ["hairma.jpeg", "hairmar.jpeg", "hairmark.jpg"],
      type: "Web/Mob",
    },
    {
      name: "Remedy Cv",
      link: "https://cv.remedyportal.com",
      img: ["cv.jpeg", "cv2.jpeg", "cv3.jpeg", "cvmob.jpeg", "cvmob2.jpeg"],
      type: "Web",
    },
    {
      name: "Ayojagun",
      link: "https://Ayojagun.com",
      img: ["ayojagun.jpg", "ayo2.PNG", "ayo3.jpeg"],
      type: "Web",
    },
    {
      name: "Remedy Mobile",
      link: "https://hairmarket.ng",
      img: ["remmob.jpg"],
      type: "Mob",
    },
    {
      name: "EaziPay",
      link: "https://hairmarket.ng",
      img: [
        "eazi.png",
        "eazi2.png",
        "eazi3.png",
        "eazi4.png",
        "eazi5.png",
        "eazi6.png",
      ],
      type: "Web/Mob",
    },
    {
      name: "Bammby",
      link: "https://Bammby.com",
      img: ["bam.jpeg", "bammob.jpeg"],
      type: "Web/Mobile",
    },
    {
      name: "Maeedits",
      link: "https://Maeedits.com",
      img: ["mae.jpeg", "mae2.jpeg", "maemob.jpeg"],
      type: "Web/Mobile",
    },
    {
      name: "Phazar reels",
      link: "https://hairmarket.ng",
      img: ["phazar.jpeg", "phazar2.jpeg", "phazar3.jpeg"],
      type: "Web",
    },
    {
      name: "Hacknix",
      link: "https://hairmarket.ng",
      img: ["hacknix.jpeg"],
      type: "Web",
    },
    {
      name: "Snap",
      link: "https://hairmarket.ng",
      img: ["snap.jpeg"],
      type: "Web",
    },
    {
      name: "Shooroom.ng",
      link: "https://hairmarket.ng",
      img: ["shoorom.jpeg"],
      type: "Web",
    },
    {
      name: "Boombeat",
      link: "https://hairmarket.ng",
      img: ["boombeat.jpeg"],
      type: "Web",
    },
  ];

  return (
    <div className={`container ${mode}`}>
      <label>
        <strong>Joseph Osho</strong>
      </label>
      {window.innerWidth > 900 ? (
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
                <button
                  className="grad_btn heartbeat"
                  onClick={() => handleDownloadClick()}
                >
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
              <SunIcon
                className="modeTog sunny"
                onClick={() => setMode("day")}
              />
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
              <div className="right_pane vert_flex  swing-in-top-fwd">
                <h1>About Me</h1>
                <p>
                  A dedicated and efficient Full Stack Developer with 5+ years
                  of experience in software application development (mobile and
                  web). Certified in both Front-End and Back- End technologies
                  and an astute learner seeking to further improve in
                  technological skills and frameworks as future stack
                  development comes into relevance. Proficient in AWS, Cloud
                  Development, GIT Version Control, MongoDB, HTML, CSS,
                  Tailwind,Typescript,Next js, React Native, Bootstrap,
                  Postgresql, DynamoDB, Node JS, React JS, SQL, Serverless
                  Applications, Software Design, and Web Development.
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
                      aesthetically pleasing web applications but with more
                      focus on the functionality aspects of it, making not only
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
                      aesthetically pleasing web applications but with more
                      focus on the functionality aspects of it, making not only
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
                      aesthetically pleasing web applications but with more
                      focus on the functionality aspects of it, making not only
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
                      aesthetically pleasing web applications but with more
                      focus on the functionality aspects of it, making not only
                      beautiful and responsive but also smart web applications
                    </p>
                  </div>
                </div>{" "}
              </div>
            )}
            {active === 1 && (
              <div className="right_pane vert_flex swing-in-top-fwd">
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
                        return <button className="bounce"> {skill}</button>;
                      })}
                    </div>
                  </div>
                  <div className="vert_flex soft_spread">
                    <h2>Soft Skills</h2>
                    <div className="spread_flex wrap">
                      {softSkills?.map((skill) => {
                        return <button className="bounce"> {skill}</button>;
                      })}
                    </div>
                  </div>
                </div>
              </div>
            )}
            {active === 2 && (
              <div className="right_pane vert_flex swing-in-top-fwd">
                <h1>Portfolio</h1>
                <div className="spread_flex spread_half wrap ">
                  {portfolioWorks?.map((work, i) => {
                    return <WorkCard imgArr={work?.img} work={work} />;
                  })}
                </div>
              </div>
            )}
            {active === 3 && (
              <div className="right_pane vert_flex swing-in-top-fwd">
                <h1>Contact</h1>
                <div className="spread_flex spread_half">
                  <div className="card yellow">
                    <h3>Phone</h3>
                    <p>
                      <strong> +2349134248820</strong>
                    </p>
                  </div>{" "}
                  <div className="vert_flex">
                    <div className="card yellow">
                      <h3>Email</h3>
                      <a href="mailto:oshojoseph2@gmail.com">
                        oshojoseph2@gmail.com
                      </a>
                    </div>{" "}
                    <p>
                      I am always open to discussing new projects, opportunities
                      in tech world, partnerships and more so mentorship.{" "}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="mobCont">
          <div className="mobnav">
            {!menuOpen && (
              <Menu onClick={() => setMenuOpen(true)} className=" menutog" />
            )}
            {menuOpen && (
              <Close onClick={() => setMenuOpen(false)} className=" menutog" />
            )}
          </div>
          {menuOpen && (
            <div className="menudrop">
              <ul className="vert_flex">
                <li>Home</li>
                <li>Resume</li>
                <li>Portfolio</li>
                <li>Contact</li>
              </ul>
            </div>
          )}
          <div className="land_content">
            <h5>My name is Joseph Osho</h5>
            <h1>I’M A DEVELOPER</h1>

            <MiddleDecor />
            <button
              className="blackker heartbeat"
              style={{ background: "#000", fontWeight: "400" }}
              onClick={() => handleDownloadClick()}
            >
              <DownloadIcon />
              Download Resume
            </button>
            <div className="spread_flex">
              <AtMail /> <GitMob /> <LinkedMob />
            </div>
          </div>
          <div className="skillsmob">
            <button>About Me</button>
            <p>
              {" "}
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
            <button className="serveBtn">Services</button>
            <h5>Mobile App Development</h5>
            <p>
              Crafting mobile experiences that captivate users and provide value
              is my passion. Whether it's iOS or Android, utilizing cutting-edge
              technologies to deliver applications that combine functionality,
              design, and performance. leveraging the power of React Native to
              develop cross-platform mobile applications that maintain a
              consistent look and feel across different devices, and publishing
              beta and final release on mobile app store for all platforms IOS
              and Android thereby managing the entire lifecycle of your app,
              from development to deployment on app stores. This includes
              testing, optimizing for performance, and ensuring a smooth
              submission process
            </p>
            <h5>Frontend Development</h5>
            <p>
              As a frontend specialist, I focus on creating captivating and
              intuitive user interfaces that leave a lasting impression.With
              HTML5, CSS, and CSS frameworks like Bootstrap and Tailwind CSS to
              build responsive layouts that provide an optimal viewing
              experience across a wide range of devices and screen sizes, modern
              JavaScript to harness the power of JavaScript to create
              interactive and dynamic user interfaces. I am proficient in
              ReactJS and Next.js, enabling me to build efficient and fast web
              applications with more than enough experience in State Management,
              My proficiency in Redux and Redux Toolkit empowers me to
              efficiently manage the state of your applications, ensuring smooth
              and consistent user experiences.
            </p>
            <h5>Full-Stack App Development</h5>
            <p>
              As a dedicated full stack developer, I specialize in creating
              robust and dynamic web applications that seamlessly integrate both
              front-end and back-end components. My expertise extends across a
              wide range of technologies, by utilizing Node.js and a variety of
              backend databases. MongoDB and PostgreSQL provide both NoSQL and
              SQL capabilities, while DynamoDB enables fast and scalable NoSQL
              data storage. also experienced with cloud platforms like Amazon
              Web Services (AWS), Heroku,Render and a whole lot of other hosting
              and deployment services ensures smooth deployment and scaling of
              your applications. Docker is employed to containerize applications
              in cases where we need to create loosely coupled systems,
              simplifying deployment across various environments.
            </p>
            {/* <button>Skills</button>
            <button>Portfolio</button>
            <button>Contact</button> */}
          </div>
        </div>
      )}
    </div>
  );
};
export default Landing;

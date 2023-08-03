import React from "react";

const Navbar = () => {
  var imaging = document.getElementById("toggle-img");

  // var elements = document.getElementById("toggle-body");
  // console.log(element.class);
  function toggleMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    console.log(element.classList.value);
    if (element.classList.value == "dark-mode") {
      document.getElementById("toggle-img").style.display = "none";
      document.getElementById("toggle-img2").style.display = "block";
    } else {
      document.getElementById("toggle-img2").style.display = "none";
      document.getElementById("toggle-img").style.display = "block";
    }
  }
  function toggleMenu() {
    if (document.getElementById("menu").style.display == "none") {
      document.getElementById("menu").style.display = "block";
    } else {
      document.getElementById("menu").style.display = "none";
    }
  }
  return (
    <div className="nav_container">
      <nav>
        <div className="nav_under bg-top bg-down"></div>
        <a
          href="../index.html"
          style={{ color: "black", textDecoration: "none" }}
        >
          <label for="logo">
            Joseph<span>Osho</span>
          </label>
        </a>
        <button id="toggle-imgbg" onClick={() => toggleMode()}>
          <img id="toggle-img" src={require("../img/moon.png")} alt="" />
          <img
            id="toggle-img2"
            src={require("../img/sun.png")}
            alt=""
            style={{ display: "none" }}
          />
        </button>
        <button id="toggle-Menu" onClick={() => toggleMenu()}>
          <i className="fas fa-bars"></i>
        </button>
        <ul id="menu">
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#portfolio">Works</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="../doc/Osho-Joseph-RESUME.pdf" download="joseph-Resume">
              <button className="resume" type="button">
                Download CV
              </button>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

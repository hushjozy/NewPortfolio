import React from "react";

const Hero = () => {
  return (
    <div className="about_me">
      <h1>
        <span>Hello</span>, I'm <br />
        Joseph Osho
      </h1>
      <h2>MERN FULLSTACK DEVELOPER</h2>
      <span className="skill-div"> Skills: </span>
      <div className="tech-stack">
        <div className="seperator">
          <div className="stack">
            <img src={require("../img/node.png")} alt="" />
            <p>Node JS</p>
          </div>
          <div className="stack">
            <img src={require("../img/javasc.png")} alt="" />
            <p>Javascript</p>
          </div>
          <div className="stack">
            <img src={require("../img/react.png")} alt="" />
            <p>React</p>
          </div>
          <div className="stack">
            <img src={require("../img/dock.png")} alt="" />
            <p>Docker</p>
          </div>
          <div className="stack">
            <img src={require("../img/gc.png")} alt="" />
            <p>G.Cloud</p>
          </div>
        </div>
        <div className="seperator">
          <div className="stack">
            <img src={require("../img/html.png")} alt="" />
            <p>HTML</p>
          </div>
          <div className="stack">
            <img src={require("../img/css.png")} alt="" />
            <p>CSS</p>
          </div>
          <div className="stack">
            <img src={require("../img/mongo.png")} alt="" />
            <p>MongoDB</p>
          </div>
          <div className="stack">
            <img src={require("../img/aws.png")} alt="" />
            <p>AWS</p>
          </div>
        </div>
        <div className="seperator">
          <div className="stack">
            <img src={require("../img/sql.png")} alt="" />
            <p>SQL</p>
          </div>
          <div className="stack">
            <img src={require("../img/tail.png")} alt="" />
            <p>Tailwind</p>
          </div>
          <div className="stack">
            <img src={require("../img/sass.png")} alt="" />
            <p>Sass</p>
          </div>
          <div className="stack">
            <img src={require("../img/azu.png")} alt="" />
            <p>Azure</p>
          </div>
          <div className="stack">
            <img src={require("../img/lar.png")} alt="" />
            <p>Laravel</p>
          </div>
        </div>
      </div>
      <a href="mailto:technokraftdev@gmail.com?subject= I need your service">
        <button type="button" name="button" onClick="myFunction()">
          Hire Me <i className="fas fa-code"></i>
        </button>
      </a>
    </div>
  );
};

export default Hero;

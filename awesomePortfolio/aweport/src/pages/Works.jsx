import React from "react";
import "./works.css";

const Works = () => {
  return (
    <div className="index">
      <div className="div">
        <header className="header">
          <div className="logo">
            <img
              className="beatrice-wambui"
              alt="Beatrice wambui"
              src="https://anima-uploads.s3.amazonaws.com/projects/619b97dd9448f174c8d43ea0/releases/64ea7b83d15f835cccc90582/img/beatrice-wambui-3.svg"
            />
          </div>
          <img
            className="ph-moon"
            alt="Ph moon"
            src="https://anima-uploads.s3.amazonaws.com/projects/619b97dd9448f174c8d43ea0/releases/64ea7b83d15f835cccc90582/img/ph-moon-4.svg"
          />
        </header>
        <img
          className="profile-details"
          alt="Profile details"
          src="https://anima-uploads.s3.amazonaws.com/projects/619b97dd9448f174c8d43ea0/releases/64ea7b83d15f835cccc90582/img/profile-details-1.png"
        />
        <div className="work-section">
          <div className="overlap-group">
            <div className="work-heading">
              <div className="frame">
                <div className="work">Portfolio</div>
              </div>
              <img
                className="line"
                alt="Line"
                src="https://anima-uploads.s3.amazonaws.com/projects/619b97dd9448f174c8d43ea0/releases/64ea7b83d15f835cccc90582/img/line-5-3.svg"
              />
            </div>
            <div className="porfolio-cards">
              <div className="UI-UX-card">
                <div className="rectangle" />
                <img
                  className="img"
                  alt="Rectangle"
                  src="https://anima-uploads.s3.amazonaws.com/projects/619b97dd9448f174c8d43ea0/releases/64ea7b83d15f835cccc90582/img/rectangle-20@2x.png"
                />
                <div className="text-wrapper">Rental</div>
                <div className="text-wrapper-2">UI/UX</div>
              </div>
              <div className="web-development-card">
                <div className="rectangle-2" />
                <div className="text-wrapper">IdeaFlow</div>
                <div className="text-wrapper-2">Web Development</div>
                <img
                  className="img"
                  alt="Rectangle"
                  src="https://anima-uploads.s3.amazonaws.com/projects/619b97dd9448f174c8d43ea0/releases/64ea7b83d15f835cccc90582/img/rectangle-21@2x.png"
                />
              </div>
              <div className="blog-card">
                <div className="rectangle-3" />
                <img
                  className="rectangle-4"
                  alt="Rectangle"
                  src="https://anima-uploads.s3.amazonaws.com/projects/619b97dd9448f174c8d43ea0/releases/64ea7b83d15f835cccc90582/img/rectangle-22@2x.png"
                />
                <div className="text-wrapper-3">NEXT.js</div>
                <div className="text-wrapper-4">Blog</div>
              </div>
              <div className="mentorship-card">
                <div className="rectangle-5" />
                <img
                  className="rectangle-4"
                  alt="Rectangle"
                  src="https://anima-uploads.s3.amazonaws.com/projects/619b97dd9448f174c8d43ea0/releases/64ea7b83d15f835cccc90582/img/rectangle-24@2x.png"
                />
                <div className="text-wrapper-5">Tech Mentor</div>
                <div className="text-wrapper-6">Mentorship</div>
              </div>
              <div className="app-development-card">
                <div className="rectangle-6" />
                <div className="text-wrapper">Smart Bank App</div>
                <div className="text-wrapper-7">App Development</div>
                <img
                  className="rectangle-7"
                  alt="Rectangle"
                  src="https://anima-uploads.s3.amazonaws.com/projects/619b97dd9448f174c8d43ea0/releases/64ea7b83d15f835cccc90582/img/rectangle-20-1@2x.png"
                />
              </div>
            </div>
            <div className="navbar">
              <div className="text-wrapper-8">All</div>
              <div className="text-wrapper-9">App Development</div>
              <div className="text-wrapper-9">Web Development</div>
              <div className="text-wrapper-9">Design</div>
              <div className="text-wrapper-9">Mentorship</div>
            </div>
          </div>
        </div>
        <div className="nav-bar">
          <div className="nav-card" />
          <div className="nav-cards">
            <div className="div-2">
              <div className="div-3" />
              <div className="home">
                <img
                  className="img-2"
                  alt="Home icon"
                  src="https://anima-uploads.s3.amazonaws.com/projects/619b97dd9448f174c8d43ea0/releases/64ea7b83d15f835cccc90582/img/home-icon-1.svg"
                />
                <div className="text-wrapper-10">Home</div>
              </div>
            </div>
            <div className="div-2">
              <div className="rectangle-8" />
              <div className="resume">
                <img
                  className="img-2"
                  alt="Resume icon"
                  src="https://anima-uploads.s3.amazonaws.com/projects/619b97dd9448f174c8d43ea0/releases/64ea7b83d15f835cccc90582/img/resume-icon.svg"
                />
                <div className="text-wrapper-10">Resume</div>
              </div>
            </div>
            <div className="div-2">
              <div className="work-card" />
              <div className="work-2">
                <img
                  className="img-2"
                  alt="Work icon"
                  src="https://anima-uploads.s3.amazonaws.com/projects/619b97dd9448f174c8d43ea0/releases/64ea7b83d15f835cccc90582/img/work-icon-4.svg"
                />
                <div className="text-wrapper-11">Work</div>
              </div>
            </div>
            <div className="div-2">
              <div className="div-3" />
              <div className="contact">
                <img
                  className="img-2"
                  alt="Contact icon"
                  src="https://anima-uploads.s3.amazonaws.com/projects/619b97dd9448f174c8d43ea0/releases/64ea7b83d15f835cccc90582/img/contact-icon.svg"
                />
                <div className="text-wrapper-10">Contact</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;

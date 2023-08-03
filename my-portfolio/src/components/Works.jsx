import React from "react";

const Works = () => {
  return (
    <div>
      <section id="services" className="my-service">
        <h1>Area of Expertise</h1>
        <div className="anima-wrap">
          <div className="row_container skills-animation">
            <div className="card_comp">
              <img
                src={require("../img/web.png")}
                className="card_img"
                alt=""
              />
              <div className="card_details up">
                <h2>Web Development</h2>
              </div>
            </div>
            <div className="card_comp">
              <img
                src={require("../img/mob.png")}
                className="card_img"
                alt=""
              />
              <div className="card_details up">
                <h2>Cloud Development</h2>
              </div>
            </div>

            <div className="card_comp">
              <img
                src={require("../img/mob.png")}
                className="card_img"
                alt=""
              />
              <div className="card_details up">
                <h2>App Development</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="portfolio" className="works">
        <h1>Work Samples And Projects</h1>

        <div className="row_container row-container">
          <div className="card_comp">
            <img
              src={require("../img/hmarkt.jpeg")}
              className="card_img"
              alt=""
            />
            <div className="card_details">
              <a href="https://hairmarket.ng">
                <button className="expand" type="button" name="button">
                  View Work
                </button>
              </a>
              <div className="breakAway">
                <h1>Hairmarket.ng</h1>
                <p>Hair E-commerce</p>
              </div>
            </div>
          </div>
          <div className="card_comp">
            <img
              src={require("../img/work2.jpeg")}
              className="card_img"
              alt=""
            />
            <div className="card_details">
              <a href="https://hairmarket.ng">
                <button className="expand" type="button" name="button">
                  View Work
                </button>
              </a>
              <div className="breakAway">
                <h1>MaeEdits</h1>
                <p>Paas Commerce</p>
              </div>
            </div>
          </div>
          <div className="card_comp">
            <img
              src={require("../img/work1.jpeg")}
              className="card_img"
              alt=""
            />
            <div className="card_details">
              <button className="expand" type="button" name="button">
                View Work
              </button>
              <div className="breakAway">
                <h1>Shooroom Furniture</h1>
                <p>Ecommerce</p>
              </div>
            </div>
          </div>
          <div className="card_comp">
            <img
              src={require("../img/work2.jpeg")}
              className="card_img"
              alt=""
            />
            <div className="card_details">
              <button className="expand" type="button" name="button">
                View Work
              </button>
              <div className="breakAway">
                <h1>Boombeats</h1>
                <p>Ecommerce</p>
              </div>
            </div>
          </div>
          <div className="card_comp">
            <img
              src={require("../img/work3.jpeg")}
              className="card_img"
              alt=""
            />
            <div className="card_details">
              <button className="expand" type="button" name="button">
                View Work
              </button>{" "}
              <div className="breakAway">
                <h1>Hacknix</h1>
                <p>Reality Game WebPage</p>
              </div>
            </div>
          </div>
          <div className="row_container">
            <div className="card_comp">
              <img
                src={require("../img/work4.jpeg")}
                className="card_img"
                alt=""
              />
              <div className="card_details">
                <button className="expand" type="button" name="button">
                  View Work
                </button>
                <div className="breakAway">
                  <h1>Snap</h1>
                  <p>Remote work page</p>
                </div>
              </div>
            </div>
            <div className="card_comp">
              <img
                src={require("../img/work5.png")}
                className="card_img"
                alt=""
              />
              <div className="card_details">
                <button className="expand" type="button" name="button">
                  View Work
                </button>
                <div className="breakAway">
                  <h1>Space Jester Chat</h1>
                  <p>Chat Web App</p>
                </div>
              </div>
            </div>
            <div className="card_comp">
              <img
                src={require("../img/work6.jpeg")}
                className="card_img"
                alt=""
              />
              <div className="card_details">
                <button className="expand" type="button" name="button">
                  View Work
                </button>
                <div className="breakAway">
                  <h1>SneakyLegs</h1>
                  <p>Sneakers Ecommerce</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row_container">
            <div className="card_comp">
              <img
                src={require("../img/flexa.png")}
                className="card_img"
                alt=""
              />
              <div className="card_details">
                <button className="expand" type="button" name="button">
                  View Work
                </button>
                <div className="breakAway">
                  <h1>FLexa Tours</h1>
                  <p>Travel Website</p>
                </div>
              </div>
            </div>
            <div className="card_comp">
              <img
                src={require("../img/nysc.jpeg")}
                className="card_img"
                alt=""
              />
              <div className="card_details">
                <button className="expand" type="button" name="button">
                  View Work
                </button>
                <div className="breakAway">
                  <h1>Nysc Rebrand</h1>
                  <p>Nysc Rebrand Page</p>
                </div>
              </div>
            </div>
            <div className="card_comp">
              <img
                src={require("../img/futurevr.jpeg")}
                className="card_img"
                alt=""
              />
              <div className="card_details">
                <button className="expand" type="button" name="button">
                  View Work
                </button>
                <div className="breakAway">
                  <h1>Future Vr</h1>
                  <p>Virtual reality page</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row_container">
            <div className="card_comp">
              <img
                src={require("../img/phaz.png")}
                className="card_img"
                alt=""
              />
              <div className="card_details">
                <button className="expand" type="button" name="button">
                  View Work
                </button>
                <div className="breakAway">
                  <h1>Phazar Reels</h1>
                  <p>Movie Website</p>
                </div>
              </div>
            </div>
            <div className="card_comp">
              <img
                src={require("../img/inote.png")}
                className="card_img"
                alt=""
              />
              <div className="card_details">
                <button className="expand" type="button" name="button">
                  View Work
                </button>
                <div className="breakAway">
                  <h1>iNotie</h1>
                  <p>Schedule WebApp</p>
                </div>
              </div>
            </div>
            <div className="card_comp">
              <img
                src={require("../img/winter.png")}
                className="card_img"
                alt=""
              />
              <div className="card_details">
                <button className="expand" type="button" name="button">
                  View Work
                </button>
                <div className="breakAway">
                  <h1>WinterLand</h1>
                  <p>Travel website</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Works;

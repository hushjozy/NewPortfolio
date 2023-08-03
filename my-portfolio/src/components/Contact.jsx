import React from "react";

const Contact = () => {
  return (
    <div>
      {" "}
      <section id="contact" className="contact-me">
        <h1>Need to Know More ?. Here's How you can Reach Out to Me</h1>

        <div className="contacting">
          <form
            className=""
            action="https://formspree.io/f/xwkyybkp"
            method="POST"
          >
            <label for="name">Your Name</label>
            <input id="name-field" type="text" name="name" value="" />
            <br />
            <label for="email">Your Email</label>
            <input id="mail-field" type="text" name="email" value="" />
            <label id="txt-label" for="message">
              Your Message
            </label>
            <input id="txt-field" type="text" name="message" value="" />
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;

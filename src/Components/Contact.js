import React from "react";

const Contact = () => {
  return (
    <>
      <h2 className="contact_heading">Feel Free To Contact Us</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43252.05767464751!2d78.47701998775055!3d17.279850474125197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbbd6975c546b7%3A0xfdf8be3ea6b1cdfc!2sMehfil%20Restaurant!5e0!3m2!1sen!2sin!4v1671619333901!5m2!1sen!2sin"
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="contact-container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/xqkozdbw"
            method="POST"
            className="form"
          >
            <div className="parent-inputs">
              <div className="form-inputs">
                <input
                  className="puts"
                  type="text"
                  name="username"
                  placeholder="username"
                  autoComplete="off"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  autoComplete="off"
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  cols="30"
                  rows="5"
                ></textarea>
              </div>
            </div>
            <input type="submit" className="submit-form" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;

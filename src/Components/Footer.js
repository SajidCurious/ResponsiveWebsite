import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <section className="contact-short">
        <div className="short-one">
          <h5>Ready to get started?</h5>
          <h5>Talk to us today</h5>
        </div>
        <div className="button-link">
          <NavLink to="/">
            <button className="button-Footer">Get Started</button>
          </NavLink>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-about">
          <h4 className="footer-about1">Centuary Software Solutions</h4>
          <h5>
            One place for all your
            <br /> Software Solutions
          </h5>
        </div>

        {/* 2nd column */}
        <div className="footer-subscribe">
          <h4>Subscribe to get important updates</h4>
          <form action="#">
            <input
              type="email"
              required
              autoComplete="off"
              placeholder="Email"
            />
            <input
              type="submit"
              value="Subscribe"
              className="footer-formSubmit"
            />
          </form>
        </div>

        {/* 3rd column */}
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="footer-social-icons">
            <div>
              <i class="fa-brands fa-twitter"></i>
            </div>
            <div>
              <i class="fa-brands fa-linkedin"></i>
            </div>
            <div>
              <i class="fa-brands fa-github"></i>
            </div>
          </div>
        </div>

        {/* 5th column */}
        <div className="footer-contact">
          <h4>Call Us</h4>
          <h4>+91 9110553588</h4>
        </div>
      </footer>
    </>
  );
};

export default Footer;

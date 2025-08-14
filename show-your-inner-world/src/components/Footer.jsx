import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <h1>Dream big and dare to fail.</h1>
        <div className="footer_logo">MyCompany</div>

        <nav className="footer_nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="footer_contacts">
          <p>Email: example@email.com</p>
          <p>Phone: +374 00 00 00 00</p>
        </div>

        <div className="footer_copy">
          &copy; {new Date().getFullYear()} MyCompany. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
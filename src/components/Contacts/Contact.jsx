import React from "react";
import "./contact.css";
const Contact = () => {
  return (
    <div className="container">
      <div className="justify-center">
        <p className="contact">Contact</p>
        <h3>Let’s Discuss Your Project </h3>
      </div>
      <div className="grid grid-cols-2">
        <div className="grid-cols-1">
          <h1>contCT NO</h1>
        </div>

        <div className="grid-cols-1">
          <div className="grid-cols-1">
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email Address" />
            <input type="text" placeholder="Phone No" />
            <input type="text" placeholder="Budget" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

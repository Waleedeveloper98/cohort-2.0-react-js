import React from "react";

const Navbar = () => {
  return (
    <nav>
      <a href="#" className="logo">
        Horizon Courts
      </a>
      <ul className="menu">
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Coaches</a>
        </li>
        <li>
          <a href="#">Events</a>
        </li>
        <li>
          <a href="#">Contacts</a>
        </li>
      </ul>
      <button>Book Now</button>
    </nav>
  );
};

export default Navbar;

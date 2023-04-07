import React from "react";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
        <img
          src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png"
          alt="netflix-logo"
          className="logo"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="avatar"
          className="avatar"
        />
      </div>
  );
};

export default Navbar;

import React from "react";
import "./Navbar.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
const Navbar = () => {
  return (
    <nav className="text-align nav">
      <div className="text-align">
        <a href="/" className="logo">
          Reeco
        </a>
        <a href="/" className="link">
          Store
        </a>
        <a href="/" className="link">
          {" "}
          Others
        </a>
        <a href="/" className="link">
          Analytics
        </a>
      </div>
      <div className="text-align">
        <a href="/" className="link">
          <ShoppingCartOutlinedIcon className="cart" />
        </a>
        <a href="/" className="profile">
          Hello, James
          <KeyboardArrowDownOutlinedIcon />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

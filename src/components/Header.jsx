import React from "react";
import "./Header.css";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";

const Header = () => {
  return (
    <header className="header">
      <p className="order-text">
        Order&nbsp;&nbsp;
        <KeyboardArrowRightOutlinedIcon />
        &nbsp;
        <span style={{ textDecoration: "underline" }}>Order 32457ABC</span>
      </p>
      <div className="text-align">
        <h1>Order 32457ABC</h1>
        <div>
          <button className="btn-back">Back</button>
          <button className="btn-approve">Approve Order</button>
        </div>
      </div>
    </header>
  );
};

export default Header;

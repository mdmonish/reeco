import React from "react";
import "./OrderDetails.css";

const OrderDetails = () => {
  return (
    <div className="order-detail-container">
      <div className="order-item">
        <p>Supplier</p>
        <h3>East coast fruits & vegetables</h3>
      </div>
      <div className="order-item">
        {" "}
        <p>Shipping Date</p>
        <h3>Thu, Feb 10</h3>
      </div>
      <div className="order-item">
        {" "}
        <p>Total</p>
        <h3>$ 15,028.3</h3>
      </div>
      <div className="order-item">
        {" "}
        <p>Category</p>
        <h3>East coast fruits & vegetables</h3>
      </div>
      <div className="order-item">
        {" "}
        <p>Department</p>
        <h3>300-444-678</h3>
      </div>
      <div style={{ width: "16.66%", padding: "0 20px" }}>
        {" "}
        <p>Status</p>
        <h3>Awaiting your approvel</h3>
      </div>
    </div>
  );
};

export default OrderDetails;

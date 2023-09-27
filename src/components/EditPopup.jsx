import React from "react";
import "./EditPopup.css";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const EditPopup = ({ setToggleEdit }) => {
  return (
    <div className="container">
      <div className="action-container-edit">
        <CloseOutlinedIcon
          onClick={() => setToggleEdit(false)}
          style={{ cursor: "pointer", float: "right" }}
        />
        <h4 style={{ marginBottom: 0 }}>
          Lorem Ipsum is simply dummy text of the printing
        </h4>
        <p style={{ margin: 0 }}>Lorem Ipsum</p>
        <div style={{ display: "flex" }}>
          {" "}
          <img src="./Avocado_Hass.jpg" width={200} height={200} />
          <div className="grid-container">
            <p>Price</p>
            <input type="text" placeholder="9999" />
            <p>Quantity</p>
            <div>
              <button>-</button>9999<button>+</button>
            </div>
            <p>Total</p>
            <p>$56789</p>
          </div>
        </div>
        <p>Choose Reason (optional)</p>
        <div>
          <button className="edit-btn">Missing Product</button>
          <button className="edit-btn">Quality is not the same</button>
          <button className="edit-btn">Price is not the same</button>
          <button className="edit-btn">Other</button>
        </div>
        <div className="btn-group">
          <button
            className="cancel"
            onClick={() => {
              setToggleEdit(false);
            }}
          >
            Cancel
          </button>
          <button
            className="send"
            onClick={() => {
              setToggleEdit(false);
            }}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditPopup;

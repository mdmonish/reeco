import React from "react";
import "./Popup.css";
import { useDispatch } from "react-redux";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const Popup = ({ setPopUp, id }) => {
  const dispatch = useDispatch();
  return (
    <div className="container">
      <div className="action-container">
        <div className="action-container-header">
          <h4>Missing Product</h4>
          <CloseOutlinedIcon
            onClick={() => setPopUp(false)}
            style={{ cursor: "pointer" }}
          />
        </div>

        <span> Is food is -urgent?</span>
        <div className="btn-group">
          <button
            className="btn"
            onClick={() => {
              dispatch({
                type: "updateStatus",
                payload: {
                  id: id,
                  status: "Missing",
                },
              });
              setPopUp(false);
            }}
          >
            No
          </button>
          <button
            className="btn"
            onClick={() => {
              dispatch({
                type: "updateStatus",
                payload: {
                  id: id,
                  status: "Missing-Urgent",
                },
              });
              setPopUp(false);
            }}
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;

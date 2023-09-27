import React from "react";
import PrintOutlinedIcon from "@mui/icons-material/PrintOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useDispatch, useSelector } from "react-redux";
import "./OrderList.css";

const OrderList = ({ setPopUp, setKeyId, setToggleEdit }) => {
  const dispatch = useDispatch();
  const { order } = useSelector(state => state.status);

  return (
    <div className="order-list-container">
      <div className="order-action">
        <div className="input-group">
          <input type="text" placeholder="Search" />
          <SearchOutlinedIcon className="search-icon" />
        </div>
        <div className="btn-group">
          <button className="btn-add">Add Item</button>
          <PrintOutlinedIcon style={{ color: "green" }} />
        </div>
      </div>
      <div className="list-header">
        <div></div>
        <div style={{ gridColumn: "span 2" }}>Product Name</div>

        <div>Brand</div>
        <div>Price</div>
        <div>Quantity</div>
        <div>Total</div>

        <div style={{ gridColumn: "span 2" }}>Status</div>
      </div>
      {!!order &&
        order?.items?.map((or, i) => (
          <div className="list-body" key={i}>
            <div className="group">
              <img
                src="./Avocado_Hass.jpg"
                width={40}
                height={40}
                style={{ marginRight: 20 }}
              />
              {or.productName}
            </div>

            <div>{or.brand}</div>
            <div>{or.unitPrice}</div>
            <div>{or.quantity}</div>
            <div>{Number(or.unitPrice * or.quantity)}</div>

            <div className="status-container">
              <div
                style={{
                  display: "flex",
                  justifyContent: !!or.status ? "space-between" : "end",
                }}
              >
                <div
                  className="status"
                  style={{
                    background:
                      or.status === "Approved"
                        ? "#3DCA72"
                        : or.status === "Missing"
                        ? "#F66D44"
                        : or.status
                        ? "#DB2114"
                        : "",
                  }}
                >
                  {or.status}
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <DoneOutlinedIcon
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      dispatch({
                        type: "updateStatus",
                        payload: {
                          id: i,
                          status: "Approved",
                        },
                      });
                    }}
                  />
                  <CloseOutlinedIcon
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setKeyId(i);
                      setPopUp(true);
                    }}
                  />
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={() => setToggleEdit(true)}
                  >
                    Edit
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default OrderList;

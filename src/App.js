import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import OrderDetails from "./components/OrderDetails";
import OrderList from "./components/OrderList";
import axios from "axios";
import Popup from "./components/Popup";
import EditPopup from "./components/EditPopup";

function App() {
  const [order, setOrder] = useState([]);
  const [popUp, setPopUp] = useState(false);
  const [toggleEdit, setToggleEdit] = useState(false);
  const [keyId, setKeyId] = useState();

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await axios.get("./data.json");
        setOrder(data);
      } catch (err) {
        console.log("err");
      }
    };
    fetch();
  }, []);
  console.log(order);
  return (
    <div className="app">
      <Navbar />
      <Header />
      <div className="scrolling">
        <OrderDetails />
        <OrderList
          setPopUp={setPopUp}
          setKeyId={setKeyId}
          setToggleEdit={setToggleEdit}
        />
      </div>
      {popUp && <Popup setPopUp={setPopUp} id={keyId} />}
      {toggleEdit && <EditPopup setToggleEdit={setToggleEdit} />}
    </div>
  );
}

export default App;

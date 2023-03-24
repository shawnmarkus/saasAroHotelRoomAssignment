import React, { useState } from "react";
import Premium from "./Premium";
import Standard from "./Standard";
import style from "../css/Room.module.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const Room = () => {
  const [key, setKey] = useState("home");
  return (
    <div className={style.topWrapContainer}>
      <div className={style.tabWraper}>
        <section>
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
          >
            <Tab eventKey="home" title="Premium" className="p-4">
              <Premium />
            </Tab>
            <Tab eventKey="profile" title="Standard" className="p-4">
              <Standard />
            </Tab>
          </Tabs>
        </section>
      </div>
    </div>
  );
};

export default Room;

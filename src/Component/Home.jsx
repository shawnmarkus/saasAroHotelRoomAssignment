import React from "react";
import Image from "react-bootstrap/Image";
import HomeImage from "../assets/mainPage.jpg";
import style from "../css/Home.module.css";

const Home = () => {
  return (
    <div className={style.homePageMainContainer}>
      <Image src={HomeImage} fluid={true} className={style.homeImage} />
      {/* home */}
      <div style={{ ...textContainerStyle }}>
        <h1>Welcome!</h1>
      </div>
    </div>
  );
};

const textContainerStyle = {
  color: "white",
  paddingTop: "5rem",
  paddingBottom: "5rem",
  height: "100vh",
  zIndex: 100,
  position: "relative",
};

export default Home;

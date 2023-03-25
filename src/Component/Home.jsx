import React from "react";
import Image from "react-bootstrap/Image";
import HomeImage from "../assets/mainPage.jpg";
import style from "../css/Home.module.css";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className={style.homePageMainContainer}>
      <Image src={HomeImage} fluid={true} className={style.homeImage} />
      <div
        style={{ ...textContainerStyle }}
        className="d-flex flex-column justify-content-center"
      >
        <h1 className={style.welcomeNote}>Welcome!</h1>
        <p className={style.belowStatement}>Find room of your choice</p>
        <Button
          variant="light"
          className="btn"
          onClick={() => {
            console.log("clicked");
            navigate("/room");
          }}
        >
          Explore &nbsp; &#10145;
        </Button>
      </div>
    </div>
  );
};

const textContainerStyle = {
  color: "white",
  paddingTop: "5rem",
  paddingBottom: "5rem",
  paddingLeft: "4rem",
  height: "100vh",
  zIndex: 100,
  position: "relative",
  display: "flex",
};

export default Home;

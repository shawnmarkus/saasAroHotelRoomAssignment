import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";
import style from "../css/NavBarComp.module.css";
import cart from "../assets/svgs/cart.svg";
import { useNavigate } from "react-router-dom";

function ResponsiveNavbar() {
  const navigate = useNavigate();
  //   const icons = [HomeIcon, Binoculars, SettingIcon, BellIcon];
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container className="d-flex flex-row justify-content-between">
          <Navbar.Brand href="#home" className={style.navbarTitle}>
            <b>Hotel booking</b>
          </Navbar.Brand>

          <Nav>
            <div onClick={() => navigate("/cart")}>
              <Image src={cart}></Image>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ResponsiveNavbar;

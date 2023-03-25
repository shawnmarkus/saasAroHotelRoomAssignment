import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";
import style from "../css/NavBarComp.module.css";
import cart from "../assets/svgs/cart.svg";
import { NavLink, useNavigate } from "react-router-dom";

function ResponsiveNavbar() {
  const navigate = useNavigate();
  //   const icons = [HomeIcon, Binoculars, SettingIcon, BellIcon];
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container className="d-flex flex-row justify-content-between">
          <Navbar.Brand
            onClick={() => navigate("/")}
            className={style.navbarTitle}
          >
            {/* <NavLink to="/"> */}
            <b>Hotel booking</b>
            {/* </NavLink> */}
          </Navbar.Brand>

          <Nav>
            {/* <div onClick={() => navigate("/cart")}> */}
            <NavLink to="/cart" className={style.cartIcon}>
              <Image src={cart}></Image>
            </NavLink>
            {/* </div> */}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ResponsiveNavbar;

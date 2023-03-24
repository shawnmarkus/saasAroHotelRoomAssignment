import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import style from "../css/NavBarComp.module.css";

function ResponsiveNavbar() {
  //   const icons = [HomeIcon, Binoculars, SettingIcon, BellIcon];
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home" className={style.navbarTitle}>
            <b>Hotel booking</b>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default ResponsiveNavbar;

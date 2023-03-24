import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";

function ResponsiveNavbar() {
  //   const icons = [HomeIcon, Binoculars, SettingIcon, BellIcon];
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Hotel booking</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default ResponsiveNavbar;

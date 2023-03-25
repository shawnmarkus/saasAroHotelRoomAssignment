import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import NavbarComp from "./Component/NavBarComp";
import "./global.css";
import Room from "./Component/Room";
import Cart from "./Component/Cart";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarComp className="navbar" />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/room" element={<Room />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

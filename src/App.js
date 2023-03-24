import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import NavbarComp from "./Component/NavBarComp";
import "./global.css";
import Room from "./Component/Room";

function App() {
  return (
    <div className="App">
      <NavbarComp className="navbar" />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/room" element={<Room />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

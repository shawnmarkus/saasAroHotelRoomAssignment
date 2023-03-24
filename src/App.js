import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Premium from "./Component/Premium";
import Standard from "./Component/Standard";
import Home from "./Component/Home";
import NavbarComp from "./Component/NavBarComp";
import "./global.css";

function App() {
  return (
    <div className="App">
      <NavbarComp className="navbar" />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route exact path="/room" element={<Room />} /> */}
          {/* <Route exact path="/standard" element={<Premium />} /> */}
          {/* <Route exact path="/premium" element={<Standard />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

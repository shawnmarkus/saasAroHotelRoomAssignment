import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Premium from "./Premium";
import Standard from "./Standard";
import Home from "./Home";
import NavbarComp from "./NavBarComp";

function App() {
  return (
    <div className="App">
      <NavbarComp />
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/standard" element={<Premium />} />
            <Route exact path="/premium" element={<Standard />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

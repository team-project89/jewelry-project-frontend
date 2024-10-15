import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import NavbarOpen from "./context/NavbarOpen";

function App() {
  return (
    <div>
      <NavbarOpen>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </NavbarOpen>
    </div>
  );
}

export default App;

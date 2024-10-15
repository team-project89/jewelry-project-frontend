import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import NavbarOpen from "./context/NavbarOpen";
import SignupPannel from "./feature/authentication/SignupPannel";

function App() {
  return (
    <div>
      <NavbarOpen>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<SignupPannel />} />
        </Routes>
      </NavbarOpen>
    </div>
  );
}

export default App;

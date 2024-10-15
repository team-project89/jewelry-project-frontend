import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import NavbarOpen from "./context/NavbarOpen";
import Auth from "./page/Auth";

function App() {
  return (
    <div>
      <NavbarOpen>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/auth' element={<Auth/>} />
        </Routes>
      </NavbarOpen>
    </div>
  );
}

export default App;

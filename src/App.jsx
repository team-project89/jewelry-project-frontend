import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes } from "react-router-dom";
import { NavbarProvider } from "./context/NavbarOpen";
import Auth from "./page/Auth";
import Home from "./page/Home";

const queryClient = new QueryClient();
function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <NavbarProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/auth' element={<Auth />} />
          </Routes>
        </NavbarProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;

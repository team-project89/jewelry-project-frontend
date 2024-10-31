import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Navigate, Route, Routes } from "react-router-dom";
import MainHome from "./feature/home/showstatus/MainHome";
import Auth from "./page/Auth";
import NavbarProvider from "./context/NavbarOpen";
import HomeLayout from "./page/Home";

const queryClient = new QueryClient();
function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <NavbarProvider>
          <Routes>
            <Route path='/auth' element={<Auth />} />
            <Route path='/' element={<HomeLayout />}>
              <Route index element={<Navigate to='shop' replace />} />
              <Route path='shop' element={<MainHome />} />
            </Route>
          </Routes>
        </NavbarProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;

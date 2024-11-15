import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import NavbarProvider from "./context/NavbarOpen";
import Menu from "./feature/home/menu/Menu";
import { Toaster } from "react-hot-toast";
import AppRoutes from "./routes/AppRoutes";

const queryClient = new QueryClient();

function App() {
  const location = useLocation();
  const hideNavbarRoutes = ["/auth", "/complete-profile"];

  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Toaster />
        <NavbarProvider>
          {!hideNavbarRoutes.includes(location.pathname) && <Menu />}
          <AppRoutes />
        </NavbarProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;

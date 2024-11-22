import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import NavbarProvider from "./context/NavbarOpen";
import Menu from "./feature/home/menu/Menu";
import { Toaster } from "react-hot-toast";
import AppRoutes from "./routes/AppRoutes";
import { CartProvider } from "./context/CartProvider";
import Footer from "./style/Footer";
import BrandStyle from "./style/BrandStyle";
import ScrollToTop from "./utils/ScrollToTop";

const queryClient = new QueryClient();

function App() {
  const location = useLocation();
  const hideNavbarRoutes = ["/auth", "/complete-profile"];

  return (
    <CartProvider>
      <div className='relative min-h-screen overflow-hidden'>
        <BrandStyle />
        <QueryClientProvider client={queryClient}>
          <Toaster />
          <NavbarProvider>
            <ScrollToTop />
            {!hideNavbarRoutes.includes(location.pathname) && <Menu />}
            <AppRoutes />
            <Footer />
          </NavbarProvider>
        </QueryClientProvider>
      </div>
    </CartProvider>
  );
}

export default App;

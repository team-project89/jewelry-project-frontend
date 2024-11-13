import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import NavbarProvider from "./context/NavbarOpen";
import Menu from "./feature/home/menu/Menu";
import MainHome from "./feature/home/listofhomeitems/MainHome";
import Auth from "./page/Auth";
import NotAccess from "./style/NotAccess";
import UserWithList from "./feature/wishlist/UserWishList";
import ShoppingBasket from "./feature/user/ShoppingBasket";
import UserLayout from "./feature/user/UserLayout";
import ComlepeProfile from "./feature/authentication/ComlepeProfile";
import AdminLayout from "./feature/admin/AdminLayout";
import AdminDashboard from "./page/AdminDashboard";
import Products from "./feature/admin/product/Products";
import Categories from "./page/Categories";
import { Toaster } from "react-hot-toast";
import SingleProduct from "./feature/home/products/SingleProduct";
import Orders from "./page/Orders";
import SingleProdctLayout from "./page/SingleProdctLayout";

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
          <Routes>
            <Route path='/' element={<MainHome />} />
            <Route path='/auth' element={<Auth />} />
            <Route path='complete-profile' element={<ComlepeProfile />} />
            <Route path='singleproduct/:id' element={<SingleProdctLayout />} />

            <Route path='user' element={<UserLayout />}>
              <Route path='wishlist' element={<UserWithList />} />
              <Route path='basket' element={<ShoppingBasket />} />
            </Route>

            <Route path='/admin' element={<AdminLayout />}>
              <Route index element={<Navigate to='dashboard' replace />} />
              <Route path='dashboard' element={<AdminDashboard />} />
              <Route path='products' element={<Products />} />
              <Route path='categories' element={<Categories />} />
              <Route path='orders' element={<Orders />} />
            </Route>

            <Route path='*' element={<NotAccess />} />
          </Routes>
        </NavbarProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;

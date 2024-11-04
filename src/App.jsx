import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import NavbarProvider from "./context/NavbarOpen";
import ProtectedRoute from "./feature/authentication/ProtectedRoute";
import Menu from "./feature/home/menu/Menu";
import MainHome from "./feature/home/listofmenuitems/MainHome";
import Auth from "./page/Auth";
import NotAccess from "./style/NotAccess";
import UserWithList from "./feature/user/UserWishList";
import ShoppingBasket from "./feature/user/ShoppingBasket";
import UserLayout from "./feature/user/UserLayout";
import ComlepeProfile from "./feature/authentication/ComlepeProfile";
import AdminLayout from "./feature/admin/AdminLayout";
import AdminDashboard from "./page/AdminDashboard";
import Products from "./feature/admin/product/Products";
import Categories from "./page/Categories";
import SingleProduct from "./feature/user/SingleProduct";
import { Toaster } from "react-hot-toast";
import path from "path";

const queryClient = new QueryClient();
function App() {
  const location = useLocation();
  const hideNavbarRoutes = ["/auth", "complete-profile"];
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Toaster />
        <NavbarProvider>
          {!hideNavbarRoutes.includes(location.pathname) && <Menu />}
          <Routes>
            {/* <Route path='/auth' element={<Auth />} />
            <Route path='complete-profile' element={<ComlepeProfile />} />
            <Route
              path='/'
              element={
                <ProtectedRoute>
                  <HomeLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate replace to='shop' />} />
              <Route path='shop' element={<Menu />} />

              
              <Route
                path='user'
                element={
                  <ProtectedRoute>
                    <UserLayout />
                  </ProtectedRoute>
                }
              >
                <Route
                  index
                  element={<Navigate replace to='user-shopping' />}
                />
                <Route path='user-shopping' element={<MainHome />} />
                <Route path='user-wishlist' element={<UserWithList />} />
                <Route path='shoppingbasket' element={<ShoppingBasket />} />
                <Route path=':id' element={<SingleProduct />} />
              </Route>

              
              <Route path='/admin' element={<AdminLayout />}>
                <Route index element={<Navigate to='dashboard' replace />} />
                <Route path='dashboard' element={<AdminDashboard />} />
                <Route path='products' element={<Products />} />
                <Route path='categories' element={<Categories />} />
              </Route>
            </Route> */}




            
            <Route path='/' element={<MainHome />} />
            <Route path='/auth' element={<Auth />} />

            <Route
              path='user'
              element={
                <ProtectedRoute>
                  <UserLayout />
                </ProtectedRoute>
              }
            >
              <Route path='userwishlist' element={<UserWithList />} />
              <Route path='shoppingbasket' element={<ShoppingBasket />} />
              <Route path=':id' element={<SingleProduct />} />
            </Route>

            <Route
              path='/admin'
              element={
                <ProtectedRoute>
                  <AdminLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate to='dashboard' replace />} />
              <Route path='dashboard' element={<AdminDashboard />} />
              <Route path='products' element={<Products />} />
              <Route path='categories' element={<Categories />} />
            </Route>

            <Route path='*' element={<NotAccess />} />
          </Routes>
        </NavbarProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;

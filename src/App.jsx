import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Navigate, Route, Routes } from "react-router-dom";
import NavbarProvider from "./context/NavbarOpen";
import AdminDashboardMenu from "./feature/admin/AdminUserDashboardMenu";
import ProtectedRoute from "./feature/authentication/ProtectedRoute";
import Menu from "./feature/home/menu/Menu";
import MainHome from "./feature/home/showstatus/MainHome";
import UserDashboardLayout from "./feature/user/UserDashboardLayout";
import Auth from "./page/Auth";
import HomeLayout from "./page/Home";
import NotAccess from "./style/NotAccess";
import UserWithList from "./feature/user/UserWishList";
import ShoppingBasket from "./feature/user/ShoppingBasket";
import SingleProduct from "./feature/user/SingleProduct";
import UserLayout from "./feature/user/UserLayout";
import ComlepeProfile from "./feature/authentication/ComlepeProfile";
import AdminLayout from "./feature/admin/AdminLayout";
import AdminDashboard from "./page/AdminDashboard";
import Products from "./feature/admin/product/Products";
import Categories from "./page/Categories";

const queryClient = new QueryClient();
function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <NavbarProvider>
          <Routes>
            {/* {unauthorized menu} */}
            <Route path='/auth' element={<Auth />} />
            <Route path='complete-profile' element={<ComlepeProfile/>} />
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

              {/* user Routes */}
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
                <Route path='single-product' element={<SingleProduct />} />
              </Route>

              {/* admin Routes */}
              <Route path="/admin" element={<AdminLayout/>}> 
                <Route index element={<Navigate to="dashboard" replace/>}/>
                <Route path="dashboard" element={<AdminDashboard/>} />
                <Route path="products" element={<Products/>}/>
                <Route path="categories" element={<Categories/>}/>
              </Route>
            </Route>

            <Route path='*' element={<NotAccess />} />
          </Routes>
        </NavbarProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;

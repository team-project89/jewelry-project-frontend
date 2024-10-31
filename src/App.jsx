import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Navigate, Route, Routes } from "react-router-dom";
import NavbarProvider from "./context/NavbarOpen";
import AdminDashboardMenu from "./feature/admin/AdminUserDashboardMenu";
import ProtectedRoute from "./feature/authentication/ProtectedRoute";
import Menu from "./feature/home/menu/Menu";
import MainHome from "./feature/home/showstatus/MainHome";
import UserDashboardLayout from "./feature/user/UserDashboardMenu";
import Auth from "./page/Auth";
import HomeLayout from "./page/Home";
import NotAccess from "./style/NotAccess";

const queryClient = new QueryClient();
function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <NavbarProvider>
          <Routes>
            {/* {unauthorized menu} */}
            <Route path='/auth' element={<Auth />} />
            <Route path='/' element={<HomeLayout />}>
              <Route index element={<Navigate replace to='shop' />} />
              <Route path='shop' element={<Menu />} />

              {/* user Routes */}
              <Route
                path='user'
                element={
                  <ProtectedRoute>
                    <UserDashboardLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Navigate replace to='user-panel' />} />
                <Route path='user-panel' element={<MainHome />} />
              </Route>

              {/* admin Routes */}
              <Route
                path='admin'
                element={
                  <ProtectedRoute>
                    <AdminDashboardMenu />
                  </ProtectedRoute>
                }
              />
            </Route>
            <Route path='*' element={<NotAccess />} />
          </Routes>
        </NavbarProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;

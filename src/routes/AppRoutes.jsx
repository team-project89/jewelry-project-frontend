import AdminLayout from "@/feature/admin/AdminLayout";
import Products from "@/feature/admin/product/Products";
import ShopStatus from "@/feature/admin/shopstatus/ShopStatus";
import CompleteProfile from "@/feature/authentication/ComlepeProfile";
import MainHome from "@/feature/home/listofhomeitems/MainHome";
import AllProductView from "@/feature/home/products/AllProductView";
import UserLayout from "@/feature/user/UserLayout";
import ShoppingBasket from "@/feature/user/UserShoppingBasket";
import UserWithList from "@/feature/wishlist/UserWishList";
import AdminDashboard from "@/page/AdminDashboard";
import Auth from "@/page/Auth";
import Categories from "@/page/Categories";
import Orders from "@/page/Orders";
import SingleProdctLayout from "@/page/SingleProdctLayout";
import NotAccess from "@/style/NotAccess";
import { Navigate, Route, Routes } from "react-router-dom";

function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<MainHome />} />
      <Route path='/auth' element={<Auth />} />
      <Route path='complete-profile' element={<CompleteProfile />} />
      <Route path='allproducts' element={<AllProductView />} />
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
        <Route path='shopstatus' element={<ShopStatus />} />
      </Route>

      <Route path='*' element={<NotAccess />} />
    </Routes>
  );
}

export default AppRoutes;
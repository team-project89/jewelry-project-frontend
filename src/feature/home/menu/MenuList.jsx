import { RiShoppingBasketLine } from "react-icons/ri";
import { MdFavoriteBorder } from "react-icons/md";
import UserNavlink from "@/style/UserNavlink";
import { useUserCart } from "@/feature/cart/useUserCart";

function MenuList() {
  const { userCart } = useUserCart();
  const quantityProduct = userCart.regular_items.reduce(
    (total, item) => total + item.quantity,
    0
  );
  return (
    <nav className='hidden lg:flex gap-[60px] justify-center items-center order-1 xl:order-2'>
      <UserNavlink path='/user/basket' className='relative'>
        سبد خرید
        <RiShoppingBasketLine className='w-6 h-6' />
        <span className='absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center'>
          {quantityProduct}
        </span>
      </UserNavlink>

      <UserNavlink path='/user/wishlist'>
        مورد علاقه‌ها
        <MdFavoriteBorder className='w-6 h-6' />
      </UserNavlink>
    </nav>
  );
}

export default MenuList;

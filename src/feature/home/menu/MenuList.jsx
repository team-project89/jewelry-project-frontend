import { RiShoppingBasketLine } from "react-icons/ri";
import { MdFavoriteBorder } from "react-icons/md";
import UserNavlink from "@/style/UserNavlink";

function MenuList() {
  return (
    <nav className='hidden lg:flex gap-[60px] justify-center items-center order-1 xl:order-2'>
      <UserNavlink path='/user/basket'>
        سبد خرید
        <RiShoppingBasketLine className='w-6 h-6' />
      </UserNavlink>

      <UserNavlink path='/user/wishlist'>
        مورد علاقه‌ها
        <MdFavoriteBorder className='w-6 h-6' />
      </UserNavlink>
    </nav>
  );
}

export default MenuList;

import { RiShoppingBasketLine } from "react-icons/ri";
import { MdFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";

function MenuList() {
  return (
    <nav className='hidden lg:flex gap-[60px] justify-center items-center order-1 xl:order-2'>
      <Link
        to='/user/basket'
        className='text-size flex justify-center items-center gap-3'
        title='View your shopping cart'
      >
        سبد خرید
        <RiShoppingBasketLine className='w-6 h-6' />
      </Link>
      <Link
        to='/user/wishlist'
        className='text-size flex justify-center items-center gap-3'
        title='View your favorite items'
      >
        مورد علاقه‌ها
        <MdFavoriteBorder className='w-6 h-6' />
      </Link>
    </nav>
  );
}

export default MenuList;

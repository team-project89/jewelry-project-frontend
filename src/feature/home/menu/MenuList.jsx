import { Link } from "react-router-dom";

function MenuList() {
  return (
    <nav className='hidden lg:flex gap-x-[24px] justify-center items-center order-1 xl:order-2'>
      <Link
        to='user/shoppingbasket'
        className='text-size'
        title='View your shopping cart'
      >
        سبد خرید
      </Link>
      <Link
        to='user/userwishlist'
        className='text-size'
        title='View your favorite items'
      >
        مورد علاقه‌ها
      </Link>
    </nav>
  );
}

export default MenuList;

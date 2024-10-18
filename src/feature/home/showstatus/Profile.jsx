import { useSticky } from "@/hooks/useScrollSticky";
import logo from "../../../../public/LogoShop.webp";

function Profile() {
  const sticky = useSticky();

  return (
    <header
      aria-labelledby='shop-profile'
      className={`px-2 xl:px-52 lg:mx-0 mt-[54px] lg:mt-[68px] sticky top-0 bg-secondary-0 ${
        sticky ? "border-b-2 p-2 shadow-lg" : ""
      }`}
    >
      <div className='flex items-center justify-end gap-x-2 sticky top-0'>
        <div>
          <h1 id='shop-profile' className='font-bold text-right'>
            جواهرسازی لیمون
          </h1>
          <p className='text-success text-sm'>آماده پذیرش سفارش</p>
        </div>
        <picture>
          <source srcSet={logo} type='image/webp' />
          <img
            src={logo}
            alt='Shop Logo - Limon Jewelry Store Identity'
            className='logo-style'
            width={100}
            height={100}
            loading='lazy'
          />
        </picture>
      </div>
    </header>
  );
}

export default Profile;

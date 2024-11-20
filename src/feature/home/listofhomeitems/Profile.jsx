import { useSticky } from "@/hooks/useScrollSticky";
import logo from "../../../../public/LogoShop.webp";

function Profile() {
  const sticky = useSticky();

  return (
    <header
      className={`px-2  xl:px-52 mt-[54px] lg:mt-[68px] sticky top-0 bg-secondary-0 ${
        sticky ? "border-b-2 p-2 shadow-lg" : ""
      }`}
    >
      <div className='flex items-center justify-end gap-x-2'>
        <div className='text-right'>
          <h1 id='shop-profile' className='font-bold'>
            فروشگاه لیمون
          </h1>
          <p className={`text-sm text-success`}>فروشگاه باز است</p>
        </div>
        <img
          src={logo}
          alt='Shop Logo - Limon Jewelry Store'
          className='logo-style'
          width={100}
          height={100}
          loading='lazy'
        />
      </div>
    </header>
  );
}

export default Profile;

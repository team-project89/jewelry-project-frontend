import logo from "../../public/LogoShop.webp";

function ShopProfileInfo({ margin }) {
  return (
    <div
      className={`w-full border-secondary-400 flex flex-col items-center gap-8 pb-8 px-4 md:px-16 lg:px-24 xl:px-${margin}`}
    >
      <div className='flex items-center w-full'>
        <div className='flex-grow border-t border-gray-300'></div>
        <div className='mx-4'>
          <img
            src={logo}
            alt='Shop Logo - Brand Identity'
            className='w-20 h-20 lg:w-24 lg:h-24 object-contain rounded-xl shadow-lg border-2 border-gray-200 transition-transform duration-300 hover:scale-105'
          />
        </div>
        <div className='flex-grow border-t border-gray-300'></div>
      </div>
    </div>
  );
}

export default ShopProfileInfo;

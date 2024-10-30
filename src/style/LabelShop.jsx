import brand from "../../public/BrandShop.webp";
function LabelShop({ style }) {
  return (
    <picture className={`${style}`}>
      <img src={brand} className='w-full h-auto object-cover' alt='brand' />
    </picture>
  );
}
export default LabelShop;

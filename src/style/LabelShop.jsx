import brand from "../../public/logo.jpg";
function LabelShop({ style }) {
  return (
    <picture className={`${style}`}>
      <img src={brand} className='w-full h-auto object-cover' alt='brand' />
    </picture>
  );
}
export default LabelShop;

import brand from "../../public/BrandShop.webp";

function LabelShop({ className }) {
  return (
    <div className={`transition-transform ${className}`}>
      <img
        src={brand}
        className="h-32 w-auto object-contain"
        alt="Brand Logo"
        loading="lazy"
      />
    </div>
  );
}

export default LabelShop;

function WishListItems({ items }) {
    if (!items || items.length === 0) {
      return <p className="text-center text-amber-800">هیچ آیتمی برای نمایش وجود ندارد</p>;
    }
  
    return (
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6'>
        {items.map((item) => (
          <div 
            key={item.id} 
            className='border-2 border-secondary-200/30 p-6 rounded-lg shadow-lg 
              bg-gradient-to-b from-secondary-50 to-secondary-100/50 
              hover:shadow-secondary-200/50 transition-all duration-300
              relative overflow-hidden'
          >
            {/* Decorative corner elements */}
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-secondary-200/30 rounded-tr-lg" />
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-secondary-200/30 rounded-tl-lg" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-secondary-200/30 rounded-br-lg" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-secondary-200/30 rounded-bl-lg" />
            
            <img
              src={item?.product?.thumbnail}
              alt={item?.product?.name}
              className='w-full h-48 object-cover rounded-lg border border-secondary-200 shadow-sm'
              onError={(e) => (e.target.src = "path/to/placeholder-image.jpg")}
            />
            <h2 className='text-xl font-bold mt-4 text-secondary-900 text-right'>
              {item.product.name}
            </h2>
            <p className='text-secondary-800/80 mt-2 text-right'>
              {item.product.description}
            </p>
            <div className="mt-4 space-y-2 border-t border-secondary-200 pt-3">
              <p className='text-sm text-secondary-700 text-right'>
                تاریخ افزودن: {new Date(item.added_at).toLocaleDateString('fa-IR')}
              </p>
              <p className='text-sm text-secondary-700 text-right'>
                قیمت: {item.product.price_after_discount.toLocaleString('fa-IR')} تومان
              </p>
            </div>
          </div>
        ))}
      </div>
  );
}

export default WishListItems;

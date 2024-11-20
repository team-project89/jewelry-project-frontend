import React from "react";
import { toPersianNumbers } from "../utils/toPersianNumbers";
import { Link } from "react-router-dom";

function ProductGrid({ items, isWishlist = false }) {
  if (!items || items.length === 0) {
    return (
      <p style={{ color: "#000", textShadow: "2px 2px #fff" }}>
        {isWishlist
          ? "هیچ آیتمی در لیست علاقه‌مندی‌ها وجود ندارد"
          : "هیچ محصولی برای نمایش وجود ندارد"}
      </p>
    );
  }

  const getProductData = (item) => {
    return isWishlist ? item.product : item;
  };

  return (
    <div
      className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12 px-20'
      style={{ direction: "rtl", color: "#000" }}
    >
      {items.map((item) => {
        const product = getProductData(item);

        return (
          <Link
            to={`/singleproduct/${item.id}`}
            key={item.id}
            className='border p-4 rounded shadow-lg  border-secondary-300 hover:shadow-secondary-200/50 transition-all duration-300'
            style={{
              border: "3px double #000",
              backgroundColor: "#fff",
              borderRadius: "20px",
              boxShadow: "0 0 10px #000",
            }}
          >
            <img
              src={product.thumbnail}
              alt={product.name}
              className='w-full h-48 object-cover rounded'
              onError={(e) => (e.target.src = "path/to/placeholder-image.jpg")}
            />
            <h2
              className='text-xl font-bold mt-2'
              style={{ color: "#000", textShadow: "1px 1px #fff" }}
            >
              {product.name}
            </h2>
            <p className='text-gray-600' style={{ textShadow: "1px 1px #fff" }}>
              {product.description}
            </p>
            {isWishlist && (
              <p
                className='text-sm text-gray-500'
                style={{ textShadow: "1px 1px #fff" }}
              >
                اضافه شده در:{" "}
                {toPersianNumbers(new Date(item.added_at).toLocaleDateString())}
              </p>
            )}
            <p
              className='text-sm text-gray-500'
              style={{ textShadow: "1px 1px #fff" }}
            >
              قیمت: {toPersianNumbers(product.price_after_discount)} تومان
            </p>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductGrid;

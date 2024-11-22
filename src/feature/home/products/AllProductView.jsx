import useProducts from "@/hooks/useProducts";
import ProductGrid from "@/style/ProductsGrid";

function AllProductView() {
  const { products } = useProducts();

  if (!products || products.length === 0) {
    return (
      <p className='text-center text-secondary-800/60'>
        هیچ محصولی برای نمایش وجود ندارد
      </p>
    );
  }

  return (
    <div className='border border-secondary-100/20 rounded-xl p-4 bg-secondary-50/5'>
      <ProductGrid items={products} isWishlist={false} />
    </div>
  );
}

export default AllProductView;

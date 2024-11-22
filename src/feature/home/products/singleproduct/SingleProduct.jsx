import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MdFavoriteBorder } from "react-icons/md";
import { CarouselDemo } from "@/style/Crousel";
import { useSingleProduct } from "@/feature/user/useSingleProduct";
import SignleUserTableRow from "@/feature/admin/product/SignleUserTableRow";
import SetQuantity from "@/feature/home/products/singleproduct/UserSetQuantity";
import { useUserCart } from "@/feature/cart/useUserCart";
import SingleProductDiscount from "./SingleProductDiscount";
import { productItem } from "@/utils/singleProductConstants";
import { SingleProductStyles as styles } from "../../../../style/SingleProduct.styles";
import { useWishlistActions } from "@/hooks/useWishlistAction";
import LoadingSpinner from "@/components/Loading/LoadingSpinner";

function SingleProduct() {
  // 1. Hooks and State Management
  const { id } = useParams();
  const productId = Number(id);
  const navigate = useNavigate();
  const { getProduct, isLoading, singleProduct } = useSingleProduct();
  const { userCart, loadingCart } = useUserCart();
  const { handleAddToWishlist, isWishlistLoading } = useWishlistActions();

  // 2. Product Data Destructuring with Default Values
  const {
    name = "بدون عنوان",
    images_list = [],
    pre_order_available = false,
    stock = 0,
    pre_order_price = 0,
  } = singleProduct || {};

  // 3. Side Effects
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        await getProduct(id);
      } catch (error) {
        console.error("Failed to fetch product:", error);
      }
    };
    fetchProduct();
  }, [id, getProduct]);

  // 4. Event Handlers
  const handleWishlist = () => handleAddToWishlist(id);

  // 5. Loading State
  if (isLoading || isWishlistLoading || loadingCart) {
    return (
      <div className={styles.loadingContainer}>
        <LoadingSpinner />
      </div>
    );
  }

  // 6. Component Parts
  const ProductImages = () => (
    <div className={styles.imageSection}>
      <div className={styles.imageContainer}>
        <CarouselDemo images={images_list} sizeProduct='lg' />
      </div>
      <button
        onClick={() => navigate("/user/basket")}
        className={`${styles.checkoutButton} disabled:bg-secondary-300 disabled:cursor-not-allowed`}
        disabled={!userCart?.regular_items?.length}
      >
        تکمیل خرید
      </button>
    </div>
  );

  const ProductDetails = () => (
    <div className={styles.detailsSection}>
      <div className={styles.headerContainer}>
        <button onClick={handleWishlist} className={styles.wishlistButton}>
          <MdFavoriteBorder className={styles.wishlistIcon} />
        </button>
        <h1 className={styles.productTitle}>{name}</h1>
      </div>

      <div className={styles.infoSection}>
        <SignleUserTableRow singleProduct={singleProduct} />
      </div>

      <div className='space-y-4 sm:space-y-6'>
        <div className={styles.quantitySection}>
          <SetQuantity
            productItem={productItem(userCart, productId)}
            userCart={userCart || { regular_items: [] }}
            pre_order_available={pre_order_available}
            stock={stock}
            productId={id}
          />
        </div>

        <div className={styles.discountSection}>
          <SingleProductDiscount pre_order_price={pre_order_price} />
        </div>
      </div>
    </div>
  );

  // 7. Main Render
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.card}>
          <div className={styles.flexContainer}>
            <ProductImages />
            <ProductDetails />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;

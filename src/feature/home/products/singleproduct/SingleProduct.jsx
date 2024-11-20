import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MdFavoriteBorder } from "react-icons/md";
import Loading from "@/style/Loading";
import { CarouselDemo } from "@/style/Crousel";
import { useSingleProduct } from "@/feature/user/useSingleProduct";
import SignleUserTableRow from "@/feature/admin/product/SignleUserTableRow";
import SetQuantity from "@/feature/home/products/singleproduct/UserSetQuantity";
import { useUserCart } from "@/feature/cart/useUserCart";
import SingleProductDiscount from "./SingleProductDiscount";
import { productItem } from "@/utils/singleProductConstants";
import { SingleProductStyles as styles } from "../../../../style/SingleProduct.styles";
import { useWishlistActions } from "@/hooks/useWishlistAction";

function SingleProduct() {
  const { id } = useParams();
  const productId = Number(id);
  const navigate = useNavigate();
  const { getProduct, isLoading, singleProduct } = useSingleProduct();
  const { userCart, loadingCart } = useUserCart();
  const { handleAddToWishlist, isWishlistLoading } = useWishlistActions();

  const {
    name = "بدون عنوان",
    images_list = [],
    pre_order_available = false,
    stock = 0,
    pre_order_price = 0,
  } = singleProduct || {};

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

  const handleWishlist = () => {
    handleAddToWishlist(id);
  };

  if (isLoading || isWishlistLoading || loadingCart)
    return (
      <div className={styles.loadingContainer}>
        <Loading />
      </div>
    );

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.card}>
          <div className={styles.flexContainer}>
            {/* Product Images Section */}
            <div className={styles.imageSection}>
              <div className={styles.imageContainer}>
                <CarouselDemo images={images_list} sizeProduct='lg' />
              </div>
              <button
                onClick={() => navigate("/user/basket")}
                className={styles.checkoutButton}
              >
                تکمیل خرید
              </button>
            </div>

            {/* Product Details Section */}
            <div className={styles.detailsSection}>
              <div className={styles.headerContainer}>
                <button
                  onClick={handleWishlist}
                  className={styles.wishlistButton}
                >
                  <MdFavoriteBorder className={styles.wishlistIcon} />
                </button>
                <h1 className={styles.productTitle}>{name}</h1>
              </div>

              <div className={styles.infoSection}>
                <SignleUserTableRow singleProduct={singleProduct} />
              </div>

              <div className="space-y-4 sm:space-y-6">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;

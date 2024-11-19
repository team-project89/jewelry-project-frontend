import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import useUser from "@/hooks/useUser";
import { useCreateCart } from "../../../cart/useCreateCart";
import { useDecreaseItemCardQuantity } from "../../../cart/useDecreaseItemCardQuantity";
import { getTokenFromCookies } from "@/services/httpService";
import ProductQuantity from "@/style/ProductQuantity";
import PreOrderStyle from "@/style/PreOrderStyle";
import toast from "react-hot-toast";
import { useQuantityChange } from "@/hooks/useQuantityChange";

function SetQuantity({
  stock,
  pre_order_available,
  productId,
  userCart,
  productItem,
}) {
  const { handleQuantityChange, isCreating, isDecreasing } =
    useQuantityChange();

  return (
    <div className='space-y-6'>
      <div className='flex flex-col space-y-2'>
        <h3 className='text-lg font-medium text-zinc-200'>
          تعداد مورد نظر را انتخاب کنید
        </h3>
        <ProductQuantity
          isLoading1={isCreating}
          isLoading2={isDecreasing}
          productItem={productItem}
          productId={productId}
          userCart={userCart}
          stock={stock}
          handleIncreament={() =>
            handleQuantityChange("increment", Number(productId))
          }
          handleDecrement={() =>
            handleQuantityChange("decrement", Number(productId))
          }
        />
      </div>

      <PreOrderStyle pre_order_available={pre_order_available} />
    </div>
  );
}

export default SetQuantity;

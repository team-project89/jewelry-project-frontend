import UserTable from "@/style/UserTable";
import { toPersianNumbersWithComma } from "@/utils/toPersianNumbers";

function SignleUserTableRow({ singleProduct}) {
  const {
    description = "بدون توضیحات",
    stock,
    discount_percentage,
    price,
    price_after_discount,
  } = singleProduct || {};

  return (
    <table className='border-0 border-spacing-0 w-full'>
      <tbody className='space-y-8'>
        <UserTable label='توضیحات' value={description} />
        <UserTable
          label='تعداد محصول'
          value={
            Number.isFinite(stock)
              ? toPersianNumbersWithComma(stock)
              : "ناموجود"
          }
        />
        <UserTable
          label='درصد تخفیف'
          value={
            Number.isFinite(discount_percentage)
              ? `%${toPersianNumbersWithComma(discount_percentage)}`
              : "بدون تخفیف"
          }
        />
        {price_after_discount ? (
          <UserTable
            label='قیمت'
            value={
              <div>
                <span className='line-through text-red-500'>
                  {`${toPersianNumbersWithComma(price)} تومان`}
                </span>
                <span className='block text-green-600 mt-1'>
                  {`${toPersianNumbersWithComma(price_after_discount)} تومان`}
                </span>
              </div>
            }
          />
        ) : (
          <UserTable
            label='قیمت'
            value={
              Number.isFinite(price)
                ? `${toPersianNumbersWithComma(price)} تومان`
                : "قیمت ندارد"
            }
          />
        )}
 
      </tbody>
    </table>
  );
}

export default SignleUserTableRow;

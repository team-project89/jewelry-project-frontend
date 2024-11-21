import { toPersianNumbersWithComma } from "@/utils/toPersianNumbers";

export default function OrderIdBadge({ id }) {
  return (
    <span className='bg-secondary-900/90 text-secondary-0 px-4 py-1.5 rounded-xl font-medium'>
      #{toPersianNumbersWithComma(id)}
    </span>
  );
} 
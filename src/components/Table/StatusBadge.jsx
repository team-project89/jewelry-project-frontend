export default function StatusBadge({ status }) {
  return (
    <span
      className={`
        px-5 py-2 rounded-xl text-sm font-medium
        ${
          status === "pending"
            ? "bg-secondary-100/80 text-secondary-700 border border-secondary-200/80"
            : "bg-secondary-900/90 text-secondary-0 shadow-md"
        }
      `}
    >
      {status === "pending" ? "در انتظار" : "ارسال شده"}
    </span>
  );
} 
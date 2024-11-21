export default function TableHeader({ children, className = "" }) {
  return (
    <th className={`px-8 py-6 text-right ${className}`}>
      {children}
    </th>
  );
} 
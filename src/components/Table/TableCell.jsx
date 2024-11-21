export default function TableCell({ children, className = "" }) {
  return (
    <td className={`px-8 py-6 ${className}`}>
      {children}
    </td>
  );
} 
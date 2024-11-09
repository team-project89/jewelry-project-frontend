import React from "react";

function UserTable({ label, value }) {
  return (
    <tr className='border-none flex justify-between'>
      <th className='border-none p-2 text-secondary-900'>{label}</th>
      <td className='border-none p-2'>{value}</td>
    </tr>
  );
}

export default UserTable;

import React from "react";

function UserTable({ label, value }) {
  return (
    <tr
      className='
      flex justify-between items-center
      border-b border-gray-100
      group transition-all duration-200
      hover:bg-gray-50
    '
    >
      <th
        className='
        py-4 px-2
        text-gray-500
        font-medium
      '
      >
        {value}
      </th>
      <td
        className='
        py-4 px-2
        text-gray-800
        flex justify-center items-center
      '
      >
        {label}
      </td>
    </tr>
  );
}

export default UserTable;

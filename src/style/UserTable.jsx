import React from "react";

function UserTable({ label, value }) {
  return (
    <tr className='flex justify-between items-center w-full'>
      <th className='py-2 sm:py-4 px-1 sm:px-2 text-gray-500 font-medium text-[10px] xs:text-sm sm:text-base border-none'>
        {value}
      </th>
      <td className='py-2 sm:py-4 px-1 sm:px-2 text-gray-800 flex justify-center items-center text-[10px] xs:text-sm sm:text-base border-none'>
        {label}
      </td>
    </tr>
  );
}

export default UserTable;

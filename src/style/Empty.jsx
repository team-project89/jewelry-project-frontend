import React from "react";

function Empty({ resourceName }) {
  return (
    <h3 className=' p-24 text-secondary-800 font-bold' dir='rtl'>
      {resourceName} وجود ندارد ...{" "}
    </h3>
  );
}

export default Empty;

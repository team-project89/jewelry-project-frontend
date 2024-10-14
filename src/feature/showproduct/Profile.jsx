import React from "react";
import logo from "../../../public/brand.jpg";

function Profile() {
  return (
    <div className="mx-2 lg:mx-0">
      <div className="flex items-center gap-x-4">
        <picture>
          <img src={logo} alt='' className='w-16 h-16 object-contain' />
        </picture>
        <div>
          <div>
            <h1>Lomon jewelry</h1>
          </div>
          <div className="flex gap-x-4">
            <p className="text-success text-sm">availble For work</p>
            <span className="text-sm">Follow</span>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Profile;

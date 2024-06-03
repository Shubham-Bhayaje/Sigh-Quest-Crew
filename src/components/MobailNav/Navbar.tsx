import React from "react";

function Navbar() {
  return (
    <div className="flex sm:hidden h-16 w-full items-center justify-between">
      <div>
        <div className="bg-black">
          <img src="/Logo.png" alt="" className="w-14 h-14" />
        </div>
      </div>
      <div className="bg-black">
        <img src="/menu (1).png" alt="" className="w-10 h-10" />
      </div>
    </div>
  );
}

export default Navbar;

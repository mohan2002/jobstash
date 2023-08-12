"use client";

import Image from "next/image";
import React from "react";
import Logo from "../../../public/Logo.png";
import ProfileDropdown from "./ProfileDropdown";

function Navbar() {
  return (
    <div className="flex flex-row justify-between p-2 items-center border-b-2 border-[#2C2B4D]">
      {/* Logo */}
      <Image src={Logo} alt="Logo" width={180} height={250} />
      {/* Profile */}
      <ProfileDropdown />
    </div>
  );
}

export default Navbar;

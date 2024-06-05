import React from "react";
import NavbarLink from "../NavbarLink";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-center sm:justify-between items-center">
        <div className="text-white text-lg">
          <NavbarLink text="Home" route="/" />
          <NavbarLink text="About" route="/about" />
          <NavbarLink text="Blogs" route="/blogs" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

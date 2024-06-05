import Link from "next/link";
import React from "react";

const NavbarLink = ({ text, route }) => {
  return (
    <Link href={route} className="mr-6 hover:text-gray-400">
      {text}
    </Link>
  );
};

export default NavbarLink;

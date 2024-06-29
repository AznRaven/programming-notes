import Link from "next/link";
import React from "react";
import { ModeToggle } from "./ModeToggle";

const Sidebar = () => {
  const navLinks = [
    {
      href: "/",
      name: "Home",
    },
    {
      href: "/js",
      name: "Javascript",
    },
    {
      href: "/python",
      name: "Python",
    },
  ];
  return (
    <nav className="flex flex-col px-4 py-2 space-y-2">
        <ModeToggle/>
      {navLinks.map((x, i) => (
        <Link href={x.href} key={i}>
          {x.name}
        </Link>
      ))}
    </nav>
  );
};

export default Sidebar;

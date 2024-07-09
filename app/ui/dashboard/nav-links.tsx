"use client";
import { usePathname } from "next/navigation";

const NavLinks = () => {
  const pathname = usePathname();
  console.log(pathname);
  return <div></div>;
};

export default NavLinks;

// NOTE: usePathname is a client component hook that lets you read the current URL's pathname

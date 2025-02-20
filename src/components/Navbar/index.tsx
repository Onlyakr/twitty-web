"use client";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { IoIosMenu } from "react-icons/io";
import { LuTwitter } from "react-icons/lu";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const { data: session } = useSession();
  const pathname = usePathname();
  const activeNav =
    pathname === "/home" ? "" : pathname.startsWith("/profile") ? "" : ""; // Default color

  if (session) {
    return (
      <nav className="w-screen h-auto px-12 py-4 text-[#171717] flex justify-center items-center">
        <div className="container mx-auto px-16 py-4 bg-white flex justify-between items-center rounded-full shadow-lg shadow-white">
          <div className="flex items-center space-x-2">
            <LuTwitter className="text-3xl" />
          </div>
          <ul className="hidden md:flex space-x-10">
            <li className={`${activeNav} font-medium text-xl transition-all`}>
              <Link href="/home">Home</Link>
            </li>
            <li className="font-medium text-xl">
              <Link href="/profile">Profile</Link>
            </li>
          </ul>
          <button
            className="hidden md:flex font-medium text-lg px-4 py-2 rounded-full transition-all bg-[#171717] text-white hover:scale-95 active:scale-105"
            onClick={() => signOut()}
          >
            Sign Out
          </button>
          <IoIosMenu className="text-2xl md:hidden" />
        </div>
      </nav>
    );
  }
  return (
    <nav className="w-screen h-auto px-12 py-4 text-[#171717] flex justify-center items-center">
      <div className="container mx-auto px-16 py-4 bg-white flex justify-between items-center rounded-full shadow-lg shadow-white">
        <div className="flex items-center space-x-2">
          <LuTwitter className="text-3xl" />
        </div>
        <ul className="hidden md:flex space-x-10">
          <li className={`${activeNav} font-medium text-xl transition-all`}>
            <Link href="/home">Home</Link>
          </li>
          <li className="font-medium text-xl">
            <Link href="/profile">Profile</Link>
          </li>
        </ul>
        <button
          className="hidden md:flex font-medium text-lg px-4 py-2 rounded-full transition-all bg-[#171717] text-white hover:scale-95 active:scale-105"
          onClick={() => signIn("google")}
        >
          Sign In
        </button>
        <IoIosMenu className="text-2xl md:hidden" />
      </div>
    </nav>
  );
};

export default Navbar;

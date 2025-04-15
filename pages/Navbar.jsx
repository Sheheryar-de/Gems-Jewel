"use client";

import React from "react";
import Link from "next/link";
import { CiShoppingCart, CiHeart, CiUser } from "react-icons/ci";
import Badge from "@/components/Badge";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <>
      <nav className="bg-white border-gray-200 text-black">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <div className="flex items-center gap-5">
            <Link
              href={"/"}
              className="self-center md:text-2xl font-semibold whitespace-nowrap text-black"
            >
              GEMS & <span className="text-amber-400 font-bold">JEWEL</span>
            </Link>
          </div>
          <div className="flex items-center space-x-3 md:space-x-6">
            {iconArr.map((item) => (
              <Badge
                key={item.id}
                icon={item.icon}
                value={item.value}
                href={item.link}
              />
            ))}
            <a
              href="#"
              className="text-xs md:text-sm text-amber-600 border-[1px] px-2 py-1 hover:underline hover:bg-amber-500 hover:text-white"
            >
              Get in Touch!
            </a>
          </div>
        </div>
      </nav>
      <nav className="bg-black ">
        <div className="max-w-screen-xl p-3 mx-auto">
          <div className="flex items-center justify-between">
            <ul className="flex flex-row w-full md:w-[350px] text-sm justify-around mx-auto md:mx-0">
              {arr.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.link}
                    className={` ${
                      pathname === item.link
                        ? "text-amber-400 font-semibold"
                        : "text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <form className="hidden md:block">
              <div className="flex">
                <div className="relative w-auto">
                  <input
                    type="search"
                    id="search-dropdown"
                    className="block p-2 w-[400px] min-w-[100px] z-20 text-sm text-white border border-gray-500 bg-transparent rounded-lg  outline-none"
                    placeholder="Search products"
                  />
                  <button
                    type="submit"
                    className="absolute top-0 end-0 p-2 h-full text-sm font-medium text-white rounded-e-lg"
                  >
                    <svg
                      className="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

const iconArr = [
  { id: 1, value: 0, icon: <CiUser className="h-4 w-4 md:w-7 md:h-7" /> },
  // {
  //   id: 2,
  //   value: 10,
  //   icon: <CiHeart className="h-4.5 w-4.5 md:w-7.5 md:h-7.5" />,
  // },
  {
    id: 3,
    value: 20,
    icon: <CiShoppingCart className="h-4.5 w-4.5 md:w-7.5 md:h-7.5" />,
    link: "/cart",
  },
];

const arr = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Shop By Category", link: "/shop" },
  { id: 3, name: "Contact Us", link: "/contact-us" },
  { id: 4, name: "About", link: "/about" },
];

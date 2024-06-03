"use client";
import Link from "next/link";
import { useState } from "react";

export const HeaderNavigation = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <>
      <nav className="container mx-auto flex justify-between items-center px-4">
        <div className="text-2xl font-bold">
          <Link href="/">Product App</Link>
        </div>
        <ul className="hidden md:flex space-x-8">
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link href="/contacts" className="hover:underline">
              Contacts
            </Link>
          </li>
        </ul>
        <div className="md:hidden">
          <button
            id="menu-button"
            className="text-white focus:outline-none"
            onClick={() => setMenuOpened((opened) => !opened)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
      <ul
        id="mobile-menu"
        className={`md:hidden flex-col space-y-4 mt-4 px-4 ${menuOpened ? "" : "hidden"}`}
      >
        <li>
          <Link
            href="/"
            className="block py-2 px-4 text-white hover:bg-blue-700 rounded"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="block py-2 px-4 text-white hover:bg-blue-700 rounded"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/contacts"
            className="block py-2 px-4 text-white hover:bg-blue-700 rounded"
          >
            Contacts
          </Link>
        </li>
      </ul>
    </>
  );
};

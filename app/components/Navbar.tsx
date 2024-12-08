"use client";

import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      {/* Flag Logo */}
      <div className="fixed top-4 left-4 z-50">
        <img
          src="/images/logo.svg"
          alt="Free Syria Flag"
          className="w-24 h-26 object-cover rounded-full shadow-lg"
        />
      </div>

      {/* Header */}
      <header className="p-4 bg-black bg-opacity-50 fixed w-full z-20">
        {/* Navbar Container */}
        <div className="flex items-center justify-center">
          {/* Desktop Navbar */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a href="/stories" className="hover:underline px-3 py-2">
              قصص شخصية
            </a>
            <a href="/testimonies" className="hover:underline px-3 py-2">
              شهادات حية
            </a>
            <a href="/martyrs" className="hover:underline px-3 py-2">
              الشهداء
            </a>
            <a href="/art" className="hover:underline px-3 py-2">
              القسم الفني
            </a>
            <a href="/donation" className="hover:underline px-3 py-2">
              التبرع
            </a>
            <a href="/hope" className="hover:underline px-3 py-2">
              رسائل أمل
            </a>
            <a href="/heritage" className="hover:underline px-3 py-2">
              توثيق التراث
            </a>
          </nav>

          {/* Hamburger Menu Button for Small Screens */}
          <button
            className="text-white md:hidden focus:outline-none ml-auto"
            onClick={toggleMenu}
          >
            <span className="block w-8 h-1 bg-white mb-1"></span>
            <span className="block w-8 h-1 bg-white mb-1"></span>
            <span className="block w-8 h-1 bg-white"></span>
          </button>
        </div>
      </header>

      {/* Fullscreen Menu for Mobile */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-green-500 text-white flex flex-col items-center justify-center z-30 p-4">
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-white text-2xl focus:outline-none"
          >
            ✕
          </button>
          <div className="flex flex-col items-center space-y-8 mt-10 text-lg">
            <a href="/stories" className="hover:underline" onClick={toggleMenu}>
              قصص شخصية
            </a>
            <a
              href="/testimonies"
              className="hover:underline"
              onClick={toggleMenu}
            >
              شهادات حية
            </a>
            <a href="/martyrs" className="hover:underline" onClick={toggleMenu}>
              الشهداء
            </a>
            <a href="/art" className="hover:underline" onClick={toggleMenu}>
              القسم الفني
            </a>
            <a
              href="/donation"
              className="hover:underline"
              onClick={toggleMenu}
            >
              التبرع
            </a>
            <a href="/hope" className="hover:underline" onClick={toggleMenu}>
              رسائل أمل
            </a>
            <a
              href="/heritage"
              className="hover:underline"
              onClick={toggleMenu}
            >
              توثيق التراث
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

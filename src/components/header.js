"use client";

import Link from "next/link";
import React, { useEffect } from "react";

// import useEffect from "react";

import "./header.css";

const Header = () => {
  // Sticky Menu Area
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  /* Method that will fix header after a specific scrollable */
  const isSticky = (e) => {
    const header = document.querySelector(".app-header");
    const scrollTop = window.scrollY;
    scrollTop >= 110
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
  };

  return (
    <header className="app-header flex p-2 md:p-6 text-center text-white justify-between">
      {/* <Logo></Logo> */}
      <div className=" pr-8 sm:pr-14 md:pr-80 text-sm md:text-2xl">
        Soroush Jolai
      </div>
      <nav>
        <ul className="flex md:text-2xl">
          <li>
            <Link href="/#about">About</Link>
          </li>
          <li>
            <Link href="/#projects">Portfolio</Link>
          </li>
          <li>
            <Link href="/#skills">Skills</Link>
          </li>
          <li>
            <Link href="/#contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

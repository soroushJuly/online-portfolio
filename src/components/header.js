"use client";

import Link from "next/link";
import Image from "next/image";
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
    <header className="app-header ">
      <div className=" text-black pr-8 sm:pr-14 md:pr-80 text-sm md:text-lg lg:text-2xl">
        <Link href="/">Soroush Jolai</Link>
      </div>
      <nav>
        <ul className="flex md:text-lg lg:text-2xl">
          <li>
            <a href="/CV-Soroush-Jolai-Games.pdf"
              alt="CV"
              target="_blank"
              rel="noopener noreferrer" className="app-header__link"><span>CV</span>
              <i className="material-icons app-header__icon">download</i>
            </a>
          </li>
          <li>
            <Link className="app-header__link" href="/#projects">Projects</Link>
          </li>
          <li>
            <Link className="app-header__link" href="/#skills">Skills</Link>
          </li>
          <li>
            <Link className="app-header__link" href="/#contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header >
  );
};

export default Header;

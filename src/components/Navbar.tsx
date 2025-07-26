"use client";

import React from "react";
import Image from "next/image";

function Navbar() {
  return (
    <div className="bg-base-100 shadow">
      <div className="max-w-7xl mx-auto navbar px-4 flex flex-wrap justify-between items-center">
        {/* Logo + Mobile Dropdown */}
        <div className="flex items-center gap-4 w-full lg:w-auto">
          {/* Dropdown */}
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li><a>ক্লাস ৬-১২</a></li>
              <li><a>স্কিলস</a></li>
              <li><a>ভর্তি পরীক্ষা</a></li>
              <li><a>অনলাইন ব্যাচ</a></li>
              <li><a>ইংলিশ সেন্টার</a></li>
              <li><a>আরো</a></li>
            </ul>
          </div>

          {/* Logo */}
          <Image
            src="https://cdn.10minuteschool.com/images/svg/10mslogo-svg.svg"
            alt="logo"
            width={100}
            height={100}
          />
        </div>

        {/* Search bar */}
        <div className="w-full lg:w-[400px] mt-2 lg:mt-0">
          <input
            type="text"
            placeholder="স্কিলস কোর্স, কিংবা স্কুল প্রোগ্রাম সার্চ করুন..."
            className="input input-bordered w-full rounded"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-sm">
            <li><details><summary>ক্লাস ৬-১২</summary></details></li>
            <li><details><summary>স্কিলস</summary></details></li>
            <li><a>ভর্তি পরীক্ষা</a></li>
            <li><details><summary>অনলাইন ব্যাচ</summary></details></li>
            <li><details><summary>ইংলিশ সেন্টার</summary></details></li>
            <li><details><summary>আরো</summary></details></li>
          </ul>
        </div>

        {/* Login Button */}
        <div className="mt-2 lg:mt-0">
          <button className="bg-green-600 text-white px-4 py-2 rounded">লগ-ইন</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

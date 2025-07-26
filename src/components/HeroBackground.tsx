// components/HeroBackground.tsx
"use client";

import Image from "next/image";
import React from "react";

export default function HeroBackground({ title, description, media }: {
  title: string;
  description: string;
  media: Array<{
    resource_type: string;
    resource_value: string;
    thumbnail_url: string;
  }>;
}) {
  return (
    <div className="bg-[#020314] text-white py-10">
      <div className="max-w-7xl mx-auto px-4 py-24 flex flex-col md:flex-row gap-8 relative">
        {/* Course Info */}
        <div className="md:w-2/3">
          <h1 className="text-4xl font-bold mb-2">{title}</h1>
          <p className="text-yellow-400 mb-4">
            ⭐⭐⭐⭐⭐ (82.6% শিক্ষার্থী কোর্স শেষে ৪+ রেটিং দিয়েছে)
          </p>
          <div
            className="text-gray-300"
            dangerouslySetInnerHTML={{ __html: description }}
          ></div>
        </div>

        {/* Course Preview and Price */}
        <div className="md:w-1/3 bg-white text-black p-2 rounded-lg shadow md:absolute md:top-0 md:right-0">

          <div className="carousel w-full">
            {media.map((item:{
              resource_type: string;
              resource_value: string;
              thumbnail_url: string;
            }, index : number) => {
              const isImage = item.resource_type === "image";
              const isVideo = item.resource_type === "video";

              const imageSrc = isImage
                ? item.resource_value
                : isVideo && item.thumbnail_url;

              const isValidSrc =
                typeof imageSrc === "string" && imageSrc.startsWith("http");

              return isValidSrc ? (
                <div
                  id={`slide${index + 1}`}
                  key={index}
                  className="carousel-item relative w-full"
                >
                  {/* Thumbnail image */}
                  <Image
                    src={imageSrc}
                    width={300}
                    height={180}
                    className="w-full"
                    alt={`Slide ${index + 1}`}
                  />

                  {/* ▶️ Icon for video */}
                  {isVideo && (
                    <a
                      href={`https://www.youtube.com/watch?v=${item.resource_value}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 hover:bg-opacity-60 transition"
                    >
                      <span className="absolute left-1/2 top-1/2 z-[2] -translate-x-1/2 -translate-y-1/2 cursor-pointer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="56"
                          height="56"
                          fill="none"
                          viewBox="0 0 56 56"
                        >
                          <circle
                            cx="28"
                            cy="28"
                            r="28"
                            fill="#fff"
                            fillOpacity="0.5"
                          ></circle>
                          <circle
                            cx="28"
                            cy="28"
                            r="25.415"
                            fill="#fff"
                          ></circle>
                          <path
                            fill="#1CAB55"
                            d="M37.492 26.268c1.334.77 1.334 2.694 0 3.464l-12.738 7.355c-1.334.77-3-.193-3-1.732v-14.71c0-1.539 1.666-2.501 3-1.732l12.738 7.355z"
                          ></path>
                        </svg>
                      </span>
                    </a>
                  )}

                  {/* Navigation buttons */}
                  <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a
                      href={`#slide${index === 0 ? media.length : index}`}
                      className="btn btn-circle"
                    >
                      ❮
                    </a>
                    <a
                      href={`#slide${
                        index === media.length - 1 ? 1 : index + 2
                      }`}
                      className="btn btn-circle"
                    >
                      ❯
                    </a>
                  </div>
                </div>
              ) : null;
            })}
          </div>

          <div className="text-xl font-bold mb-2">
            ৳3850{" "}
            <span className="line-through text-gray-500 text-sm">৳5000</span>{" "}
            <span className="text-red-600">- 1150 ৳ ছাড়</span>
          </div>
          <button className="w-full bg-green-600 text-white py-2 rounded">
            কোর্সটি কিনুন
          </button>

          <ul className="mt-4 space-y-1 text-sm">
            <li>➤ কোর্সটি করেছেন ৩০০০০+ জন</li>
            <li>➤ সময় লাগবে ৫০ ঘণ্টা</li>
            <li>➤ ৪৫০টি ভিডিও</li>
            <li>➤ ১০টি রিডিং এবং ১০টি লিসেনিং মক টেস্ট</li>
            <li>➤ ৩টি লেকচার সিট</li>
            <li>➤ ১টি ফ্রি মক টেস্ট</li>
            <li>➤ ১টি ফ্রি প্র্যাকটিস বই</li>
            <li>➤ ফেসবুক সাপোর্ট গ্রুপ</li>
            <li>➤ কোর্সের মেয়াদ আজীবন</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

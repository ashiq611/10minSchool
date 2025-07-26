"use client";

import Image from "next/image";
import React from "react";

function Pdf({ pdf } : { pdf: { values: Array<{ background: any; cta: any; description: string; description_color: string; title: string; title_color: string; thumbnail: any; top_left_icon_img: any; }> } }) {
  const {
    background,
    cta,
    description,
    description_color,
    title,
    title_color,
    thumbnail,
    top_left_icon_img,
  } = pdf.values[0];

  return (
    <div className="md:w-[700px] py-10">
      <div
        className="rounded-lg bg-cover bg-center relative p-16 flex flex-col md:flex-row justify-between items-center"
        style={{
          backgroundImage: `url(${background.image})`,
          backgroundColor: background.primary_color || "#000", 
        }}
      >
        {/* Top left icon */}
        {top_left_icon_img && (
          <div className="absolute top-4 left-15 w-40 h-40">
            <Image
              src={top_left_icon_img}
              alt="icon"
              width={200}
              height={200}
              className="rounded-full"
            />
          </div>
        )}

        {/* Left content */}
        <div className="md:w-2/3 text-white z-10">
          <h2
            className="text-2xl font-semibold mb-2"
            style={{ color: title_color || "#fff" }}
          >
            {title}
          </h2>
          <p
            className="mb-4 text-sm"
            style={{ color: description_color || "#ddd" }}
          >
            {description}
          </p>
          <button
            className="bg-green-600 text-white px-4 py-2 rounded"
            onClick={() => window.open(cta.clicked_url, "_blank")}
          >
            {cta.text || "Download PDF"}
          </button>
        </div>

        {/* Right image */}
        <div className="md:w-1/3 mt-4 md:mt-0 z-10">
          <Image
            src={thumbnail}
            alt="PDF Thumbnail"
            width={250}
            height={140}
            className="rounded"
          />
        </div>
      </div>
    </div>
  );
}

export default Pdf;

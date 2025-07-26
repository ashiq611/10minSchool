import React from "react";
import Navbar from "@/components/Navbar";
import HeroBackground from "@/components/HeroBackground";
import Instructor from "@/components/Instructor";
import { fetchProductData } from "@/lib/fetchProduct";
import Sections from "@/components/Sections";
import Pdf from "@/components/Pdf";

export default async function page() {
  const { data } = await fetchProductData();
  return (
    <div className="bg-white min-h-screen font-sans text-black">
      <Navbar />

      {/* Hero Section */}
      <HeroBackground
        title={data.title}
        description={data.description}
        media={data.media}
      />

      <div className="max-w-7xl mx-auto px-4 flex flex-col">
        <Instructor instructor={data.sections[2]} />

        {/* Course Highlights */}
        <Sections sections={data.sections[3]} />

        {/* Free PDF Section */}
        <Pdf pdf={data.sections[4]} />
      </div>
    </div>
  );
}

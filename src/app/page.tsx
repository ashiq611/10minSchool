import React from "react";
import Navbar from "@/components/Navbar";
import HeroBackground from "@/components/HeroBackground";
import Instructor from "@/components/Instructor";
import { fetchProductData } from "@/lib/fetchProduct";
import Sections from "@/components/Sections";
import Pdf from "@/components/Pdf";
import Head from "next/head";
import CourseDetailsAccordion from "@/components/CourseDetailsAccordion";
import Success from "@/components/Success";
import CourseFeatures from "@/components/CourseFeatures";
import CourseLearning from "@/components/CourseLearning";

export default async function page() {
  const { data } = await fetchProductData();

  // console.log("seo", data);
  const seo = data.seo.defaultMeta;
  return (
    <>
      <Head>
        {/* Open Graph Meta Tags */}
        {seo.map((meta: any, index: number) => (
          <meta key={index} property={meta.value} content={meta.content} />
        ))}
        
        {/* Title */}
        <title>{seo.find((meta: any) => meta.value === "og:title")?.content || "Course Title"}</title>

        {/* Meta Description */}
        <meta name="description" content={data.seo.description} />

        {/* Meta Keywords */}
        <meta name="keywords" content={data.seo.keywords.join(", ")} />
      </Head>
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

        {/*  Course Learing*/}
        <CourseLearning />

        {/* Course Details on Accordion */}
        <CourseDetailsAccordion />

        {/* sucess student */}
        {/* <Success /> */}
        <CourseFeatures features={data.sections[8]} />

      </div>
    </div>
        </>
  );
}

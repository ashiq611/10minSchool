import Image from "next/image";
import Link from "next/link";
import React from "react";

function Instructor({ instructor }: { instructor: { values: Array<{ name: string; description: string; image: string }> } }) {
  const { name, description, image } = instructor.values[0];
  return (
    <div className="md:w-[700px] flex items-center gap-4 p-10 border border-gray-200 m-2 rounded">
      <Image
        src={image}
        alt="Munzereen Shahid"
        width={60}
        height={60}
        className="rounded-full"
      />
      <div>
        <Link href="https://10minuteschool.com/skills/instructors/munzereen-shahid/" className="font-semibold text-xl hover:text-green-500">{name} <span>{'>'}</span></Link>
        <div
  className="text-md text-gray-400"
  dangerouslySetInnerHTML={{ __html: description }}
/>
      </div>
    </div>
  );
}

export default Instructor;

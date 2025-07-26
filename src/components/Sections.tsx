import Image from 'next/image';
import React from 'react'

function Sections({sections}: {sections: { values: Array<{ subtitle: string; title: string; icon: string }> }}) {
  return (
    <>
     <div>
      <h2 className="text-xl font-semibold my-4">কোর্সটি যেভাবে সাজানো হয়েছে</h2>
      </div>
      <div className="bg-[#0F172A] py-10 md:w-[700px] rounded">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-6">
          {sections.values.map((section, index) => (
            <div key={index} className="bg-[#0F172A] text-white p-6 rounded shadow">
              <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                {section.icon && (
                  <Image
                    src={section.icon}
                    alt="icon"
                    width={20}
                    height={20}
                  />
                )}
                {section.title}
              </h3>
              <p className="text-sm">{section.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Sections
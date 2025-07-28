
import Image from 'next/image';

const CourseFeatures = ({ features } : { features: { values: Array<{ id: number; title: string; file_url: string; checklist: string[] }> } }) => {
    const data = features.values;
  return (
    <div className="py-8 md:w-[700px]">
      <h2 className="text-xl font-bold text-gray-800 mb-6">কোর্স এক্সক্লুসিভ ফিচার</h2>
      <div className="bg-white rounded-lg shadow-md p-6 max-w-4xl w-full">
        {data.map((feature) => (
          <div key={feature.id} className="mb-8">
            {/* Feature Section */}
            <div className="flex flex-col md:flex-row items-center md:items-start justify-between border-b border-gray-200 pb-6 mb-6">
              <div className="flex-1 pr-0 md:pr-8 mb-6 md:mb-0">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">{feature.title}</h3>
                <ul className="space-y-3">
                  {feature.checklist.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-gray-600">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full md:w-auto flex-shrink-0">
                <Image
                  src={feature.file_url}
                  alt={feature.title}
                  width={250}
                  height={250} 
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseFeatures;

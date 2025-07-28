import React from 'react'

function CardCourse() {
  return (
    <>
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
    </>
  )
}

export default CardCourse
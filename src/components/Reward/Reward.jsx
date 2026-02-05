import React from "react";

const Reward = () => {
  // ডাটাগুলোকে লুপ করার জন্য একটি অ্যারে
  const stats = [
    { id: 1, count: "80+", label: "Satisfied Clients" },
    { id: 2, count: "200+", label: "Projects Completed" },
    { id: 3, count: "99+", label: "Reviews Given" },
  ];

  return (
    <div className="container mx-auto px-4">
      {/* মোবাইল এবং ট্যাবলেটের জন্য কলাম অ্যাডজাস্ট করা হয়েছে */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 py-12 px-6 rounded-3xl text-center">
        {stats.map((item, index) => (
          <div
            key={item.id}
            className={`flex flex-col items-center justify-center ${
              // লাস্ট আইটেম বাদে বাকিগুলোর পাশে বড় স্ক্রিনে বর্ডার দেওয়ার জন্য
              index !== stats.length - 1 ? "md:border-r border-[#0052CC]" : ""
            }`}
          >
            <h2 className="text-[40px] lg:text-[56px] font-bold text-[#0052CC] leading-none mb-2">
              {item.count}
            </h2>
            <p className="text-[18px] lg:text-[22px] text-[#434343] font-medium capitalize">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reward;
